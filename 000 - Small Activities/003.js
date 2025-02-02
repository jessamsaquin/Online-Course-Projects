// Write a program that checks the type of fruit based on its color using a switch statement:

// If the color is "yellow", print "Banana".
//If the color is "red", print "Apple".
//If the color is "green", print "Grapes".
//If the color is "orange", print "Orange".
//If the color is anything else, print "Unknown fruit".

let fruit ="green";

switch(fruit){
    case "yellow":
    console.log("Banana");
    break;
    case "red":
    console.log("Apple");
    break;
    case "green":
    console.log("Grapes");
    break;
    case "orange":
    console.log("Orange");
    break;
    default:
        console.log("Unknown fruit");
        break;
}