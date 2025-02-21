const singapore = (fname,price)=> fname + " ur tour is confirm in singapore with package "+price
    


const lasbegas = (fname,price)=> fname + " ur tour is confirm in lasvegas with package "+price


const goa = (fname,price)=> fname + " ur tour is confirm in goa with package "+price


var budget = 1000;
var name = "Priyank";
var temp;

if(budget > 3500)
{
    temp = singapore(name,budget)
}
else if(budget > 2500)
{
    temp = lasbegas(name,budget)
}
else if(budget > 1500)
{
    temp = goa(name,budget)
}
else{
    console.log("Insufficient budget to book tour in any of the cities")
}
console.log(temp);
