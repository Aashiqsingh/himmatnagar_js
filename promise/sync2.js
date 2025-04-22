const getData = ()=>{

    const promise= new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                message:"Data fetched successfully....",
                status:200
            })
        },3000);
    })

    console.log(promise);
    promise.then((res)=>{
        console.log("resolve data....",res);
        
    }).catch((err)=>{
        console.log("error in fetchin data...",err);
        
    })
    
    
}