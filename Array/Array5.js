// Every 
var array = ["rama","seeta","geeta","mohana","krishna","radha","heera","ranjha"];



// var x = array.every((arr)=>{
//     return arr.length < 3
// })

// console.log(x);

var x = array.every((arr)=>{
    return arr.endsWith("a")
})

console.log(x);

// var x = array.every((arr)=> arr.endsWith("a"))