// nested promise 

const orderZomato = ()=>{
    console.log("Order is going to placedd....");


    return promise = new Promise((success,failure)=>{
        setTimeout(()=>{
            success({
                orderId:201,
                message:"Order confirmed successfully...",
                amount:499
            })
        },4000)
    })

    
}

const paymentZomato = (data)=>{

    console.log("Payment is going to completed..");
    

    return promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                paymentId:data.orderId,
                message:"Payment done successfully...",
                amount:data.amount
            })
        },4000)
    })
}



orderZomato().then((res)=>{
    console.log("food ....",res);
    paymentZomato(res).then((data)=>{
        console.log("payment....",data);

        // console.log("Ending order work....");
        
        
    }).catch((error)=>{
        console.log("payment err ...",error);
        
    })
    
}).catch((err)=>{
    console.log("food cancel ....",err);
    
})