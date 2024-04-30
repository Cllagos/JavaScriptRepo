var A = "This is a string, \"and this is a quote with an escape.\"" + "I like to use concatenation, but don\'t like to use breaking" // Assigning variable A to a string with escape slash and concatenation
+ " characters."
var family = "Dad, Mom, and Sister" , dad = " Dad", mom = " Mom" // Assigning multiple family member variables
document.write("My Family includes: ", family + dad + mom + '<br>') // Writing a message that displays family member variables and using a break afterwards
document.write(5*5 + "<br>") // Writing an expression message

sent1 =  "This is the beginning of the string " //Creating the first string "sent" variable as the beginning 
sent2 = "and this is the end of the string" //Creating the second string "sent" variable as the end

alert(sent1 + sent2) //Using the Alert function to display a concatenation of the two "sent" variables
document.write(sent1 + sent2) //Using the Write function to display a concatenation of the two "sent" variables
