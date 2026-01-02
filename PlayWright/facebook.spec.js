import{test,expect} from"@playwright/test"
import { sign } from "node:crypto";

test('@TC01_Facebook ACcount Creation Page',async({page})=>{
    const Firstname="Saravanan";
    const Surname="Ravi";
    const Mobilenumber="8124540811";
    const NewPassword="Test";
    const URL="https://www.facebook.com/r.php?entry_point=login";
    
    await page.goto(URL);
    await expect(page.locator('.fb_logo ')).toBeVisible();
    await expect(page.locator('.pvl .mbs')).toHaveText('Create a new account');
    await page.locator("[name='firstname']").fill(Firstname);
    page.locator("[name='lastname']").fill(Surname);
    await expect(page.locator('.mlm').nth(0)).toBeVisible();
    await expect(page.locator('.mlm').nth(1)).toBeVisible();
    await page.locator("[name='reg_email__']").fill(Mobilenumber);
    page.locator("[autocomplete='new-password']").fill(NewPassword);
    const signUp= page.locator("[name='websubmit']");
    await expect(signUp).toHaveText("Sign up");
    await signUp.click();


})