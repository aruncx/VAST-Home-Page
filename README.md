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


## ✨ Features

| | Feature | What it does |
|---|---|---|
| 🕐 | **Digital clock** | Compact 12-hour digital clock with seconds, AM/PM and a blinking colon at the top right, so the poster space goes to useful content |
| 📅 | **Styled date** | Large day number with the weekday and month/year stacked beside it, in the same style as the clock; long names like "WEDNESDAY" and "September" are auto-fitted so they never overflow |
| 🏷️ | **Institution Code** | The red "INSTITUTION CODE VAS" badge sits at the top right, freeing the centre of the page |
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


## 📰 Auto-updating news

- 📡 Reads the latest posts from the news site when the page opens, then every **30 minutes**.
- 🌉 **Why it goes through the Apps Script:** a page opened as a file on a computer is not allowed by the browser to read another website directly. The Apps Script (the same web app as the counter) fetches the news on Google's servers and passes it on, so it works everywhere. It tries three ways in turn: the site's WordPress data, its RSS feed, and finally the news home page itself. It keeps the result for 10 minutes, so the news site is not asked too often.
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


---

## 🔒 Privacy & security

- 🙈 No personal data is collected. The shared counter only stores a **date and a number**.
- 🔐 Anyone who has the Apps Script web app URL could add to the count, so avoid posting it publicly if the numbers matter.
- 🧼 News text is inserted as plain text, and only links to the college news site are accepted.
- 🌐 Searches go to Google and are handled under Google's privacy policy.

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
