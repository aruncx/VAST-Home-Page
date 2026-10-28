// Vidya page-open counter  (Google Apps Script, bound to a Google Sheet)
// Every time the campus page opens it calls this web app once; the sheet keeps one row per day.

var TZ = 'Asia/Kolkata';

// Google Sheets often turns "2026-10-29" into a real date, so read every kind of value back as yyyy-MM-dd text.
function dayText(v, sheetTz) {
  if (v instanceof Date) return Utilities.formatDate(v, sheetTz, 'yyyy-MM-dd');
  if (typeof v === 'number') return Utilities.formatDate(new Date(Math.round((v - 25569) * 86400000)), 'UTC', 'yyyy-MM-dd');
  return String(v).trim();
}

function doGet(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(15000);
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheetTz = ss.getSpreadsheetTimeZone();
    var sh = ss.getSheetByName('Opens') || ss.insertSheet('Opens');
    if (sh.getLastRow() === 0) sh.appendRow(['Date', 'Opens']);

    var now = new Date();
    var today = Utilities.formatDate(now, TZ, 'yyyy-MM-dd');
    var hit = e && e.parameter && e.parameter.hit === '1';

    var raw = sh.getLastRow() > 1 ? sh.getRange(2, 1, sh.getLastRow() - 1, 2).getValues() : [];
    var rows = raw.map(function (r) { return { d: dayText(r[0], sheetTz), n: Number(r[1]) || 0 }; });

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
    return ContentService.createTextOutput(JSON.stringify(out)).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
