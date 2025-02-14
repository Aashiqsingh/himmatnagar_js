
var str2 = "jalay";


// console.log(str);
// console.log(str.length);

// var x = str.charAt(1)
// console.log(x);

// var x = str.charCodeAt(0)
// console.log(x);


// str.codePointAt()

// var x = str.concat(str2)
// var x = str + str2
// console.log(x);


// str.indexOf("1")

// var x = str.endsWith("ltd.")
// var x = str.startsWith("a")
// console.log(x);


// var x = str.includes("pv")
// console.log(x);

// var x = str.indexOf("r")
// console.log(x);

// var x = str.repeat(3)
// console.log(x);

// var x = str.replace("soft","hard")
// var x = str.replace("t","hard")
// var x = str.replace("soft","z")


// console.log(x);


// var x = str.replaceAll("o","z")
// console.log(x);


// var x = str.slice(1)
// var x = str.slice(1,4)
// var x = str.slice(-4,-1)

// console.log(x);


// var x = str.split(" ")
// var x = str.split("o")
// var x = str.split("")
// console.log(x);

// var x = str.slice(0,5).split("")
// console.log(x);


// console.log(str.toLowerCase());
// console.log(str.toUpperCase());

// var str = "        royal technosoft pvt ltd.         ";

// console.log(str.length);



// // var x = str.trim();
// var x = str.trimEnd()
// console.log(x.length);


// var name = "jalaypanchal";


// var anchor = "@";

// var x = anchor.concat(name).concat(name.length)
// console.log(x);

var name = "aashiq"

var sname = name.split("")

var x = []

for(let i=sname.length - 1;i>=0;i--)
{
    // console.log(sname[i]);
    x = x + sname[i]
}

console.log(x);

