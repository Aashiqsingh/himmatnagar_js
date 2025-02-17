function lasvegas(amount,name)
{
    return name + " your tour is lasvegas with package " + amount
}

function singapore(amount,name){
    return name + " your tour is singapore with package " + amount
}

function hongkong(amount,name){
    return name + " your tour is hongkong with package " + amount
}

function goa(amount,name){
    return name + " your tour is goa with package " + amount
}

var budget = 2800;
var flag;

if(budget > 4000)
{
    flag = lasvegas(budget,"jalay");
}
else if(budget > 3500)
{
    flag = singapore(budget,"pradeep");
}
else if(budget > 3000)
{
    flag = hongkong(budget,"prakash");
}
else if(budget > 2500)
{
    flag = goa(budget,"prasanna");
}
else {
    console.log("Insufficient budget to book any tour.");
}

console.log(flag);
