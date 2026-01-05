import { test, expect } from "@playwright/test";

let page;
let context;

test.describe('Registration form', () => {

  const URL = 'https://vinothqaacademy.com/demo-site/';

  test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
    page = await context.newPage(); // ✅ assign to outer variable
    await page.goto(URL);
  });

  test("UI validation", async () => {
    await expect(page.locator("[alt='Vinoth Tech Solutions']")).toBeVisible();
  });

  test.afterAll(async () => {
    await context.close();
  });
});
