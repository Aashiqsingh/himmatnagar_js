const getData = ()=>{

    const promise = new Promise((success,failure)=>{

        setTimeout(()=>{
            success("Hello how are u...")
            // failure("Fail to resolve data....")
        },3000);
    })

    console.log(promise);
    promise.then((data)=>{
        console.log("success ...",data);
        console.log("End...");
        
        
    })
    promise.catch((err)=>{
        console.log("Failure...",err);
        
    })

    // console.log("Ending fetching data...");
    
    

}


getData()