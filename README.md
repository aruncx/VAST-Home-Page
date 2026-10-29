<div align="center">

# 🎓 Vidya Campus Live Home

### A beautiful, one-file start page for **Vidya Academy of Science & Technology**
*Live clock • Google search • Quick-access icons • Auto-updating college news • Shared visit counter*

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Google Apps Script](https://img.shields.io/badge/Google%20Apps%20Script-4285F4?style=for-the-badge&logo=google&logoColor=white)
![No Dependencies](https://img.shields.io/badge/Dependencies-None-success?style=for-the-badge)

<!-- 📸 Add a screenshot of your page here:  ![Preview](docs/screenshot.png) -->

</div>

---

## 📑 Table of Contents

- [✨ Features](#-features)
- [🚀 Why use it?](#-why-use-it)
- [🖼️ Layout](#️-layout)
- [⚡ Quick Start](#-quick-start)
- [🏫 Use it as the college login page](#-use-it-as-the-college-login-page)
- [🔗 Quick-access links](#-quick-access-links)
- [📰 Auto-updating news](#-auto-updating-news)
- [⭐ Main Events slider](#-main-events-slider)
- [📊 Shared visit counter](#-shared-visit-counter)
- [🛠️ Customize](#️-customize)
- [🩺 Troubleshooting](#-troubleshooting)
- [🔒 Privacy & security](#-privacy--security)
- [📁 Project structure](#-project-structure)
- [👨‍🏫 Credits](#-credits)

---

## ✨ Features

| | Feature | What it does |
|---|---|---|
| 🕐 | **Digital clock** | Compact 12-hour digital clock with seconds, AM/PM and a blinking colon at the top right, so the poster space goes to useful content |
| 📅 | **Styled date** | Large day number with month and year, and an italic weekday beside the Institution Code, auto-fitted so long names like "September" and "Wednesday" never overflow |
| 🏛️ | **Campus background** | The college photo stays fully visible; every widget is placed around it |
| 🔍 | **Google search bar** | Type a word, press **Enter**, and Google shows the results. The cursor is already in the box when the page opens |
| 🧭 | **9 quick-access icons** | One click to the Vidya **Website**, **Gmail**, **ERP**, **KTU Webpage**, **KTU Login**, **News**, **Library**, **College Bus** and **Moodle** |
| 📱 | **Social media icons** | Small Facebook, YouTube, Instagram and LinkedIn buttons under the main icons |
| 🖼️ | **Real favicons** | Each icon uses the site's own icon when available, and falls back to a clean built-in icon |
| 📰 | **Live college news, scrolling** | Loads up to the **40 latest posts** from `news.vidyaacademy.ac.in` as clickable cards with thumbnails and scrolls through them automatically; hover or use the mouse wheel to take control |
| ⭐ | **Main Events slider** | Featured posts of the news site (big photo, title, date) rotate under the clock every 7 seconds, and each one is clickable |
| 🖥️ | **More cards visible on big screens** | The news window shows 5 cards on normal screens and up to 12 at a time on high-resolution displays |
| 📊 | **Visit counter** | Shows page opens for **Today, This Week, This Month and This Year** |
| ☁️ | **Shared counter** | Every computer adds to **one Google Sheet**, so the totals are the same everywhere |
| 💡 | **LED border animation** | A glowing animated border around the whole page |
| 📺 | **Full screen** | Double-click the page to go full screen, ideal for notice screens |

---

## 🚀 Why use it?

- 📦 **One single file.** No install, no server, no build step. Just open the HTML file.
- 🆓 **100% free.** No paid services; the shared counter runs on a free Google Sheet.
- 🔄 **Always fresh.** News refreshes itself every 30 minutes while the page stays open.
- 🛟 **Never looks broken.** If the internet or a website is down, the page falls back to saved news and a local counter.
- 📐 **Fits every screen.** The whole page scales with the window, from small laptops to 4K displays.
- 🧑‍💻 **Easy to edit.** Links, counter and news are plain, clearly commented code. No framework to learn.
- ♿ **Keyboard friendly.** Visible focus outlines, labelled buttons and a search box ready to type in.
- 🛡️ **Safe by design.** News is added as plain text, and only links to the news site are accepted.

---

## 🖼️ Layout

```text
┌──────────────────────────────────────────────────────────────┐
│  🏫 Vidya logo       Vidya Academy of Science & Technology   │
│                       Address • Website • Phone     🕐 CLOCK │
│  🔍 Google search     📅 Date | INSTITUTION CODE | Weekday   │
│  ┌────────────────┐  ┌────────────────────────────────────┐  │
│  │ 📰 Vidya News  │  │ 🌐 ✉️ 🧩 🎓 🔐 📰 📚 🚌 📝  (9 icons)  │  │
│  │  card 1        │  └────────────────────────────────────┘  │
│  │  card 2        │            🏛️ college building            │
│  │  card 3 …      │                                          │
│  └────────────────┘      ⭐ Main Events   📊 Page opens counter │
└──────────────────────────────────────────────────────────────┘
```

---

## ⚡ Quick Start

1. ⬇️ **Download** the HTML file (you can rename it to `index.html`).
2. 🖱️ **Double-click** it. It opens in your browser, and that's it.
3. ✏️ *(Optional)* Set up the [shared counter](#-shared-visit-counter) so all computers count together.

> 💡 **Tip:** The file is about 1 MB because the campus photo is built into it. That is what lets it work as a single file.

---

## 🏫 Use it as the college login page

**Option A: Set it as the browser start page (Chrome / Edge)**

1. Copy the file to a fixed folder on the computer, for example `C:\Vidya\index.html`.
2. Open **Settings → On startup → Open a specific page**.
3. Add `file:///C:/Vidya/index.html`.

**Option B: Host it online for free with GitHub Pages** 🌍

1. Upload `index.html` to a GitHub repository.
2. Go to **Settings → Pages**, choose your branch, and save.
3. Use the `https://<your-name>.github.io/<repo>/` address as the start page on every computer. When you change the file, every computer gets the update.

**Option C: Notice-board / lab display mode** 📺

Open the page and **double-click** it for full screen. Or start Chrome in kiosk mode:

```bash
chrome.exe --kiosk "file:///C:/Vidya/index.html"
```

---

## 🔗 Quick-access links

| Icon | Name | Opens |
|:---:|---|---|
| 🌐 | **Vidya Website** | https://www.vidyaacademy.ac.in/ |
| ✉️ | **Vidya Gmail** | https://mail.google.com/a/vidyaacademy.ac.in |
| 🧩 | **Vidya ERP** | https://erp.vidyaacademy.ac.in/ |
| 🎓 | **KTU Webpage** | https://ktu.edu.in/ |
| 🔐 | **KTU Login** | https://app.ktu.edu.in/login.htm |
| 📰 | **Vidya News** | https://news.vidyaacademy.ac.in/ |
| 📚 | **Library VAST** | https://library.vidyaacademy.ac.in/ |
| 🚌 | **College Bus** | https://bus.vidyaacademy.ac.in/ |
| 📝 | **Moodle VAST** | https://moodle.vidyaacademy.ac.in/ |

**📱 Social media** (small icons under the main row):

| Icon | Name | Opens |
|:---:|---|---|
| 📘 | **Facebook** | https://www.facebook.com/vidyatcr/ |
| ▶️ | **YouTube** | https://www.youtube.com/@vidyaacademyofscienceandte6537 |
| 📸 | **Instagram** | https://www.instagram.com/vidmediavast/ |
| 💼 | **LinkedIn** | https://www.linkedin.com/school/vidyatcr |

🔎 **Search bar:** the Google bar sends your text to `https://www.google.com/search?q=…`.

---

## 📰 Auto-updating news

- 📡 Reads the latest posts from the news site when the page opens, then every **30 minutes**.
- 🌉 **Why it goes through the Apps Script:** a page opened as a file on a computer is not allowed by the browser to read another website directly. The Apps Script (the same web app as the counter) fetches the news on Google's servers and passes it on, so it works everywhere. It keeps the result for 10 minutes, so the news site is not asked too often.
- 🟢 A small **Live** tag in the panel header shows the news was just loaded. **Saved copy** means it is showing the last news it could load.
- 🖱️ Each card is clickable and opens the full article.
- 📜 **Scrolling:** the panel loads up to the **40 latest posts** and scrolls through them slowly by itself. It pauses when you hover over it or touch it, you can scroll it yourself with the mouse wheel or touch, and after about 6 seconds without touching it, it carries on. At the end it waits a few seconds and goes back to the top. (People who prefer reduced motion in their system settings get no automatic scrolling.)
- 🖥️ **Resolution aware:** cards keep a comfortable size, so larger screens can show more cards at once.

| Screen | Cards visible at a time |
|---|:---:|
| 1366 × 768 | 5 |
| 1920 × 1080 | 5 |
| 2560 × 1440 | 7 |
| 3840 × 2160 | 11 |

- 🛟 **Fallback chain:** Apps Script → the news site directly (works when the page is hosted online) → last saved news in the browser → built-in list of recent headlines.

---

## ⭐ Main Events slider

- 🏆 Shows the **Featured** posts of `news.vidyaacademy.ac.in` under the clock, with the event photo, category tag, title and date.
- 🔄 Slides change every **7 seconds**; hover or focus on the panel to pause, or click a dot to jump to an event.
- 🖱️ Clicking a slide opens the full article.
- 🛟 Same fallback chain as the news cards: live feed → last saved events → built-in list.
- 🛠️ Change the number of slides with `COUNT` and the speed with `SLIDE_MS` in the events script.

---

## 📊 Shared visit counter

The counter shows how many times the page was opened **Today, This Week (Mon–Sun), This Month and This Year**.

| Mode | When | What you get |
|---|---|---|
| 💻 **Local** | `VIDYA_API` is empty | Each computer counts only its own opens |
| ☁️ **Shared** | `VIDYA_API` is set | All computers add to one Google Sheet and show the same totals |

### ☁️ Set up the shared counter (about 5 minutes, one time)

1. 📄 Create a new **Google Sheet**, for example "Vidya Page Opens".
2. 🧾 Open **Extensions → Apps Script**, paste the contents of [`counter-apps-script.gs`](counter-apps-script.gs), and save.
3. 🚀 Click **Deploy → New deployment → Web app**:
   - **Execute as:** Me
   - **Who has access:** Anyone
4. 📋 Copy the **Web app URL** (it ends with `/exec`).
5. ✏️ In the HTML file, find `var VIDYA_API = '';` and paste the URL between the quotes. The same address also powers the live news (see below).
6. 📦 Copy the updated file to your computers.

> 🔁 **Changed the script later?** Use **Deploy → Manage deployments → ✏️ → New version → Deploy**. The URL stays the same.
> 🔑 The first time you deploy a version that reads the news site, Google asks you to **review permissions** (it needs to fetch web pages). Click **Allow**.

**How it works:** each page open adds 1 to today's row in the sheet. The page reads back the totals and shows them. It refreshes the numbers every 10 minutes. If a computer is offline, it counts locally for that visit instead of failing.

---

## 🛠️ Customize

| I want to… | Change this |
|---|---|
| 🔗 Change a link | The `href` of that icon in the `<nav class="dock">` section |
| 🖼️ Change an icon image | The `data-fav` address on that icon |
| ➕ Load more or fewer news posts | `MAX_ITEMS` in the news script and `NEWS_COUNT` at the top of `counter-apps-script.gs` (default 40) |
| 🐢 Change the scroll speed | `SPEED` in the news script (pixels per second, default 20) |
| ⏱️ Change news refresh time | The `30 * 60 * 1000` value (30 minutes) in the news script |
| 🪟 Open links in a new tab | Change `target="_self"` to `target="_blank"` |
| 🕒 Change the counter time zone | `TZ` at the top of `counter-apps-script.gs` (default `Asia/Kolkata`) |
| 🏞️ Change the background | Replace the embedded campus image in the page |

---

## 🩺 Troubleshooting

<details>
<summary>🔢 <b>The counter always shows 1</b></summary>

Google Sheets may have stored the date as a real date, which older script versions could not match. Use the latest `counter-apps-script.gs` and **deploy a new version** (see above).
</details>

<details>
<summary>📰 <b>News or Main Events says "Saved copy" instead of "Live"</b></summary>

The page could not get fresh news, so it shows the last saved headlines.

1. Check that `VIDYA_API` is filled in and the Apps Script was **deployed as a new version** after pasting the latest `counter-apps-script.gs`.
2. In the Apps Script editor run `doGet` once (or open the web app URL with `?news=1` added). If a permissions window appears, click **Allow**.
3. Open `<your web app URL>?news=1` in a browser. You should see news data. If it shows an `error`, the news site is blocking Google's server, so contact the site administrator.
</details>

<details>
<summary>🖼️ <b>An icon shows a drawn symbol instead of the site's logo</b></summary>

That site has no icon at the expected address. Set `data-fav` for that icon to the site's real icon image (right-click the icon in the browser tab, or look in the page source).
</details>

<details>
<summary>✉️ <b>Gmail link does not open the college mail</b></summary>

Use the Google Workspace address `https://mail.google.com/a/vidyaacademy.ac.in`, as in this project.
</details>

<details>
<summary>🔁 <b>The local counter restarted after moving the file</b></summary>

Local counts are saved per browser and per file location. Use the **shared counter** to avoid this.
</details>

---

## 🔒 Privacy & security

- 🙈 No personal data is collected. The shared counter only stores a **date and a number**.
- 🔐 Anyone who has the Apps Script web app URL could add to the count, so avoid posting it publicly if the numbers matter.
- 🧼 News text is inserted as plain text, and only links to the college news site are accepted.
- 🌐 Searches go to Google and are handled under Google's privacy policy.

---

## 📁 Project structure

```text
📦 vidya-campus-live-home
 ┣ 📄 index.html              ← the whole page (clock, search, icons, news, counter)
 ┣ 📄 counter-apps-script.gs  ← Google Apps Script for the shared counter
 ┣ 📄 README.md               ← this file
 ┗ 📂 docs/
    ┗ 🖼️ screenshot.png       ← add your screenshot here (optional)
```

---

## 🌐 Browser support

✅ Google Chrome • ✅ Microsoft Edge • ✅ Firefox • ✅ Safari (recent versions)

---

## 👨‍🏫 Credits

Built for **Vidya Academy of Science & Technology**, Thalakottukara, Thrissur, Kerala 🇮🇳
Developed by **Arun Xavier**, Asst. Prof., Department of EEE.

<div align="center">

⭐ If this helped your campus, give the repository a star! ⭐

*Progress Through Education* 🎓

</div>
