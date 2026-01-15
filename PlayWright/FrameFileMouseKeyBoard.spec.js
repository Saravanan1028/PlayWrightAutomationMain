import{test,expect} from"@playwright/test"

test('@TC01_Frames',async({page})=>{
    const frameUrl="https://demo.automationtesting.in/Frames.html";
    await page.goto(frameUrl);
    await page.locator("a[href='#Single']").click();
    const frame1= page.frameLocator("#singleframe");
    await frame1.locator("[type='text']").fill("TEST");
    await page.locator("a[href='#Multiple']").click();
    const parentFrame= page.frameLocator("[src='MultipleFrames.html']");
    const childFrame= parentFrame.frameLocator("[src='SingleFrame.html']");
    await childFrame.locator("[type='text']").fill("test");

})

test('@TC02_FileUpload',async({page})=>{
    const fileUrl="https://letcode.in/file";
    await page.goto(fileUrl);
    //await page.locator("[type='file']").click();
    await page.setInputFiles("input[type='file']","C:\\Users\\sarav\\OneDrive\\Documents\\Automation\\Automation\\Files\\CSS Locators Practise.txt");
    const fileName=await page.locator(".field .ng-star-inserted").textContent();
    console.log(fileName);

})

test('@TC03_MouseActions',async({page})=>{
    const mouseUrl="https://demoqa.com/buttons";
    await page.goto(mouseUrl);
    await page.dblclick("#doubleClickBtn");
    await expect(page.locator("#doubleClickMessage")).toHaveText("You have done a double click");
    await page.click('#rightClickBtn',{button:'right'});
    await expect(page.locator("#rightClickMessage")).toHaveText("You have done a right click");
    await page.locator("text=Click Me").nth(2).click();
    await expect(page.locator("#dynamicClickMessage")).toHaveText("You have done a dynamic click");

})

test('@TC04_KeyboardActions',async({page})=>{
    const keyUrl="https://demoqa.com/text-box";
    await page.goto(keyUrl);
    await page.locator("#userName").focus()
    await page.keyboard.type("test")
    await page.keyboard.press('Tab');
    await page.keyboard.type("test@gmail.com");
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Backspace');
    await page.keyboard.type("testing@gmail.com");
})

