// Task 1 — Student Registration Form
// Create a program using:
// prompt()
// variables (let, const)
// console.log()
// Requirements:
// Ask student name
// Ask department
// Ask age
// Print all details using template string
// Example Output:
// Welcome Naveen
// Department: CSE
// Age: 20
//--------------------------------------------

//code:

//  const name=prompt("enter your name.");
//  let department=prompt("enter your department.");
//  const age=prompt("enter your age");

//  console.log(`Welcome ${name}`);
//  console.log(`Department: ${department}`);
//  console.log(`Age: ${age}`);
 
 
//=================================================================================================================


// Task 2 — ATM Withdrawal System
// Use:
// if else
// comparison operators
// logical operators
// Requirements:
// User balance = 10000
// Ask withdrawal amount
// If amount <= balance → "Transaction Successful"
// Else → "Insufficient Balance"
// Bonus:
// Minimum withdrawal = 100
//-----------------------------------------------------

//code:


// let balance = 10000;
// let withdrawalAmount=prompt("enter withdrawal amount.");


// if(withdrawalAmount>=100 && withdrawalAmount<=balance){
//     console.log(`Transaction Successful`);
    
// }
// else{
//     console.log(`Insufficient Balance`);
    
// }



//======================================================================================================


// Task 3 — Swiggy Discount Checker
// Use:
// ternary operator
// Requirements:
// If order amount > 499
// Show:
// "Free Delivery Available"
// Else:
// "Delivery Charges Applied"
//-----------------------------------------------

//code: 

// let orderAmount =prompt("enter order amount")

// orderAmount > 499 ? console.log("Free Delivery Available") : console.log("Delivery Charges Applied");




//=====================================================================================================================================

// Task 4 — Instagram Login System
// Use:
// nested if
// Requirements:
// Correct username = "admin"
// Correct password = "1234"
// Conditions:
// If username correct → ask password
// If password correct → Login Success
// Else → Wrong Password
// Else → Invalid Username
//---------------------------------------------


//code:


// let userName=prompt("enter user name.");

// if(userName=="admin"){

//     let password = prompt("enter password")

//     if(password == "1234"){

//         console.log(`Login Success`);
        
//     }else{
//         console.log(`Wrong Password`);
        
//     }
// }else{
//     console.log(`Invalid username`);
    
// }



//=================================================================================================================

// Task 5 — Traffic Signal System
// Use:
// switch statement
// Requirements:
// Input:
// red / yellow / green
// Output:
// STOP
// READY
// GO


//code:


// let trafficSingnal = prompt("enter traffic signal light [red / yellow / green]");

// switch(trafficSingnal){
//     case "red" : console.log("STOP");
//     break;

//     case "yellow" : console.log("Ready");
//     break;

//     case "green" : console.log("GO");
//     break;

//     default : console.log("check traffic light you enter");
    
    
    
// }



//===============================================================================================================

// Task 6 — Employee Salary Calculator
// Use:
// function
// parameters
// return
// Requirements:
// Create function salaryCalculation
// Basic salary + bonus
// Return total salary
// Example:
// salaryCalculation(25000,5000)
// Output:
// 30000


// code:

// let salaryCalculation =(salary,bonus)=>{

//     return salary+bonus
// }
// let salaryWithBonus= salaryCalculation(45000,5000)
  
// console.log(salaryWithBonus);




//==================================================================================================

// Task 7 — E-Commerce Cart Total
// Use:
// Array
// for loop
// Requirements:
// Store product prices inside array:
// [100,200,300,400]
// Find:
// Total price
// Average price


//code:

// let prices =[100,200,300,400];
// var total=0;

// for(let i=0;i<prices.length;i++){
//     total = total+prices[i]
// }

// console.log(`Total Price : ${total}`);

// let avgPrice = total/prices.length

// console.log(`Average Price : ${avgPrice}`);



//=======================================================================================================

// Task 8 — WhatsApp Contact Book
// Use:
// Object
// for in loop
// Requirements:
// Store:
// name
// phone
// status
// Print all details dynamically.

//code:

// let ContactBook ={
//     name : "sai",
//     phone : 9084774737,
//     status : "Block"
// }

// for(let contact in ContactBook){
//     console.log(contact,ContactBook[contact]);
    
// }


//=============================================================================================================

// Task 9 — Movie Ticket Booking
// Use:
// function
// callback function
// Requirements:
// Create:
// bookTicket()
// payment()
// After booking complete,
// callback payment function automatically.


//code:

// function bookTicket(callback){
//     console.log(`selected seats`);
    
//     callback()
//     console.log(`ticket booking is completed`);
    
// }
// bookTicket(payment)

// function payment(){
//     console.log(`payment is successful`);
    
// }



//==========================================================================================================================

// Task 10 — Food Delivery Time Tracker
// Use:
// Generator Function
// Requirements:
// Show order stages one by one:
// Order Confirmed
// Preparing Food
// Out for Delivery
// Delivered


//code

// function* foodDeliveryTimeTracker(){

//     yield "Order Conformed"
//     yield "Preparing Food"
//     yield "Out for Delivery"
//     yield "Delivered"

// }

// let tracker = foodDeliveryTimeTracker()

// for(let track of tracker){
//     console.log(track);
    
// }