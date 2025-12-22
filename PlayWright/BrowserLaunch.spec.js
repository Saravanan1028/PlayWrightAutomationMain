import{firefox,test}from "@playwright/test"

test("LaunchBrowser",async()=>{
    const LaunchBrowser = await firefox.launch({
        headless:false});
    
    const context = await LaunchBrowser.newContext();
    const page = await context.newPage();
    await page.goto('https://playwright.dev/');

    const context1 = await LaunchBrowser.newContext();
    const page1 = await context1.newPage();
    await page1.goto('https://www.facebook.com/');

    const context2 = await LaunchBrowser.newContext();
    const page2 = await context2.newPage();
    await page2.goto('https://www.youtube.com/');

    const context3 = await LaunchBrowser.newContext();
    const page3 = await context3.newPage();
    await page3.goto('https://www.google.com/');

     await page.close();
     await page1.close();
     await page2.close();
     await page3.close();
});

