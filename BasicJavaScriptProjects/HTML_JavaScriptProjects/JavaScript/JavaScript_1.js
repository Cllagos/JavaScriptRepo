

function carChoice(){
    carInput = document.getElementById("Car Input").value
    var carOuput
    var carString = " is a great car!"
    switch (carInput){
        case "Ferrari":
            carOuput = "Ferrari" + carString
        break;
        case "Mercedes":
            carOuput = "Mercedes" + carString
        break;
        case "BMW":
            carOuput = "BMW" + carString
        break;
        case "McLaren":
            carOuput = "McLaren" + carString
        break;
        case "Aston Martin":
            carOuput = "Aston Martin" + carString
        break;
        case "Lamborghini":
            carOuput = "Lamborghini" + carString
        break;
        case "Porsche":
            carOuput = "Porsche" + carString
        break;
        default:
            carOuput = "Please enter a car from the list."
        }
    document.getElementById("Output").innerHTML= carOuput
    }

function classNameChange(){
    var cName = document.getElementsByClassName("class1");
    cName[0].innerHTML = "Changed Text in First Element of Class 1"
    }

var c = document.getElementById("ID Name");
var ctx = c.getContext("2d");

// Create gradient
var grd = ctx.createLinearGradient(0, 0, 500, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(0, 0, 500, 250);