// const getData = ()=>{

//     var pro = new Promise((success,failure)=>{
//         setTimeout(()=>{
//             success({
//                 messege:"Data fetched successfully",
//                 status:200
//             })
//         },4000)
//     })

//     pro.then((res)=>{
//         console.log(res);
//     })
//     pro.catch((error)=>{
//         console.log(error);
//     })

// }


// getData()


// const getData = ()=>{

//     var pro = new Promise((success,failure)=>{
//         setTimeout(()=>{
//             success({
//                 messege:"Data fetched successfully",
//                 status:200
//             })
//         },4000)
//     })

//     return pro;

// }


// let ans = getData()
// ans.then((data)=>{
//     console.log(data);
// })
// ans.catch((error)=>{
//     console.log(error);
// })



// const getData = ()=>{

//     var pro = new Promise((success,failure)=>{
//         setTimeout(()=>{
//             success({
//                 messege:"Data fetched successfully",
//                 status:200
//             })
//         },4000)
//     })

//     return pro;

// }


// getData().then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })


const getData = ()=>{

    return new Promise((success,failure)=>{
        setTimeout(()=>{
            success({
                messege:"Data fetched successfully",
                status:200
            })
        },4000)
    })


}

getData().then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})