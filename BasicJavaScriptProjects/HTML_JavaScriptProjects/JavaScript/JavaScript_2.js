
var element = document.getElementById("fname")
function validateForm() {
    let x = element.value
    if (x == ""){
      alert("Name must be filled out");
      return false;
    }
}
