const orderFood = (food)=>{

    if(food === "pizza")
    {
        return {
            message:"Order placed successfully..",
            orderId:101,
            amount:400
        }
    }
    else{
        return "This type of food is not available.."
    }
}
const getPayment = (option)=>{
    
    return {
        message:"Payment done successfully..",
        amount: option.amount,
        paymentId: option.orderId
    }
}



var food = prompt("Enter your food type :");

var x = orderFood(food)
console.log(x);



var x = getPayment(x)
console.log(x);



