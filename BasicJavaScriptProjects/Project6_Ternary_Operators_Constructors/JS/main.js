function rideFunction(){
    var Height, Can_Ride
    Height = document.getElementById("Height").value
    Can_Ride = (Height<50) ? "You are too short":"You are tall enough"
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride."
}


function Vehicle(Make, Model, Year, Color){
    this.Vehicle_Make = Make
    this.Vehicle_Model = Model
    this.Vehicle_Year = Year
    this.Vehicle_Color = Color
}

var Jack = new Vehicle("Dodge","Viper", 2020, "Red")
var Emily = new Vehicle("Jeep","Trail Hawk",2019,"White and Black")
var Erik = new Vehicle("Ford","Pinto",1971,"Mustard")

function myFunction(){
    document.getElementById("Keywords and Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color +"-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year +"."

}

function count_Up(){
    document.getElementById('counter').innerHTML = counter()
    function counter(){
        var startingNumber = 0;
        function countUp(){
            startingNumber += 1}
        countUp()
        return startingNumber;
        }
    }


        
    