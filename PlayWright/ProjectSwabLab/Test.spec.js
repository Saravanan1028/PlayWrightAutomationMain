import {test} from"@playwright/test"
import { swablab_Functions } from "./function";
const URL="https://www.saucedemo.com/";
let context;
let page;

test.beforeEach('Browser Launch',async({browser})=>{
  context = await browser.newContext();
  page = await context.newPage();
  await page.goto(URL);
});

test('UI Vlidation',async()=>{
    await swablab_Functions.loginpage_UIvalidation(page);
    await swablab_Functions.loginpage_validdata(page);
    await swablab_Functions.homepage_validation(page);
});

test('Negative Scenario',async()=>{
    await swablab_Functions.loginpage_emptydata(page);
    await swablab_Functions.loginpage_invaliddata(page);
    
});

test('Positive Scenario',async()=>{
    await swablab_Functions.loginpage_validdata(page);

})