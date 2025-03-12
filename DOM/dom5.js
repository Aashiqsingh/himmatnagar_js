var a = 0;

var colors = ["red", "green", "blue", "yellow", "magenta", "aqua", "orange"];

// console.log(colors[1]);

function change(){
    
    var mydiv = document.getElementById("mydiv")

    var randomIndex = Math.floor(Math.random() * colors.length);
    console.log(randomIndex);

    mydiv.style.backgroundColor = colors[randomIndex]
    
    
}