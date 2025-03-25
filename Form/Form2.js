const submitHandler = (e)=>{
    e.preventDefault();
    

    var name = document.getElementById("name");
    var mobile = document.getElementById("mobile");
    var email = document.getElementById("email");

    // Regex : 

    var nameRegex = /[A-Z]{1}[a-z]+$/;

    if(name.value.match(nameRegex))
    {
        console.log("Name is valid");
    }
    else{
        console.log("Name is not valid");
    }

    var mobileRegex = /[6-9]{1}[0-9]{9}$/;

    if(mobile.value.match(mobileRegex)){
        console.log("Mobile number is valid");
    }
    else{
        console.log("Mobile number is not valid");
    }


    var emailRegex = /[a-z0-9]+.@[a-z]+\.[a-z]+$/

    if(email.value.match(emailRegex)){
        console.log("Email is valid");
    }
    else{
        console.log("Email is not valid");
    }
}