// without return without arguments

function demo()
{
    console.log("demo function called...");
    
}

// demo();
// demo();

// without return with argument

function add(a,b)
{
    console.log("Addition = ",a+b);
    
}

// add(3,4)
// add("shree","ram")

// with return without argument

function greet()
{
    return "Hello this is greet function...";
}

// var x = greet()
// console.log(x);

// console.log(greet());


// with return with argument

// function square(x)
// {
//     return x*x;
// }

// var x = square(5)
// console.log("Square root = ",x);


function expo(a,b)
{
    return "Exponent = " + a**b;
}

var x = expo(3,4)
console.log(x);
