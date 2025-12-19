//async

async function sayHello():Promise<string> {
    return "Hello World";
    }
    console.log(sayHello);

    //Await

    function delay():Promise<string>{
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve("Delayed Message");
            },1000);
        });
    }

    async function getMessage(){
        const message = await delay();
        console.log(message);
    }
    getMessage();

    //Exception Handling

    try{
        const userNmae="John";
        console.log(userNmae);
    }catch(error){
        console.error("Something went wrong:",error);
    }

    //Sample API call

    function fetchData():Promise<string>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                reject("server not responding");
            },1000);
        });
    }

    //Handling API call using async and await

    async function getData() {
        try{
            const data = await fetchData();
            console.log(data);
        }catch(error){
            console.log("Error:",error);
        };
        
    }
    getData();