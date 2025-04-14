
var mydiv = document.getElementById("mydiv")
const get = ()=>{

    const h1 = document.createElement("h1");
    h1.innerHTML = "Royal technosoft pvt ltd."
    h1.style.backgroundColor = "red"



    const a = document.createElement("a")
    a.href = "https://google.com"
    a.innerHTML = "google"
    a.addEventListener("mouseleave",()=>{
        a.href = "https://netflix.com"
    })


    mydiv.appendChild(h1); 
    mydiv.appendChild(a)
}