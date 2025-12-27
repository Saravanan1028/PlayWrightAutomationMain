import{test,expect,request} from "@playwright/test"

//global

const BASE_URL="https://api.restful-api.dev/objects";
let createdId;
const objectId="";

test.describe('Restful API.dev CRUD',()=>{
//Create
    test('POST create an object',async({request})=>{
//Providing data need to post    
        const payload = {
            name: "Playwright test object",
            data:{
                foo:"bar"
            }
        };
//Posting in base url
        const res = await request.post(BASE_URL,{
            data:payload,
            headers:{'content-type':'application/json'}
        });
//To Check response status code
        expect(res.status()).toBe(200);
//To Store response        
        const body = await res.json();
//To check body id is present        
        expect(body.id).toBeTruthy();
//To store body is existing variable        
        createdId=body.id;
        console.log('Created ID:', createdId);
//To check given and res name        
        expect(body.name).toBe(payload.name);
    });
    
    //GET

    test('GET',async({request})=>{
        const res= await request.get(BASE_URL);
        expect(res.status()).toBe(200);
        const list = await res.json();
        console.log(list);
        expect(Array.isArray(list)).toBe(true);
    });

    //PUT

    test('PUT',async({request})=>
    {
        const res = await request.put(`${BASE_URL}/${createdId}`,{
            data:{
                name:'updated',
                data:{
                    update:true
                }
                },
                // header:{
                //     'Content-Type':'application/json'
                // }
                });
                expect(res.status()).toBe(200);
               
});

//DELETE
   test('DELETE',async({request})=>
{
    const res = await request.delete(`${BASE_URL}/${createdId}`,{
    });
    expect(res.status()).toBe(200);
});
});




