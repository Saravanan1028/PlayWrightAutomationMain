import{test,expect,request} from"@playwright/test"


const BASEURL="https://api.restful-api.dev/objects";
let newId;
const objId="";
test.describe('API REST Testing',()=>{

    test('POST function',async({request})=>{
        const load={
            name:"new test",
            data:{
                foo:"bar"
            }
        };
        const res = await request.post(BASEURL,{
            data:load,
            headers:{'content-type':'application/json'},
        });
        expect(res.status()).toBe(200);
        const body=await res.json();
        expect(body.id).toBeTruthy();
        newId=body.id;
        console.log(newId);
        expect(load.name).toBe(body.name);
    });

    //GET

    test('GET',async({request})=>{
        const res = await request.get(BASEURL);
        expect(res.status()).toBe(200);
        const list3 = await res.json();
        console.log(list3);
        expect(Array.isArray(list3)).toBe(true);

    })
    
    //PUT

    test('PUT',async({request})=>{
        const res = await request.put(`${BASEURL}/${newId}`,{
         data:{
            name:"retest",
            data:{updated:true}
         }
        });
    expect(res.status()).toBe(200);
    });

    //DELETE

    test('DELETE',async({request})=>{

        const res = await request.delete(`${BASEURL}/${newId}`);
        expect(res.status()).toBe(200);
        console.log('deleted id:',newId);
    });

});