function demo()
{
    console.log("demo function called...");
    
}



function test(x)
{
    // console.log(x);
    x()
       
}


// test(10)
// test(12.45)
// test("ram")
// test(true)

test(demo)