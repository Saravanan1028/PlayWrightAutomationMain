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
    await page.locator("[name='lastname']").fill(Surname);
    await expect(page.locator("[aria-label='Day']")).toBeVisible();
    await page.locator("#day").selectOption("10");
    await expect(page.locator("[aria-label='Month']")).toBeVisible();
    await page.locator("#month").selectOption("Jun");
    await expect(page.locator("[aria-label='Year']")).toBeVisible();
    await page.locator("#year").selectOption("1996");
    await page.getByText("Male").nth(1).check();
    await expect(page.locator('.mlm').nth(0)).toBeVisible();
    await expect(page.locator('.mlm').nth(1)).toBeVisible();
    await page.locator("[name='reg_email__']").fill(Mobilenumber);
    page.locator("[autocomplete='new-password']").fill(NewPassword);
    const signUp= page.locator("[name='websubmit']");
    await expect(signUp).toHaveText("Sign up");
    await signUp.click();
});

test('@TC02 Demo Website 1',async({page})=>{
    const URL="https://testautomationpractice.blogspot.com/"
    const Name="Saravanan";
    const Email="saravanasaran81@gmail.com";
    const Mobile="8124540811"
    const Address="Chennai";

    await page.goto(URL);
    await expect(page.locator('#header-inner .titlewrapper')).toBeVisible();
    await page.locator('#name').fill(Name);
    await page.locator('#email').fill(Email);
    await page.locator('#phone').fill(Mobile);
    await page.locator('#textarea').fill(Address);
    await expect(page.getByText("Male").nth(1)).toBeVisible();
    await page.locator('#male').check();
    await expect(page.locator('#male')).toBeChecked();
    await expect(page.locator("[for='days']")).toBeVisible();
    await expect(page.locator("[for='sunday']")).toHaveText("Sunday");
    await page.locator('#sunday').check();
    await expect(page.locator('#sunday')).toBeChecked();
    await expect(page.locator("[for='saturday']")).toHaveText("Saturday");
    await page.locator('#saturday').check();
    await expect(page.locator('#saturday')).toBeChecked();
    await expect(page.locator("[for='country']")).toBeVisible();
    await page.locator('#country').selectOption("India");
    await page.locator("#colors").selectOption("red");
    await page.locator('#animals').selectOption({vale:'lion'});  
    await page.locator('#datepicker').fill("06/10/1996");

});

test.only('@TC03 Demo website 2',async({page})=>{
    const URL="https://vinothqaacademy.com/demo-page-healthcare/";
    const PatientName="Raja";
    
    await page.goto(URL);
    await expect(page.locator('.col-md-3')).toBeVisible();
    await page.getByPlaceholder('Enter patient name').fill(PatientName);
    await expect(page.getByText('Gender:')).toBeVisible();
    await expect(page.locator("[value='male']")).toBeVisible();
    await page.locator("[value='male']").check();
    await expect(page.getByText('Symptoms:')).toBeVisible();
    await page.locator("[value='fever']").check();
    await expect(page.locator("[value='fever']")).toBeChecked();
    await page.locator("[value='cough']").uncheck();
    await page.locator("[value='fatigue']").check();
    await expect(page.locator("[value='fatigue']")).toBeChecked();
    await page.locator("[value='headache']").check();
    await expect(page.locator("[value='headache']")).toBeChecked();
    await expect(page.locator(`a[onclick="showMessage('Payment is successful!')"]`)).toHaveText("Payment Link");
    await expect(page.locator(`a[onclick="showMessage('CT Scan has been successfully scheduled!')"]`)).toHaveText("Click here to send for CT Scan");
    await expect(page.locator(`a[onclick="showMessage('MRI Scan has been successfully scheduled!')"]`)).toContainText("Click here to send for MRI Scan");
    await expect(page.locator("[onclick='handleSubmit()']")).toBeVisible();  
    await page.locator("[onclick='handleSubmit()']").click();
    await expect(page.locator("#success-message")).toHaveText("Patient data is updated successfully");
    // await page.getByText('Demo Sites').nth(1).hover();
    // await page.getByText('Practice Automation').nth(1).hover();
    // await page.getByRole('link', { name: 'DropDown' }).click();
    // await expect(page.locator("[for='simpleDropdown']")).toBeVisible();
    await page.goto("https://vinothqaacademy.com/drop-down/");
    await page.locator("[title='Choose A City']").click();
    await page.locator(".select2-search.select2-search--dropdown .select2-search__field").waitFor();
    //await page.pause();
    await page.locator(".select2-search.select2-search--dropdown .select2-search__field").fill("Chennai");
    await page.locator("[role='option']").waitFor();
    await page.locator("[role='option']").click();
    const city= await page.locator("#select2-simpleDropdown-container").textContent();
    console.log(`city: ${city}`);
    await page.locator("#select2-FromAccount-container").click();
    await page.locator(".select2-search.select2-search--dropdown .select2-search__field").waitFor();
    await page.locator(".select2-search.select2-search--dropdown .select2-search__field").fill("8400001 Bal - $3,881.62");
    await page.locator("[role='option']").waitFor();
    await page.locator("[role='option']").click();
    const account =await page.locator("#select2-FromAccount-container").textContent();
    console.log(`account no:${account}`);
    await page.pause();
    // await page.locator(".select2-selection--multiple").click();
    // await page.locator(".select2-selection.select2-selection--multiple").waitFor();
    // await page.locator(".select2-search__field").fill("JavaScript");
    // await page.locator("[role='option']").waitFor();
    // await page.locator("[role='option']").click();
    // await page.locator(".select2-search__field").fill("Java");
    // await page.locator("[role='option']").first().click();
    const dropdown= page.locator('select[name="programming"]');
    await dropdown.selectOption(['Java', 'JavaScript']);
    await expect(dropdown).toHaveValues(['JAVA','JAVASCRIPT']);
});