// var avlbal = 35000;
function setBal(){
    var avlbal = parseInt(prompt("Enter set balance "));

    localStorage.setItem("avlbal",avlbal);
}

var first = document.getElementById("first")
first.style.display = "block";
var second = document.getElementById("second")
second.style.display = "none";
function submit(){
    var atm = document.getElementsByName("atm");

    console.log(atm);

    if(atm[0].checked)
    {
        console.log("yes");
        first.style.display = "none";
        second.style.display = "block";
    }
    else{
        console.log("no");
    }
    
}

const deposit = ()=>{
    let amount = parseInt(prompt("Enter deposit amount :"))
    let avlbal = localStorage.getItem("avlbal")
    avlbal = parseInt(avlbal)
    
    avlbal += amount;

    console.log("After deposit Your amount will be " + avlbal);

    localStorage.setItem("avlbal", avlbal);
    
    
}
function secondSubmit(){
    let bank = document.getElementsByName("bank");

    if(bank[0].checked)
    {
        console.log("You are selected deposit..");
        deposit();
    }
    else if(bank[0].checked){
        
    }
}