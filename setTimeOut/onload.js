var body = document.getElementsByTagName("body")[0]

function red(){
    body.style.backgroundColor = "red";


    setTimeout(() => {
        green();
    }, 3000);
}

function green(){
    body.style.backgroundColor = "green";

    setTimeout(()=>{
        purple()
    },4000)
}

function purple(){
    body.style.backgroundColor = "purple";

    setTimeout(()=>{
        pink()
    },4000)
}

function pink(){
    body.style.backgroundColor = "pink";

    setTimeout(()=>{
        yellow();
    },3000)
}

function yellow(){
    body.style.backgroundColor = "yellow";


    setTimeout(()=>{
        red()
    },3000)
}