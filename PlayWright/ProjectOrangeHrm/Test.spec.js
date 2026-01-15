import{test} from"@playwright/test"
import { Orange_Function } from "./function"

test('Orange',async ({page}) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await Orange_Function.verifyOragePage(page);
    await Orange_Function.loginpage(page);
    //await page.pause();
    const newpage = await Orange_Function.switchwindow1(page);
    await Orange_Function.contactSales(newpage);   
})
