import{expect} from"@playwright/test"
import { OrangeHrm_Locators } from "./locator"
import TestData from "../ProjectOrangeHrm/TestData.json"
import { context } from "@cucumber/cucumber";

export const Orange_Function={

async verifyOragePage(page)
{
await expect(OrangeHrm_Locators.orangepage(page)).toBeVisible();
},

async loginpage(page){
await OrangeHrm_Locators.username(page).fill(TestData.username);
await OrangeHrm_Locators.password(page).fill(TestData.password);
},


async switchwindow1(page) {
    const [newpage] = await Promise.all([
      page.context().waitForEvent('page'),
      OrangeHrm_Locators.hyperlink(page).click()
    ]);

    await newpage.waitForLoadState('domcontentloaded');
    return newpage;
  },

  async contactSales(newpage) {
    await expect(
      OrangeHrm_Locators.contact(newpage)
    ).toBeVisible({ timeout: 10000 });
  },

  async logocheck(page){
    await expect(OrangeHrm_Locators.flipkartlogo(page)).toBeVisible();
  },

  async entermobile(page){
    await OrangeHrm_Locators.mobileno.fill(page)(TestData.mobileno);
  }

};