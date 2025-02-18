const pdfHandler = (option)=>{

    console.log(option.name + " handle with pdf handler");
    
}

const wordHandler = (option)=>{
    console.log(option.name + " handle with word handler" + option.size);
}

const excelHandler = (option)=>{
    console.log(option.name + " handle with excel handler");
}


var fileName = "abc.word";

if(fileName.endsWith(".pdf"))
{
    pdfHandler({name:fileName,size:"1000kb"});
}
else if(fileName.endsWith(".word"))
{
    wordHandler(
        {
           name:fileName,
           size:"1000kb" 
        }
    )
}
else if(fileName.endsWith(".excel"))
{
    excelHandler(
        {
            name:fileName,
            size:"1000kb"
        }
    )
}
else{
    console.log("Unsupported file format");
}