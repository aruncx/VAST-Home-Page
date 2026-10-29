// Vidya campus page: Google Apps Script web app (bound to a Google Sheet)
//   ?hit=1 / ?hit=0 -> shared page-open counter (one row per day in the "Opens" sheet)
//   ?news=1         -> live news + main events, read from news.vidyaacademy.ac.in on Google's servers
//                      (so it also works when the page is opened as a file on a computer)

var TZ = 'Asia/Kolkata';
var NEWS_BASE = 'https://news.vidyaacademy.ac.in/';
var NEWS_COUNT = 40;            // how many of the latest posts the scrolling news list gets

function doGet(e) {
  var p = (e && e.parameter) || {};
  if (p.news === '1') return json_(getNews_());
  return json_(counter_(p.hit === '1'));
}

function json_(o) {
  return ContentService.createTextOutput(typeof o === 'string' ? o : JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}

/* ------------------------------ news ------------------------------ */

function getNews_() {
  var cache = CacheService.getScriptCache();
  var hit = cache.get('news_v3');
  if (hit) return hit;                                       // refreshed from the site at most every 10 minutes

  var data, how;
  try { data = fromRest_(); how = 'rest'; }
  catch (e1) {
    try { data = fromRss_(); how = 'rss'; }
    catch (e2) { return { news: [], events: [], error: 'REST: ' + e1 + ' | RSS: ' + e2 }; }
  }
  data.src = how; data.at = new Date().toISOString();
  var s = JSON.stringify(data);
  if (s.length < 95000) cache.put('news_v3', s, 600);
  return s;
}

function fetchText_(url) {
  var r = UrlFetchApp.fetch(url, { muteHttpExceptions: true, followRedirects: true });
  if (r.getResponseCode() !== 200) throw new Error('HTTP ' + r.getResponseCode() + ' ' + url);
  return r.getContentText();
}

function mapPost_(p) {
  var emb = p._embedded || {}, m = emb['wp:featuredmedia'] && emb['wp:featuredmedia'][0], thumb = '', full = '';
  if (m) {
    full = m.source_url || '';
    var z = (m.media_details && m.media_details.sizes) || {};
    thumb = (z.thumbnail && z.thumbnail.source_url) || full;
  }
  var terms = (emb['wp:term'] && emb['wp:term'][0]) || [], cat = 'Featured';
  for (var i = 0; i < terms.length; i++) if (terms[i].name && terms[i].name !== 'Featured') { cat = terms[i].name; break; }
  return { t: (p.title && p.title.rendered) || '', l: p.link, d: p.date, i: thumb, f: full, c: cat };
}

function fromRest_() {
  var q = '&_embed=wp:featuredmedia,wp:term';
  var news = JSON.parse(fetchText_(NEWS_BASE + 'wp-json/wp/v2/posts?per_page=' + NEWS_COUNT + q)).map(mapPost_);
  var events = [];
  try {                                                     // "Featured" category = the slider on the news site
    var c = JSON.parse(fetchText_(NEWS_BASE + 'wp-json/wp/v2/categories?slug=pub'));
    if (c.length) events = JSON.parse(fetchText_(NEWS_BASE + 'wp-json/wp/v2/posts?categories=' + c[0].id + '&per_page=5' + q)).map(mapPost_);
  } catch (e) {}
  if (!news.length) throw new Error('no posts');
  return { news: news, events: events };
}

function rssItems_(url, n) {
  var NS = XmlService.getNamespace('content', 'http://purl.org/rss/1.0/modules/content/');
  var items = XmlService.parse(fetchText_(url)).getRootElement().getChild('channel').getChildren('item').slice(0, n);
  return items.map(function (it) {
    var html = it.getChildText('encoded', NS) || '', m = /<img[^>]+src=["']([^"']+)["']/i.exec(html);
    var cats = it.getChildren('category'), cat = 'Campus';
    for (var i = 0; i < cats.length; i++) if (cats[i].getText() !== 'Featured') { cat = cats[i].getText(); break; }
    var d = new Date(it.getChildText('pubDate'));
    return { t: it.getChildText('title'), l: it.getChildText('link'), d: isNaN(d) ? '' : d.toISOString(), i: m ? m[1] : '', f: m ? m[1] : '', c: cat };
  });
}

function fromRss_() {
  var news = rssItems_(NEWS_BASE + 'feed/', NEWS_COUNT), events = [];
  try { events = rssItems_(NEWS_BASE + 'category/pub/feed/', 5); } catch (e) {}
  if (!news.length) throw new Error('empty feed');
  return { news: news, events: events };
}

/* ----------------------------- counter ----------------------------- */

// Google Sheets often turns "2026-10-29" into a real date, so read every kind of value back as yyyy-MM-dd text.
function dayText_(v, sheetTz) {
  if (v instanceof Date) return Utilities.formatDate(v, sheetTz, 'yyyy-MM-dd');
  if (typeof v === 'number') return Utilities.formatDate(new Date(Math.round((v - 25569) * 86400000)), 'UTC', 'yyyy-MM-dd');
  return String(v).trim();
}

function counter_(hit) {
  var lock = LockService.getScriptLock();
  lock.waitLock(15000);
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheetTz = ss.getSpreadsheetTimeZone();
    var sh = ss.getSheetByName('Opens') || ss.insertSheet('Opens');
    if (sh.getLastRow() === 0) sh.appendRow(['Date', 'Opens']);

    var now = new Date();
    var today = Utilities.formatDate(now, TZ, 'yyyy-MM-dd');

    var raw = sh.getLastRow() > 1 ? sh.getRange(2, 1, sh.getLastRow() - 1, 2).getValues() : [];
    var rows = raw.map(function (r) { return { d: dayText_(r[0], sheetTz), n: Number(r[1]) || 0 }; });

    if (hit) {                                              // count this open
      var found = false;
      for (var i = 0; i < rows.length; i++) {
        if (rows[i].d === today) {
          rows[i].n += 1;
          sh.getRange(i + 2, 2).setValue(rows[i].n);
          found = true; break;
        }
      }
      if (!found) { sh.appendRow([today, 1]); rows.push({ d: today, n: 1 }); }
    }

    var dow = Number(Utilities.formatDate(now, TZ, 'u'));   // 1 = Monday ... 7 = Sunday
    var monday = Utilities.formatDate(new Date(now.getTime() - (dow - 1) * 86400000), TZ, 'yyyy-MM-dd');
    var out = { day: 0, week: 0, month: 0, year: 0 };
    rows.forEach(function (r) {                             // adds up every row, so older duplicate rows still count
      if (r.d === today) out.day += r.n;
      if (r.d >= monday && r.d <= today) out.week += r.n;
      if (r.d.slice(0, 7) === today.slice(0, 7)) out.month += r.n;
      if (r.d.slice(0, 4) === today.slice(0, 4)) out.year += r.n;
    });
    return out;
  } finally {
    lock.releaseLock();
  }
}
