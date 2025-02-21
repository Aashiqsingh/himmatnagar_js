function science(per,name)
{
    console.log(name + " ur admision confirm in science stream with per " + per);
    
}

function commerce(per,name){
    console.log(name + " ur admission confirm in commerce stream with per " + per);
}

function art(per,name){
    console.log(name + " ur admission confirm in art stream with per " + per);
}

var percentage = parseInt(prompt("Enter percentage :"));


if(percentage > 90)
{
    science(percentage,"vrutik")
}
else if(percentage > 70)
{
    commerce(percentage,"shobha")
}
else if(percentage > 50)
{
    art(percentage,"priya")
}
else{
    console.log("Not eligible for admission");
}