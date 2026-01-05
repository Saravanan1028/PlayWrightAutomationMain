import{test,expect} from"@playwright/test"

let page;
let context;    

test.describe('Registration form',()=>{
     const URL='https://vinothqaacademy.com/demo-site/'
     const firstname ='Saravanan';
     const lastname='Ravi';
     const Address='chennai';
     const streetaddress ='new';
     const buildno='20';
     const postal='603128';
     const state="Tamil Nadu";
     const country ="India";
     const email='saravanan@gmail.com';
     const date='06/10/2024';
     const mobile='8124540811';
     const gender="Male";
     const course="Java";
     const course2="TestNG";

     test.beforeAll("Global Browser Launch",async({browser})=>{
         context = await browser.newContext();
         page = await context.newPage();
        await page.goto(URL);
     });

    test("UI validation",async()=>{
    await expect(page.locator("[alt='Vinoth Tech Solutions']")).toBeVisible();
    await expect(page.locator("#item-vfb-1 .vfb-legend")).toHaveText("Registration Form");
    await expect(page.locator("[for='vfb-5']")).toHaveText("First Name  *");
    await expect(page.locator("[for='vfb-7']")).toHaveText("Last Name  *");
    await expect(page.locator(".vfb-item-radio .vfb-desc")).toHaveText("Gender  *");
    await expect(page.locator("#vfb-31-1")).toBeVisible();
    await expect(page.locator("#vfb-31-2")).toBeVisible();
    await expect(page.locator("#vfb-31-3")).toBeVisible();
    await expect(page.locator(".vfb-item-checkbox .vfb-desc")).toHaveText("Course Interested ");
    await expect(page.locator("#vfb-20-0")).toBeVisible();
    await expect(page.locator("[for='vfb-3']")).toHaveText("Please enter two digits as displayed in Example *");
    await expect(page.locator("#vfb-4")).toBeVisible();
    });

     test("Positive scenario",async()=>{
        await page.locator("#vfb-5").fill(firstname);
        await page.locator("#vfb-7").fill(lastname);
        await page.locator(`[value=${gender}]`).check();
         const courses= page.locator("#item-vfb-20");
         const courseCount =  await courses.count();
         for(let i=0;i<courseCount;++i){
             const cour= courses.nth(i).textContent();
         if(cour===course){
             await page.locator(".vfb-checkbox ").check();
             break;
         }
         }
        await page.locator(`[value=${course2}]`).check();
        await page.locator("#vfb-13-address").fill(Address);
        await page.locator('#vfb-13-address-2').fill(streetaddress);
        await page.locator("#vfb-13-city").fill(buildno);
        await page.locator("#vfb-13-zip").fill(postal);
        await page.locator("#vfb-13-state").fill(state);
        await page.locator(".select2-selection.select2-selection--single").nth(0).click();
        const countries=page.locator("#select2-vfb-13-country-results");
        await countries.getByText(country).click();
        await page.locator("#vfb-14").fill(email);
        await page.locator("#vfb-18").fill(date);
        await page.locator("body").click();
        await page.locator("body").click();
        await page.locator(".select2-selection.select2-selection--single").nth(1).click();
        const hours=page.locator("#select2-vfb-16-hour-results");
        await hours.getByText("12").click();
        await page.locator(".select2-selection.select2-selection--single").nth(2).click();
        const min=page.locator("#select2-vfb-16-min-results");
        await min.getByText("10").click();
        await page.locator("#vfb-19").fill(mobile);
        await page.locator("#vfb-23").fill("Test");
        await page.locator("[name='vfb-3']").fill("10");
        await page.locator("#vfb-4").click();
        const ordermessage=await page.locator("#messageContainer").textContent();
        const orderId= ordermessage.split(":")[1];
        console.log(orderId);

     });

     test("Negative scenario",async()=>{
        await page.goto(URL);
        //Empty Mandatory field
        const totalCheckbox= page.locator("#item-vfb-20 input[type='checkbox']");
        const totalcount= await totalCheckbox.count();
        for(let i=0;i<totalcount;++i){
        if(await totalCheckbox.nth(i).isChecked()) {
            totalCheckbox.nth(i).uncheck();
        }
        }
        await page.locator("#vfb-4").click();
        await expect(page.locator("[for='vfb-5'].vfb-error")).toHaveText("This field is required.");
        await expect(page.locator("[for='vfb-31'].vfb-error")).toHaveText("This field is required.");
        await expect(page.locator("[for='vfb-14'].vfb-error")).toHaveText("This field is required.");
        await expect(page.locator("[for='vfb-3'].vfb-error")).toHaveText("This field is required.");
        //Invalid data in mandatory field
        await page.locator("#vfb-5").fill("   ");
        await expect(page.locator("[for='vfb-5'].vfb-error")).toHaveText("This field is required.");
        await page.locator("#vfb-7").fill("   ");
        await expect(page.locator("[for='vfb-31'].vfb-error")).toHaveText("This field is required.");
        await page.locator("#vfb-14").fill("1235@");
        await expect(page.locator("[for='vfb-14'].vfb-error")).toHaveText("Please enter a valid email address.");
        await page.locator("[name='vfb-3']").fill("1");
        await page.locator("body").click();
        await page.locator("body").click();
        await expect(page.locator("[for='vfb-3'].vfb-error")).toHaveText("Please enter at least 2 characters.");
        await page.locator("[name='vfb-3']").fill("100");
        await page.locator("body").click();
        await page.locator("body").click();
        await expect(page.locator("[for='vfb-3'].vfb-error")).toHaveText("Please enter no more than 2 characters.");
     });

     test.afterAll("Global Browser close",async()=>{
        await page.close();

     });

})