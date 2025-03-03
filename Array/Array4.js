var array = ["ram","seeta","geeta","mohan","krishna","radha","heer","ranjha"];

// var flag = true;
// // ||
// for(let i=0;i<array.length;i++)
// {
//     if(array[i].length < 4)
//     {
//         flag = false;
//     }
// }

// console.log(flag);


// var x = array.some((arr)=>{
//     return arr.length < 4;
// })

// console.log(x);


// var x = array.some((arr)=>{
//     return arr.startsWith("z")
// })

// console.log(x);


var x = array.some((arr)=> arr.startsWith("h"))
console.log(x);
