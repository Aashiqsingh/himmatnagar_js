function submitData(){
    // var name = document.getElementById("name")

    // console.log(name.value);

    // localStorage.setItem("name",name.value)
    



    // console.log(localStorage.getItem("name"));

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let pass = document.getElementById("pass");

    localStorage.setItem("email",email.value);
    localStorage.setItem("pass",pass.value);

    var user = {
        name: name.value,
        email: email.value,
        pass: pass.value
    }
    console.log(user);
    
}

function getData(){
    let email = localStorage.getItem("email")
    let pass = localStorage.getItem("pass")


    console.log("email ...",email);
    console.log("pass ...",pass);
    
}

function deleteData(){
    // localStorage.clear();  
    localStorage.re  
}