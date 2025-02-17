function science(per,fname)
{
    console.log(fname + " your admisiion is confirm in science with per "+per);
    
}
function commerce(per,fname){
    console.log(fname + " your admisiion is confirm in commerce with per "+per);
}

function art(per,fname){
    console.log(fname + " your admisiion is confirm in art with per "+per);
}

var percentage = 49;
var name = "vishvek";

if(percentage > 90)
{
    science(percentage,"jalay");
}
else if(percentage > 70)
{
    commerce(percentage,name);
}
else if(percentage > 50)
{
    art(percentage,name);
}
else{
    console.log("sorry your admission is not confirmed");
}