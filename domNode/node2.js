var output = document.getElementById("output")


const getImage = ()=>{

    const img = document.createElement("img")
    img.setAttribute("src","https://tx.audubon.org/sites/default/files/styles/bean_wysiwyg_full_width/public/cbcpressroom_tuftedtitmouse-judyhowle.jpg?itok=VMtDnqip")
    img.setAttribute("height","200px")
    img.style.width = "300px"


    output.appendChild(img)
}