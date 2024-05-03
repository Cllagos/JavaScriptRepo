var x = 1
function addStatement1(){
    document.write(x + 1 + "<br>")
    console.log("Add Statement 1:", x + 1)
}


function addStatement2(){
    document.write(x + 2)
    console.log("Add Statement 2:", x + 2)
}

addStatement1()
addStatement2()


function getDate(){
    newDate = new Date().getHours()
    function updateGreeting(){
        if (newDate > 17 && newDate < 24) {
            document.getElementById("greeting").innerHTML = "Good Night Carlos"
            }
        else if (newDate < 17 && newDate > 6){
            document.getElementById("greeting").innerHTML = "Have a Good Day At Work"
        }
        else{
            document.getElementById("greeting").innerHTML = "Carlos Is Sleeping"
        }}
    updateGreeting()
    console.log("New Date:",newDate)
    }
