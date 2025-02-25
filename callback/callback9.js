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
// const Handler = (FileName,cb)=>{
//     var x = cb(
//         {
//             fname:FileName,
//             size:"1000kb"
//         }
//     )
//     // console.log(x);
//     return x;
    
// }


const Handler = (FileName,cb)=>{
    return cb({fname:FileName,size:"1000kb"})
    
}

var file = "argument.doc";
var temp;

if(file.endsWith(".pdf"))
{
    temp = Handler(file,pdfHandler)
}
else if(file.endsWith(".doc")){
    temp = Handler(file,docHandler)
}
else if(file.endsWith(".word")){
    temp = Handler(file,wordHandler)
}

console.log(temp);
