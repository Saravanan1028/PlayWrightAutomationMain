import{test,expect,request} from"@playwright/test"


//Create Repo using POST
test.describe('GIT_Repo',()=>{

    const BaseUrl ='https://api.github.com';
    //repos/Saravanan1028
    const gitName = "API_Test3"
    const gitUpdatedName = "API_Test4"
    const userName="Saravanan1028"
    //Dummy to push
    const toke = process.env.GITHUB_TOKEN;
    //Original token
    test('TC01_Create Repo by POST method',async({request})=>{
    const gitload = {
        name:gitName,
        description:"Repo Created by Playwright",
        private:false
        }
        const res = await request.post(`${BaseUrl}/user/repos`,{
            data:gitload,
            headers: {
        'Authorization': `Bearer ${toke}`,
        'Accept': 'application/vnd.github+json'
      }
           // headers:{'content-type':'application/json'}
        })
       console.log(await res.json());
       expect(res.status()).toBe(201);
    });

    //View Repo Using GET

    test('TC02_View repo by GET method',async({request})=>{
        //const res = await request.get(`${BaseUrl}/repos/Saravanan1028/${gitName}`);
        const res = await request.get(`${BaseUrl}/repos/${userName}/${gitName}`,{
            headers: {
        'Authorization': `Bearer ${toke}`,
        'Accept': 'application/vnd.github+json'
      }
    });
        console.log(gitName);
        expect(res.status()).toBe(200);
    });

    //Update Repo Using Post

    test('TC03_Upadate repo using POST method',async({request})=>{
        const res = await request.post(`${BaseUrl}/repos/${userName}/${gitName}`,{
            data:{
                name:gitUpdatedName
            },

            headers:{
                'Authorization': `Bearer ${toke}`,
                'Accept': 'application/vnd.github+json'
            }
        });
        expect(res.status()).toBe(200);
    });
    
    //Deleting repo using Delete

    

  test('TC04_Delete Repo', async ({ request }) => {
    await new Promise(resolve => setTimeout(resolve, 3000));
    const res = await request.delete(
      `${BaseUrl}/repos/${userName}/${gitUpdatedName}`,
      {
        headers: {
          'Authorization': `Bearer ${toke}`,
          'Accept': 'application/vnd.github+json'
        }
      }
    );
    expect(res.status()).toBe(204);
  });
})