var language = ["hindi","english","telgu","french","marathi","tamil","karnad"];

// filter : it will return new Array with modified data 

// var x = language.filter((lang)=>{
//     return lang.length < 6
// })

// console.log(x);


// var x = language.map((lang)=>{
//     return lang.length < 6
// })

// console.log(x);

// var deleteLang = language.filter((lang)=>{
//     return lang != "telgu"
// })

// console.log(deleteLang);

var deleteLang = language.filter((lang)=> lang != "tamil")

console.log(deleteLang);
