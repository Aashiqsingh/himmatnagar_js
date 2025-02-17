function science(per,fname)
{
    return fname + " your admisiion is confirm in science with per "+per
    
}
function commerce(per,fname){
    return fname + " your admisiion is confirm in commerce with per "+per
}

function art(per,fname){
    return fname + " your admisiion is confirm in art with per "+per
}

var percentage = parseInt(prompt("Enter percentage :-"));
var name = "vishvek";
var temp;

if(percentage > 90)
{
    temp = science(percentage,"jalay");
}
else if(percentage > 70)
{
    temp =commerce(percentage,name);
}
else if(percentage > 50)
{
    temp = art(percentage,name);
}
else{
    console.log("sorry your admission is not confirmed");
}
console.log(temp);
