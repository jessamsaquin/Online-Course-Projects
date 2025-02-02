// Write a program that checks the age of a person and prints the appropriate message:

// If the person is less than 13 years old, print "Child".
// If the person is between 13 and 19 years old (inclusive), print "Teenager".
// If the person is between 20 and 59 years old (inclusive), print "Adult".
// If the person is 60 years or older, print "Senior".

let age = 3;

if (age >=60){
    console.log("Senior");
}else if(age >= 20 && age <= 59){
    console.log("Adult");
}else if(age >= 13 && age <= 19){
    console.log("Teenager");
}else{
    console.log("Child");
}