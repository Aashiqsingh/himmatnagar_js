function submitHandler(e){
    e.preventDefault();

    var name = document.getElementById("name")

    var gen = '';

    var gender = document.getElementsByName("gender")
    // console.log(gender);

    if(gender[0].checked === true)
    {
        gen = "Male"
    }
    else if(gender[1].checked === true){
        gen = "Female"
    }
    else if(gender[2].checked === true){
        gen = "Other"
    }

    var age = document.getElementById("age")

    if(gen === "Male")
    {
        if(age.value > 18)
        {
            console.log("You are eligible for vote..");     
        }
        else{
            console.log("You are not eligible for vote..");
        }
    }
    else if(gen === "Female"){
        if(age.value > 22)
        {
            console.log("You are eligible for vote..");
        }
        else{
            console.log("You are not eligible for vote..");
        }
    }
    else{
        if(age.value > 25)
        {
            console.log("You are eligible for vote..");
        }
        else{
            console.log("You are not eligible for vote..");
        }
    }


    console.log("Name = ",name.value);
    console.log("Gender = ",gen);
    console.log("Age = ",age.value);
    
    
    


    // console.log("name = ",name.value);
    // console.log("gender = ",gen);
    
    
    







    // alert("Form submitted...");
}