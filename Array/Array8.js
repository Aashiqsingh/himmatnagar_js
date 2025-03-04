var language = ["hindi","english","telgu","french","marathi","tamil","karnad"];


const deleteLang = (langName)=>  language.filter((lang)=> lang != langName)






var ans = deleteLang("karnad");
console.log(ans);














// function deleteLang(langName){

//     return language.filter((lang)=> lang != langName)


// }



// var ans = deleteLang("karnad");
// console.log(ans);

// function deleteLang(langName){

//     return language.filter((lang)=>{
//         return lang != langName
            
//     })


// }



// var ans = deleteLang("marathi");
// console.log(ans);


// function deleteLang(langName){

//     var x = language.filter((lang)=>{
//         return lang != langName
            
//     })


//     return x;
// }



// var ans = deleteLang("marathi");
// console.log(ans);
