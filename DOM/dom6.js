var images = ["img1.png","img2.webp","img3.jpg","img4.jpg","img5.jpg"];
console.log(images[0]);


function changeImg(){

    var randomIndex = Math.floor(Math.random() * images.length)
    console.log(randomIndex);


    console.log(images[randomIndex]);
    

    var image = document.getElementById("image");

    image.src = "../Image/" + images[randomIndex]
    // image.src = "img1.png"


}