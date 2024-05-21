var instruments = ["guitar","flute","drums","piano","trumpet"]

function InstrumentLoop(){
    var x
    content =""
    for (x = 0; x < instruments.length; x++){
        content += instruments[x] + "<br>"
    }
    document.getElementById("List of Instruments").innerHTML = content

}

function CatArray(){
    arrayofCats = []
    arrayofCats[0] = "sleeping cat"
    arrayofCats[1] = "playing cat"
    arrayofCats[2] = "eating cat"
    arrayofCats[3] = "jumping cat"
    document.getElementById("Cat").innerHTML= "The cat being displayed is a " + arrayofCats[1] + "."
}


function assignConstant(){
    const constantValues = {type:"car",model:"ferrari",engine:"V12"}
    constantValues.model = "lamborghini"
    constantValues.engine = "V8"
    document.getElementById("ConstantValue").innerHTML = "The car model and engine is now a " + constantValues.model + " and " +constantValues.engine + "."

}


function returningValue (value){
    var printStatement = "this is the value being printed " + value
    return document.getElementById("ReturnValue").innerHTML = printStatement

}function Call_Loop(){
    Digit = ""
    X = 1
    while (X < 11){
        Digit += "<br>" + X
        X++
    }
    document.getElementById("Loop").innerHTML = Digit
}


let newCar = {
    make : "Ferrari",
    model : "Scuderia",
    engine : "V12",
    color : "Black",
    year : "2020",
    description : function (){
        return "This car is a " + this.make + " and has a "+ this.engine +" engine."
    }
}
function Create_Car(){
    document.getElementById("Car Object").innerHTML = newCar.description()
}


var blockValue = 10
document.write(blockValue +"<br>") 

{
    let blockValue = 50
    document.write(blockValue + "<br>")
}

document.write(blockValue + "<br>")

let continueStatement = ""

function loopContinue (){
    
    for (i = 0; i < 10; i++){
        if (i == 5){continue}
    continueStatement += "The new number is now " + i + "." + "<br>"
    document.getElementById("Continue").innerHTML = continueStatement

    }
    
}

