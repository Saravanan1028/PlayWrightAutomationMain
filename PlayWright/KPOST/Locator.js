export const KPOST_Locators={

    username:(page)=>{
        return page.locator('#username');
    },
    submit_btn:(page)=>{
        return page.locator('.Button_Style');
    },
    select_personal:(page)=>{
        return page.locator("text=Personal").nth(0);
    },
    password:(page)=>{
        return page.locator("[type='password']");
    },
    login_btn:(page)=>{
        return page.locator('.Button_Style');
    },
    homepage_logo:(page)=>{
        return page.locator("[alt='Kpost Logo']");
    }
}