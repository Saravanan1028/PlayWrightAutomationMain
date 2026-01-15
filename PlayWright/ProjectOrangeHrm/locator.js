export const OrangeHrm_Locators={
    orangepage:(page)=>{
        return page.locator(".orangehrm-login-slot-wrapper");

    },
    username:(page)=>{
return page.locator('[name="username"]');
    },
    password:(page)=>{
        return page.locator('[name="password"]');
        
    },
    hyperlink:(page)=>{
        return page.locator("text=OrangeHRM, Inc");
    },
    contact:(page)=>{
        return page.locator("[alt='OrangeHRM Logo']").nth(1);
    },
    
   mobileno:(page)=>{
    return page.locator(".c3Bd2c.yXUQVt");
   }



}