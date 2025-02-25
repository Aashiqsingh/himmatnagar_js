const pdfHandler = (option)=>{
    return option.fname + " pdf handler support pdf file.."
    
}

const docHandler = (option)=>{
    return option.fname + " doc handler support doc file.."
}

const wordHandler = (option)=>{
    return option.fname + " word handler support word file.."
}


// cb -- function
const Handler = (FileName,cb)=>{
    var x = cb(
        {
            fname:FileName,
            size:"1000kb"
        }
    )
    console.log(x);
    
}

var file = "argument.pdf";

if(file.endsWith(".pdf"))
{
    Handler(file,pdfHandler)
}
else if(file.endsWith(".doc")){
    Handler(file,docHandler)
}
else if(file.endsWith(".word")){
    Handler(file,wordHandler)
}