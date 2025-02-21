function science(per,name)
{
    return name + " ur admision confirm in science stream with per " + per
    
}

function commerce(per,name){
    return name + " ur admission confirm in commerce stream with per " + per
}

function art(per,name){
    return name + " ur admission confirm in art stream with per " + per
}

var percentage = parseInt(prompt("Enter percentage :"));
var flag;

if(percentage > 90)
{
    flag = science(percentage,"vrutik")
}
else if(percentage > 70)
{
    flag = commerce(percentage,"shobha")
}
else if(percentage > 50)
{
    flag = art(percentage,"priya")
}
else{
    console.log("Not eligible for admission");
}

console.log(flag);
