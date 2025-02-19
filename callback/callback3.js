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
    var x = cb(name,per)
    console.log(x);
    
}

var percentage = 91;

if(percentage > 90)
{
    admision("rahul",percentage,science)
}
else if(percentage > 70)
{
    admision("rahul",percentage,commerce)
}
else if(percentage > 50)
{
    admision("rahul",percentage,art);
}