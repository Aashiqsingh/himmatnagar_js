var product = {
    id:101,
    name:"I Phone",
    price:67000,
    color:["black","white","red","green","yellow"],
    details:{
        model:"iphone 14",
        ram:"8gb",
        storage:"256gb",
        camera:"12mpx",
        battery:"3000mah"
    },
    isAvailable:true
}


console.log(product);
console.log(product.name);
console.log(product.price);
console.log(product.color);
// console.log(product.color[0]);
// console.log(product.color[1]);

for(let i=0;i<product.color.length;i++)
{
    console.log(product.color[i]);
    
}

console.log(product.details);
console.log(product.details.battery);
console.log(product.details.storage);
console.log(product.details.ram);






