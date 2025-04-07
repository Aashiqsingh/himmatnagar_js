const prev = document.getElementById("prev");
const next = document.getElementById("next");

const Images = ["img1.png", "img2.webp", "img3.jpg", "img4.jpg","img5.jpg"];
var currentIndex = 0;
prev.addEventListener("click",()=>{

    let img = document.getElementById("img");
                        // (2 - 1 + 5) % 5                
    currentIndex = (currentIndex - 1 + Images.length) % Images.length;

    console.log(currentIndex);
    img.src = "../Image/" + Images[currentIndex]
    
})

next.addEventListener("click",()=>{
                        // 3 + 1 % 5
    currentIndex = (currentIndex + 1) % Images.length;
    console.log(currentIndex);

    img.src = "../Image/"+ Images[currentIndex]
    
})