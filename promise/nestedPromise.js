const getOrder = ()=>{

    console.log("Order is about to be placed...");
    


    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                orderId:131,
                message:"Order placed successfully...",
                amount:458
            })
        },3000)
    })
    
}

const getPayment = (data)=>{
    console.log("Payment is about to be made...");
    return new Promise((success,failure)=>{
        setTimeout(()=>{
            success({
                paymentId:data.orderId,
                message:"Payment made successfully...",
                amount:data.amount
            })
        },4000)
    })
}

getOrder().then((res)=>{
    console.log("food order......",res);
    getPayment(res).then((data)=>{
        console.log("payment......",data);
    }).catch((err)=>{
        console.log("Error in payment...",err);
    })
}).catch((err)=>{
    console.log("Error in placing order...",err);
})

