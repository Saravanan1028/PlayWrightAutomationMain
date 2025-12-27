import{test,expect,request} from"@playwright/test"

test.describe('APITask',()=>{

    const BASEURL = "https://api.restful-api.dev/objects";
    let generatedId;

    test('get test',async({request})=>{
        const load = {
            name:"Apple Iphone 13 pro",
            data:{
                capacity:"256 GB"
            }
        };
        const res = await request.post(BASEURL,{
            data:load,
            headers:{'content-type':'application/json'}            
        })
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.id).toBeTruthy();
    generatedId= await body.id;
     console.log(generatedId);
     expect(body.name).toBe(load.name);
    });

    //GET

    test('GET test',async({request})=>{
        const res = await request.get(BASEURL);
        const body1 = await res.json();
        expect(Array.isArray(body1)).toBe(true);
        console.log(body1);
    });

    //PUT

    test('PUT test',async({request})=>{
        const res = await request.put(`${BASEURL}/${generatedId}`,{
            data:{
                name:"IPHONE 15",
                    data:{
                        updated:true
                }
            }
        });
        const body = await res.json();
        console.log(body);
        expect(res.status()).toBe(200);
    });

    //DELETE

    test('Delete test',async({request})=>{
        const res = await request.delete(`${BASEURL}/${generatedId}`);
        expect(res.status()).toBe(200);
        console.log(generatedId);
    });
})