function doMathAdd (){
    var addNum = 2 + 2
    document.getElementById("add").innerHTML= "2 + 2 = " + addNum
    
}
function doMathSubtract (){ 
    var subtractNum = 5 - 2
    document.getElementById("subtract").innerHTML= "5 - 2 = " + subtractNum
}
function doMathMultiply (){ 
    var multiplyNum = 10*5
    document.getElementById("multiply").innerHTML= "10 x 5 = " + multiplyNum
}
function doMathDivide (){ 
    var divideNum = 40/8
    document.getElementById("divide").innerHTML= "40 / 8 = " + divideNum
}

function doSimpleMath (){ 
    var simpleMath = (1+2)*10/2-5
    document.getElementById("simple math").innerHTML= "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simpleMath
}