const singapore = (fname,price)=>{

    console.log(fname + " ur tour is confirm in singapore with package "+price);
    
}

const lasbegas = (fname,price)=>{

    console.log(fname + " ur tour is confirm in lasvegas with package "+price);
}

const goa = (fname,price)=>{
    console.log(fname + " ur tour is confirm in goa with package "+price);
}

var budget = 3000;
var name = "Priyank"

if(budget > 3500)
{
    singapore(name,budget)
}
else if(budget > 2500)
{
    lasbegas(name,budget)
}
else if(budget > 1500)
{
    goa(name,budget)
}
else{
    console.log("Insufficient budget to book tour in any of the cities")
}