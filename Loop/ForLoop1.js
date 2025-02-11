// for(let i=0;i<5;i++)
// {
//     // console.log(i);
//     console.log("hello = ",i);
    
// }


// reverse number 

// var num = 131;
// var temp = num;
// var rev = 0;

// for(;num>0;)
// {
//     var rem = num % 10;
//     rev = rev * 10 + rem;
//     num = Math.floor(num / 10);
// }

// if(rev == temp)
// {
//     console.log("Number is palindrome");
// }
// else{
//     console.log("Number is not palindrome");
// }



// console.log("revrese number : ",rev);


// Fibonacci Series 0 1 1 2 3 5

// var a = 0;
// var b = 1;

// console.log(a);
// console.log(b);

// for(let i=0;i<10;i++)
// {
//     let c = a + b;
//     console.log(c);
//     a = b;
//     b = c;
    
// }

// prime number :

var num = 7;
var flag = 0;

for(let i=2;i<num;i++)
{
    if(num % i == 0)
    {
        flag = 1;
    }

    
}

if(flag == 1)
{
    console.log("Number is not prime");
}
else{
    console.log("Number is prime");
    
}



