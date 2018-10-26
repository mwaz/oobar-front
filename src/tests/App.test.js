const puppeteer = require("puppeteer");
const faker = require("faker");

const person = {
  username: faker.name.firstName(),
  email: faker.internet.email(),
  password: faker.random.word(4),
  confirmPassword: faker.random.word(4)
};

describe("Signup Page", () => {
  test(
    "Signup Page loads correctly",
    async () => {
      let browser = await puppeteer.launch({
        headless: false,
        slowMo: 50
      });
      let page = await browser.newPage();
      page.emulate({
        viewport: {
          height: 2400,
          width: 1000
        },
        userAgent: ""
      });
      await page.goto("http://localhost:3000/signup");
      await page.waitForSelector(".form-control");
      await page.click("#username");
      await page.type("#username", person.username);
      await page.click("#email");
      await page.type("#email", person.email);
      await page.click("#password");
      await page.type("#password", person.password);
      await page.click("#cpassword");
      await page.type("#cpassword", person.confirmPassword);
      await page.click(".btn-primary");
      browser.close();
    },
    16000
  );
});
