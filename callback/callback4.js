function science(name,per)
{
    return name + " your admision confirm in science stream with per " + per
    
}

function commerce(name,per){
    return name + " your admision confirm in commerce stream with per " + per
    
}

function art(name,per){
    return name + " your admision confirm in art stream with per " + per
    
}

// cb -- callback 
function admision(name,per,cb)
{
    // var x = cb(name,per)
    

    // return x
    

    return cb(name,per)
}

var percentage = 91;
var flag;

if(percentage > 90)
{
    flag = admision("rahul",percentage,science)
}
else if(percentage > 70)
{
    flag = admision("rahul",percentage,commerce)
}
else if(percentage > 50)
{
    flag = admision("rahul",percentage,art);
}

console.log(flag);
