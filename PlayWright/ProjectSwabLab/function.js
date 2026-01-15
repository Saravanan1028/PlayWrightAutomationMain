import { expect } from "@playwright/test";
import { swablab_Locator } from "./locator"
import TestData from"../ProjectSwabLab/TestData.json"
export const swablab_Functions={

   async loginpage_UIvalidation(page){
    await expect(swablab_Locator.loginpage_swablab(page)).toBeVisible();
    await expect(swablab_Locator.loginpage_username(page)).toBeVisible();
    await expect(swablab_Locator.loginpage_password(page)).toBeVisible();
    await expect(swablab_Locator.loginpage_loginbtn(page)).toBeVisible();
   },


    async loginpage_invaliddata(page){
    await swablab_Locator.loginpage_username(page).fill(TestData.Invalidusername);
    await swablab_Locator.loginpage_password(page).fill(TestData.Invalidpassword);
    await swablab_Locator.loginpage_loginbtn(page).click();
    await expect(swablab_Locator.loginpage_Invaliderror(page)).toHaveText("Epic sadface: Username and password do not match any user in this service");
    },

    async loginpage_emptydata(page){
        await swablab_Locator.loginpage_loginbtn(page).click();
        await expect(swablab_Locator.loginpage_emptyerror(page)).toHaveText("Epic sadface: Username is required");
    },

    async loginpage_validdata(page){
        await swablab_Locator.loginpage_username(page).fill(TestData.Validusername);
        await swablab_Locator.loginpage_password(page).fill(TestData.Validpassword);
        await swablab_Locator.loginpage_loginbtn(page).click();
    },

    async homepage_validation(page){
        await expect (swablab_Locator.homepage_logo(page)).toBeVisible();
        await expect(swablab_Locator.homepage_cartbtn(page)).toBeVisible();
        await expect(swablab_Locator.homepage_filterbtn(page)).toBeVisible();
        await expect(swablab_Locator.homepage_menubtn(page)).toBeVisible();
        await expect(swablab_Locator.homepage_sociallink(page)).toBeVisible();
        await swablab_Locator.homepage_filterbtn(page).click();
        await expect(swablab_Locator.homepage_menu_about(page)).toBeVisible();
        await expect(swablab_Locator.homepage_menu_allitem(page)).toBeVisible();
        await expect(swablab_Locator.homepage_menu_logout(page)).toBeVisible();
        await expect(swablab_Locator.homepage_menu_rest(page)).toBeVisible();
        await expect(swablab_Locator.homepage_addcart_btn(page)).toBeVisible();
        await swablab_Locator.homepage_addcart_btn(page).click();
        await expect(swablab_Locator.homepage_cart_visbile(page)).toBeVisible();

    },

}