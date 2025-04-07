const txt = document.getElementById("txt");

txt.addEventListener("click",()=>{
    txt.innerHTML = "Royal technosoft pvt ltd.."
})
txt.addEventListener("dblclick",()=>{
    txt.style.height = "200px";
    txt.style.width = "200px";
    txt.style.backgroundColor = "red";
})
txt.addEventListener("mouseenter",()=>{
    txt.style.fontSize = "50px"
})