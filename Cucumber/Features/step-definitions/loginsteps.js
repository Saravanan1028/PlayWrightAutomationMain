const {Given , When , Then , Before , After , setDefaultTimeout } = require('@cucumber/cucumber');
const {chromium}=require('playwright');

setDefaultTimeout(60*1000); //Set Default timer to 60 seconds

Before(async function(){
    this.browser = await chromium.launch({headless:false,slowMo:300});
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
});

After(async function () {
    await this.browser.close();
});

Given('user open login page',async function () {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');    
});

When('user enter username and password',async function () {
    await this.page.fill('input[name="username"]','Admin');
    await this.page.fill('input[name="password"]','admin123');
});

Then('user click login button', async function () {
    await this.page.click('[type="submit"]');    
});

Then('user should see the dashboard',async function () {
    await this.page.waitForSelector('h6');
    console.log("test");    
});