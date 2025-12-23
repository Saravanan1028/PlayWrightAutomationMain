import{chromium,test}from "@playwright/test"
test("playwright Inbuild Locators ",async({page})=>{
const browser = await chromium.launch({
    headless:false
});
await page.goto('https://www.facebook.com/');
await page.pause();
//const email = page.getByLabel("Email address or phone number");
const email = page.getByRole('textbox',{ name:"Email address or phone number"});
await email.fill("Saravanan");
const password = page.getByPlaceholder("Password");
await password.fill("$add");
//const login=page.getByRole('button', { name: 'Log in' });
//With Index
const login = page.getByRole('button', { type: 'submit' }).nth(0);
await login.click();
await page.close();
});