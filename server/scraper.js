const puppeteer = require("puppeteer");
const Turndown = require("turndown");
const turndownService = new Turndown();

function formatHTML(html) {
  html = html.replace(new RegExp("<code>", "g"), "*");
  html = html.replace(new RegExp("</code>", "g"), "*");
  html = html.replace(new RegExp("<strong>", "g"), "**");
  html = html.replace(new RegExp("</strong>", "g"), "**");
  html = html.replace(/\t/g, "");
  html = html.replace(new RegExp("<pre>", "g"), "~~~js\n");
  html = html.replace(new RegExp("</pre>", "g"), "\n~~~");
  html = html.replace(new RegExp("<p>", "g"), "");
  html = html.replace(new RegExp("</p>", "g"), "\n");
  html = html.replace(new RegExp("<div>", "g"), "");
  html = html.replace(new RegExp("</div>", "g"), "\n");
  html = html.replace(new RegExp("<ul>", "g"), "");
  html = html.replace(new RegExp("</ul>", "g"), "\n");
  html = html.replace(new RegExp("<li>", "g"), "- ");
  html = html.replace(new RegExp("</li>", "g"), "");
  html = formatImages(html);
  html = html.trim();

  return html;
}

function formatImages(img) {
  if (img.indexOf("<img") === -1) return img;

  const src = getSubstring(img, "src=", '"', 5);

  const alt = getSubstring(img, "alt=", '"', 5);

  const tag = getSubstring(img, "<img", ">", 0, true);

  img = img.replace(tag, `![${alt}](${src})`);

  return formatImages(img);
}

function getSubstring(searchIn, from, to, offset = 0, includeEnd = false) {
  const start = searchIn.indexOf(from) + offset;
  const end = start > -1 ? searchIn.indexOf(to, start) + includeEnd : -1;
  return searchIn.slice(start, end);
}

const getQuestions = async () => {
  const browser = await puppeteer.launch();
  // const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto(
    "https://leetcode.com/problemset/all/?editorialFilter=HAS_SOLUTION",
    { waitUntil: "networkidle2" }
  );

  await page.select(
    "tbody.reactable-pagination > tr > td > span > select",
    "9007199254740991"
  );

  const urls = await page.evaluate(() => {
    const questionsUrl = [
      ...document.querySelectorAll(
        "tbody.reactable-data > tr > td:nth-child(3) > div > a"
      ),
    ].map((a) => a.href);
    return questionsUrl;
  });

  console.log(urls.length);
  let questions = [];

  for (let i = 0; i < 5; i++) {
    await page.goto(urls[i], { waitUntil: "networkidle0" });

    const isLocked = await page.evaluate(() => {
      const isLocked = document
        .querySelector('[data-key="solution"] svg')
        .classList.contains("css-ut75m1-ColoredIcon");
      return [isLocked];
    });

    console.log(isLocked);

    if (isLocked[0]) continue;

    questions[i] = await page.evaluate(() => {
      // Get title
      let title = document.querySelector(".css-v3d350").innerText;
      title = title.slice(title.indexOf(".") + 2);

      // Get difficulty
      const difficulty = document.querySelector(".css-10o4wqw > div").innerText;

      // get body
      const body = document.querySelector(
        "div.content__u3I1.question-content__JfgR"
      ).innerHTML;

      const themes = [...document.querySelectorAll(".topic-tag__1jni")].map(
        (t) => t.innerText
      );

      return { title, difficulty, body, themes };
    });

    await page.goto(urls[i] + "/solution", { waitUntil: "networkidle0" });

    const solution = await page.evaluate(() => {
      const solution = document.querySelector(
        ".content__QRGW > div:nth-child(1)"
      ).innerHTML;
      return { solution };
    });

    questions[i].solution = solution.solution;
  }

  browser.close();
  return questions;
};

(async () => {
  const questions = await getQuestions();
  debugger;
  questions.forEach((q) => console.log(q.title));
})();
