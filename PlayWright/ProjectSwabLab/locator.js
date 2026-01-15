export const swablab_Locator={

    loginpage_swablab:(page)=>{
        return page.locator('.login_logo');
    },
    loginpage_username:(page)=>{
        return page.locator('#user-name');
    },
    loginpage_password:(page)=>{
        return page.locator('#password');
    },
    loginpage_loginbtn:(page)=>{
        return page.locator('[value="Login"]');
    },
    loginpage_Invaliderror:(page)=>{
        return page.locator('.error-message-container');
    },
    loginpage_emptyerror:(page)=>{
        return page.locator('.error-message-container');
    },
    homepage_logo:(page)=>{
        return page.locator('.app_logo');
    },
    homepage_menubtn:(page)=>{
        return page.locator('#react-burger-menu-btn');
    },
    homepage_cartbtn:(page)=>{
        return page.locator('.shopping_cart_link');
    },
    homepage_filterbtn:(page)=>{
        return page.locator('.product_sort_container');
    },
    homepage_sociallink:(page)=>{
        return page.locator('.social');
    },
    homepage_menu_allitem:(page)=>{
        return page.locator('#inventory_sidebar_link');
    },
    homepage_menu_about:(page)=>{
        return page.locator('#about_sidebar_link');
    },
    homepage_menu_logout:(page)=>{
        return page.locator('#logout_sidebar_link');
    },
    homepage_menu_rest:(page)=>{
        return page.locator('#reset_sidebar_link');
    },
    homepage_addcart_btn:(page)=>{
        return page.locator('[name="add-to-cart-sauce-labs-backpack"]');

    },
    homepage_cart_visbile:(page)=>{
        return page.locator('.shopping_cart_badge');
    }



}