import{test,expect,request} from"@playwright/test"

const payLoad={userEmail: "sarava664@gmail.com", userPassword: "Liger@1096"};
let token;

test.beforeAll('API Login',async({request})=>{

    const LoginResponse = await request.post("https://rahulshettyacademy.com/api/ecom/auth/login",
        {
        data:payLoad
    });

    expect(LoginResponse.ok()).toBeTruthy();
    const Jsonresponse = await LoginResponse.json();
    token = Jsonresponse.token;
    console.log(token); 
})

test('WebAPI Login',async({page})=>{
    
    page.addInitScript(value=>{
        window.localStorage.setItem('token',value)
    },token);
   
    await page.goto("https://rahulshettyacademy.com/client")
     await page.pause();
     await page.locator(".card-body b").first().waitFor();
     await page.locator(".card-body").filter({hasText:"ZARA COAT 3"})
   .getByRole("button",{name:"Add to Cart"}).click();
})