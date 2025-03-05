var departments = [
    {
        name:"IT",
        employees:[
            {
                name:"amit",
                age:23,
                gender:"male",
                isActive:true,
                salary:50000
            },
            {
                name:"sumit",
                age:25,
                gender:"male",
                isActive:true,
                salary:45000
            },
            {
                name:"seeta",
                age:26,
                gender:"female",
                isActive:true,
                salary:40000
            }
        ]
    },
    {
        name:"HR",
        employees:[
            
            {
                name:"geeta",
                age:32,
                gender:"female",
                isActive:true,
                salary:55000
            },
            {
                name:"harita",
                age:36,
                gender:"female",
                isActive:false,
                salary:60000
            },
        ]
    },
    {
        name:"Finance",
        employees:[
            
            {
                name:"siya",
                age:35,
                gender:"female",
                isActive:true,
                salary:32000
            },
            {
                name:"axit",
                age:37,
                gender:"male",
                isActive:true,
                salary:80000
            },
            {
                name:"payal",
                age:39,
                gender:"female",
                isActive:true,
                salary:65000
            },
            {
                name:"sunit",
                age:42,
                gender:"male",
                isActive:false,
                salary:95000
            }
            
        ]
    },
]

// var totalFinanceSal = departments.find((depart)=> depart.name === "Finance").employees.reduce((sum , sal)=> sum + sal.salary,0)
// console.log(totalFinanceSal);





// var findfemaleEmp = departments.find((depart)=>depart.name==="IT").employees.filter((emp)=> emp.gender === "female")

// console.log(findfemaleEmp)

// var findfemaleit = departments.find( (deprt) => deprt.name == "IT").employees.filter((gen) => gen.gender == "female")
// console.log(findfemaleit);

// var findfemaleempinit = departments.find((depart) => depart.name == "IT").employees.filter((emp) => emp.gender === "female")
// console.log(findfemaleempinit);

// var finddepemp = departments.find((depart)=> depart.name == "IT").employees.filter((gend)=> gend.gender == "female")
// console.log(finddepemp);








// var findfemaleEmp = departments.filter((depart)=>depart.employees.filter((emp)=> emp.gender === "female"))

// console.log(findfemaleEmp)

// var findFinanceEmp = departments.find((depart)=> depart.name === "IT").employees.filter((gen)=> gen.gender === "female")
// console.log(findFinanceEmp);

// var findFinanceEmp = departments.find((depart)=> depart.name === "Finance").employees
// console.log(findFinanceEmp);







// var findMaleEmp = departments.map((depart)=> depart.employees.filter((emp)=> emp.gender === "male"))
// console.log(findMaleEmp);






// var x = departments.map((depart)=>{
//     return depart.employees
// })

// console.log(x);
