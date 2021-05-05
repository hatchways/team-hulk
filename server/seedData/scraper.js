const puppeteer = require("puppeteer");
const markdownFormatter = require("./html2markdown");

const Question = require("../models/question");
const mongoose = require("mongoose");

require("dotenv").config({ path: "../.env" });

const getQuestions = async (from, to, length = false) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(
    "https://leetcode.com/problemset/all/?editorialFilter=HAS_SOLUTION",
    { waitUntil: "networkidle2" }
  );

  // Changes the value of the # of items to all
  await page.select(
    "tbody.reactable-pagination > tr > td > span > select",
    "9007199254740991"
  );

  const urls = await page.evaluate(() => {
    const questionsUrl = [
      ...document.querySelectorAll(
        "tbody.reactable-data > tr > td:nth-child(3) > div"
      ),
    ]
      .filter((el) => !el.querySelector("span"))
      .map((el) => el.querySelector("a").href);
    return questionsUrl;
  });

  if (length === true) return urls.length;
  let questions = [];

  for (let i = from; i < to; i++) {
    console.log(`fetching question: ${i}`);
    await page.goto(urls[i], { waitUntil: "networkidle0" });

    const isLocked = await page.$eval('[data-key="solution"] svg', (el) =>
      el.classList.contains("css-ut75m1-ColoredIcon")
    );

    if (isLocked) continue;

    // fetch question
    questions[i] = await page.evaluate(() => {
      // Get title
      let title = document.querySelector(".css-v3d350").innerText;
      title = title.slice(title.indexOf(".") + 2);

      // Get difficulty
      const difficulty = document.querySelector(".css-10o4wqw > div").innerText;

      // Get body
      const body = document.querySelector(
        "div.content__u3I1.question-content__JfgR"
      ).innerHTML;

      // Get themes
      const themes = [...document.querySelectorAll(".topic-tag__1jni")].map(
        (t) => t.innerText
      );

      return { title, difficulty, body, themes };
    });

    // Goes to solution
    await page.goto(urls[i] + "/solution", { waitUntil: "networkidle0" });

    // Get Solution
    const solution = await page.$eval(
      ".content__QRGW > div:nth-child(1)",
      (el) => el.innerText
    );

    questions[i].solution = solution;
    questions[i].url = urls[i];
    questions[i].body = markdownFormatter.formatHTML(questions[i].body);
  }

  browser.close();
  return questions.filter((el) => el !== null);
};

(async () => {
  await mongoose.connect(process.env.MONGO_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // change getQuestion parameters to more questions
  const questions = await getQuestions(400, 500);
  const dbQuestions = questions.map((q) => {
    const difficulty =
      q.difficulty === "Easy" ? 0 : q.difficulty === "Medium" ? 1 : 2;

    return new Question({ ...q, difficulty });
  });

  await Question.insertMany(dbQuestions, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Success");
    }
    mongoose.disconnect();
  });
})();
