import { expect } from "@playwright/test"
import { KPOST_Locators } from "./Locator"
import TestData from "../KPOST/TestData.json"
export const KPOST_Function={
      async login(page){
        await page.pause();
        await KPOST_Locators.username(page).fill(TestData.mobile);
        await KPOST_Locators.submit_btn(page).click();
        await expect(KPOST_Locators.select_personal(page)).toBeVisible();
        await KPOST_Locators.select_personal(page).click();
        await KPOST_Locators.password(page).fill(TestData.password);
        await KPOST_Locators.login_btn(page).click();
      } ,

      async homepage(page){
        await expect(KPOST_Locators.homepage_logo(page)).toBeVisible();
      }
}