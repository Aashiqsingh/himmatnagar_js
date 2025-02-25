const pdfHandler = (option)=>{
    console.log(option.fname + " pdf handler support pdf file..");
    
}

const docHandler = (option)=>{
    console.log(option.fname + " doc handler support doc file..");
}

const wordHandler = (option)=>{
    console.log(option.fname + " word handler support word file..");
}


// cb -- function
const Handler = (FileName,cb)=>{
    cb(
        {
            fname:FileName,
            size:"1000kb"
        }
    )
}

var file = "argument.word";

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