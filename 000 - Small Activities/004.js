//Write a program that accepts a number from 1 to 7 and 
// prints the day of the week. However, there's a twist: 
// Instead of printing the day directly, output one of 
// these based on the day number:

//If it’s Monday, print "Start of the week".
//If it’s Wednesday, print "Mid-week hustle".
//If it’s Friday, print "Weekend almost here".
//For any other day, print "Another day, another opportunity".

let num =10;

switch(num){
    case 1:
    console.log("Start of the week");
    break;
    
    case 3:
    console.log("Mid-week hustle");
    break;
    
    case 5:
    console.log("Weekend almost here");
    break;

    default:
        console.log("Another day, another opportunity");
    
}