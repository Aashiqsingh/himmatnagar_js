function submitHandler(event){
    event.preventDefault();


    let uname = document.getElementById('uname');
    let email = document.getElementById('email');
    let password = document.getElementById('pass');
    let mobileno = document.getElementById("mobileno");


    localStorage.setItem("email",email.value)
    localStorage.setItem("password",password.value)

    var user = {
        name: uname.value,
        email: email.value,
        password: password.value,
        mobile: mobileno.value
    }
    console.log(user);
    

    location.href = "login.html";

}

function login(){
    let userEmail = document.getElementById("email")
    let userPass = document.getElementById("pass")


    let email = localStorage.getItem("email");
    let password = localStorage.getItem("password");


    if(userEmail.value == email && userPass.value == password)
    {
        alert("Login successfully...")
        location.href = "dashboard.html"
    }
    else{
        alert("Invalid credentials...")
    }


}