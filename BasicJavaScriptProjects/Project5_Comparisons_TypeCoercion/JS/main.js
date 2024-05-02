var value1 = 10
var value2 = "20"

var value3 = 100

document.write(typeof value1 + "<br>")
document.write(typeof value2 + "<br>")
document.write(value1 + value2 + "<br>")

function myFunction(){
    document.getElementById("my function").innerHTML = "Is Value 2 (\"20\")\ not a Number? " + isNaN(value2)
}

document.write((value1 === value2) + "<br>")
document.write(("10" === "10") + "<br>")
document.write((100 == 100)+ "<br>")


function booleanOperators1(){
    document.getElementById("and").innerHTML = "Is 10 greater than 5 AND 5 less than 10? "+ (10 > 5 && 5 < 10)
}

function booleanOperators2(){
    document.getElementById("or").innerHTML = "Is 10 greater than 5 OR 5 less than 10? " + (10 > 5 || 5 < 10)
}

function booleanOperators3(){
    document.getElementById("not").innerHTML = "Is the opposite of 10 greater than 11 true? " + !(10 > 11)
}


console.log("Troubleshooting Log")
