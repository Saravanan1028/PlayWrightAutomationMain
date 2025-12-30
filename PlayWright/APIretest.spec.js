import{test,expect,request} from"@playwright/test"

test.describe('API Test',()=>{

    const url="https://api.restful-api.dev/objects";
    let Id;

    test('POST Test',async({request})=>{{
        const load =  {
         name:"Samsung",
         data:{
        capacity:"256 GB"
         }
        };
        const res = await request.post(url,{
            data:load,
            headers:{'content-type':'application/json'}
        });
        expect(res.status()).toBe(200);
        const body = await res.json();
        Id = body.id;
        expect(Id).toBeTruthy();
        console.log(Id);
    }});

    test('GET test',async({request})=>{
        const res = await request.get(url);
        expect(res.status()).toBe(200);
        const body = await res.json();
        expect(Array.isArray(body)).toBe(true);
        console.log(body);
    });

    test('PUT Test',async({request})=>{
        const res = await request.put(`${url}/${Id}`,{
            data:{
                name:"samsung 23",
                data:{
                    updated:true
                }
            }
        });
        expect(res.status()).toBe(200);
        const body1 = await res.json();
        console.log(body1);
    })

    test('Delete test',async({request})=>{
        const res = await request.delete(`${url}/${Id}`);
        console.log("Deleted ID: ",Id);
    })
})