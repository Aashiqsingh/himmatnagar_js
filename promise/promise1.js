const getData = ()=>{

    var promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                message:"Data fetched successfully...",
                status:200
            })
        },3000)
    })


    // console.log(promise);
    // promise.then((data)=>{
    //     console.log("resolve data....",data);
        
    // })
    // promise.catch((err)=>{
    //     console.log(err);
        
    // })

    return promise
    

}


// var ans = getData()
// ans.then((res)=>{
//     console.log("res...",res);
    
// }).catch((err)=>{
//     console.log("err.....",err);
    
// })


getData().then((data)=>{
    console.log("data....",data);
    
}).catch((err)=>{
    console.log("err...",err);
    
})