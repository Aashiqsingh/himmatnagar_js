const lasvegas = (option)=>{
    console.log(option.name + " ur tour is confirm in lasvegas with package " + option.amount);
    
}
const singapore = (option)=>{
    console.log(option.name + " ur tour is confirm in singapore with package " + option.amount);
}

const goa = (option)=>{
    console.log(option.name + " ur tour is confirm in goa with package " + option.amount);
}


const travel = (name,amount,cb)=>{
    cb(
        {
            name:name,
            amount:amount,
            size:"1000kb"
        }
    )
}

var budget = 4001;
var fname = "rahul";

if(budget > 4000)
{
    travel(fname,budget,lasvegas)
}
else if(budget > 3000)
{
    travel(fname,budget,singapore)
}
else if(budget > 2000)
{
    travel(fname,budget,goa)
}