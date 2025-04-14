var output = document.getElementById("output")

const addPass = ()=>{

    const nameLabel = document.createElement("lable")
    nameLabel.innerHTML = "Name :"
    const nameInput = document.createElement("input")
    nameInput.type = "text"

    const br = document.createElement("br")



    output.appendChild(nameLabel)
    
    output.appendChild(nameInput)
    output.appendChild(br)
}