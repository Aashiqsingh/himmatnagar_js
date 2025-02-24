const lasvegas = (option)=>{
    return option.name + " ur tour is confirm in lasvegas with package " + option.amount
    
}
const singapore = (option)=>{
    return option.name + " ur tour is confirm in singapore with package " + option.amount
}

const goa = (option)=>{
    return option.name + " ur tour is confirm in goa with package " + option.amount
}


const travel = (name,amount,cb)=>{
    var x = cb(
        {
            name:name,
            amount:amount,
            size:"1000kb"
        }
    )

    // console.log(x);
    return x;
}

var budget = 4000;
var fname = "rahul";
var temp;

if(budget > 4000)
{
    temp = travel(fname,budget,lasvegas)
}
else if(budget > 3000)
{
    temp = travel(fname,budget,singapore)
}
else if(budget > 2000)
{
    temp = travel(fname,budget,goa)
}

console.log(temp);
