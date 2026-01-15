import{test} from"@playwright/test"
import { before } from "node:test";
import { KPOST_Function } from "./function";
const URL="https://account.kpostindia.com/login";
let context;
let page;
test.beforeAll('Browser Launch',async({browser})=>{
    context = await browser.newContext();
    page = await context.newPage();
    await page.goto(URL);
});

test('KPOST Login',async()=>{
   await KPOST_Function.login(page);
   await KPOST_Function.homepage(page);

});