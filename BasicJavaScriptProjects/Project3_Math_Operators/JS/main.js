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

function doMathModulus (){ 
    var number1 = 100 % 33
    document.getElementById("modulus").innerHTML= "When you divide 100 by 33, you get a remainder of " + number1
}

function doMathIncrement (){ 
    var number2 = 100
    number2++
    document.getElementById("increment").innerHTML= "When you increment 100 by 1, you get " + number2
}
function doMathDecrement (){ 
    var number3 = 100
    number3--
    document.getElementById("decrement").innerHTML= "When you decrement 100 by 1, you get " + number3
}
function doMathUnary (){ 
    var number4 = 100
    document.getElementById("unary").innerHTML= "When you negate the number 100, you get " + (-number4)
}
function doMathRandom (){ 
    var multiplier = 100
    document.getElementById("random").innerHTML= "Random Number= " + Math.random() * multiplier
}

    
