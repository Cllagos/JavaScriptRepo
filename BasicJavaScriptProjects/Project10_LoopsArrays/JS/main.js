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

var blockValue = 10
document.write(blockValue +"<br>") 

{
    let blockValue = 50
    document.write(blockValue + "<br>")
}

document.write(blockValue + "<br>")

function returningValue (value){
    var printStatement = "this is the value being printed " + value
    return document.getElementById("ReturnValue").innerHTML = printStatement
}