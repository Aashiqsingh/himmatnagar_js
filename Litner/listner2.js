const link = document.getElementById("link");

link.addEventListener("mouseenter",()=>{
    link.href = "https://netflix.com"
})
link.addEventListener("mouseleave",()=>{
    link.innerHTML = "Netflix"
})