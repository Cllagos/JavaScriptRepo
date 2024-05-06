

function sliceMethod(){
    var sentence = "All work and no play makes Johnny a dull boy."
    var section = sentence.slice(27,33)
    document.getElementById("Slice").innerHTML= section

}

function stringMethod(){
    var x = 182
    document.getElementById("Stringify").innerHTML=x.toString() + typeof x.toString()
}

function precisionMethod(){
    var y = 1234.05824575568
    document.getElementById("Precision").innerHTML=y.toPrecision(10)
    console.log(typeof y)
}