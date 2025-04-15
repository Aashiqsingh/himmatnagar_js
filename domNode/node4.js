var thead = document.getElementById("thead")
thead.style.display = "none"

var student = [
    {
        id: 1,
        name: "rahul",
        age: 22,
        email: "rahul@gmail.com",
        status: true
    },
    {
        id: 2,
        name: "vrutik",
        age: 20,
        email: "vrutik@gmail.com",
        status: true
    },
    {
        id: 3,
        name: "jogesh",
        age: 18,
        email: "jogesh@gmail.com",
        status: false
    },
    {
        id: 4,
        name: "yash",
        age: 19,
        email: "yash@gmail.com",
        status: false
    }
]

console.log(student);


var tbody = document.getElementById("tbody")
function addData() {

    thead.style.display = ""

    for (let i = 0; i < student.length; i++) {
        const tr = document.createElement("tr")
        const tdId = document.createElement("td")
        const tdName = document.createElement("td")
        const tdAge = document.createElement("td")
        const tdEmail = document.createElement("td")
        const tdStatus = document.createElement("td")

        tdId.innerHTML = student[i].id;
        tdName.innerHTML = student[i].name;
        tdAge.innerHTML = student[i].age;
        tdEmail.innerHTML = student[i].email;
        tdStatus.innerHTML = student[i].status == true ? "Active" :"Not Active"


        tbody.appendChild(tr);
        tr.appendChild(tdId)
        tr.appendChild(tdName)
        tr.appendChild(tdAge)
        tr.appendChild(tdEmail)
        tr.appendChild(tdStatus)
    }
}