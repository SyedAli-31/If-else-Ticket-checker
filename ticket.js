//===Ticket Checker Assignment==//
//Amusement Park//
var customerAge;
//customerAge=0;
//customerAge=15;
//customerAge=30;
//customerAge=56;
customerAge = 40;
if (customerAge <= 8) {
    console.log("Welcome, your ticket is free because you are a kid");
}
else if (customerAge <= 20) {
    console.log("Welcome, You are Teenager please buy ticket of 200$");
}
else if (customerAge <= 35) {
    console.log("Welcome,You are an adult. You need to purchase a ticket of 300$.");
}
else if (customerAge > 45) {
    console.log("You are over our age limit, we cannot issue you a ticket");
}
else {
    console.log("Sorry you are too late, All tickets are sold out");
}
