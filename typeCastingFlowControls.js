// JavaScript Tasks – Type Casting & Flow Control

// Task 1 – Predict the Output
// Write the output and datatype for below:

// console.log("10" + 5)                // OUTPUT : 105
// console.log(10 + true)               // OUTPUT : 11
// console.log(false + null)            // OUTPUT : 0
// console.log("Hello" + undefined)     // OUTPUT : Helloundefined
// console.log([1,2] + 5)               // OUTPUT : 1,25


//------------------------------------------------------------------------------------------


// Task 2 – Implicit Type Casting

// Create examples for:

// String + Number
//      console.log(typeof("23"+5))            // OUTPUT : string

// // Boolean + Number
//      console.log(typeof(true+3))            // OUTPUT : number

// // Array + String
//      console.log(typeof([1,2,3]+"12"))        //  OUTPUT : string

// // Object + Number
//      console.log(typeof({s:7}+3))             //  OUTPUT : string

// // Null + Number
//     console.log(typeof(null+2))               //   OUTPUT : number

// Print datatype using typeof.


//-----------------------------------------------------------------------------------------------



// Task 3 – Explicit Type Casting
// Convert the following into Number:
// "500"
// true
// false
// null
// "abc"
// [100]
// Print the outputs.

    //   console.log(Number("500"))      // OUTPUT : 500
    //   console.log(Number(true))       // OUTPUT : 1
    //   console.log(Number(false))      // OUTPUT : 0
    //   console.log(Number(null))       // OUTPUT : 0
    //   console.log(Number("abc"))      // OUTPUT : NAN
    //   console.log(Number([100]))      // OUTPUT : 100


//-------------------------------------------------------------------------------------------------


// Task 4 – Boolean Constructor
// Check whether below values are true or false using Boolean().
// ""
// "javascript"
// 0
// 1
// null
// undefined
// []
// {}


// console.log(Boolean(""))                        //OUTPUT : false                  
// console.log(Boolean("javascript"))              //OUTPUT : true  
// console.log(Boolean(0))                         //OUTPUT : false  
// console.log(Boolean(1))                         //OUTPUT : true
// console.log(Boolean(null))                      //OUTPUT : false  
// console.log(Boolean(undefined))                 //OUTPUT : false
// console.log(Boolean([]))                        //OUTPUT : true
// console.log(Boolean({}))                        //OUTPUT : true





//-------------------------------------------------------------------------------------------------



// Task 5 – Student Pass or Fail
// Take one variable:
// let mark = 45
// Condition:
// Above 35 → Pass
// Below 35 → Fail
// Use if else.

//SOLUTION :-
//-----------
   
// let mark=37
// if(mark>35){
//     console.log("PASS")
// }else{
//     console.log("FAIL")
// }

//---------------------------------------------------------------------------------


// Task 6 – Voting Eligibility
// Create a variable:
// let age = 20
// Conditions:
// 18 and above → Eligible
// Otherwise → Not Eligible
   

//CODE:-
//========

// let age=18

// if(age>=18){

//     console.log("Eligible")
// }else{
//     console.log("Not Eligible")
// }

//-------------------------------------------------------------------------------------------


// Task 7 – Greatest Number
// Find greatest among 3 numbers using if else if.
// Example:
// let a = 50
// let b = 80
// let c = 30

//CODE:-

// let a = 500
// let b = 500
// let c = 500
  
// if(a>b && a>c){

//     console.log("a is big");
// }
// else if(b>a && b>c){
//      console.log("b is big")
// }
// else if(c>a && c>b){
//      console.log("c is big")
// }else{
//      console.log("All are equal")
// }

//----------------------------------------------------------------------------------------------------------------


// Task 8 – Traffic Light System
// Using switch statement:
// red → stop
// yellow → ready
// green → go
  

//CODE:-


// let trafficLight="yellow"

// switch(trafficLight){
//   case "red" :
//      console.log("stop");
//   break;

//    case "yellow" :
//      console.log("ready");
//   break;

//   case "green":
//      console.log("Go");
//      break;

//   default : ("check traffic light again")
//   break;
// }

//----------------------------------------------------------------------------------------------------


// Task 9 – Login System
// Create variables:
// let username = "admin"
// let password = "1234"
// Conditions:
// Both correct → Login Success
// Otherwise → Invalid Login
// Use nested if.


//  let username = "admin"
//  let password = "1234"
//   if(username === "admin"){

//     if(password==="1234"){

//         console.log("Login Success")
//     }else{
//         console.log("Incorrect password")
//     }
//   }else{
//      console.log("Invalid Login")
//   }

//-------------------------------------------------------------------------------------------


// Task 10 – Session Finder
// Take hour value:
// let hour = 14
// Conditions:
// 1–12 → Morning
// 13–15 → Afternoon
// 16–19 → Evening
// 20–24 → Night
// Use else if.


// let hour=20

// if(hour>=1 && hour<=12){
      
//     console.log("Morning")
// }
// else if(hour>=13 && hour<=15){

//     console.log("Afternoon")
// }
// else if(hour>=16 && hour<=19){
//     console.log("Evening")
// }
// else {
//     console.log("night")
// }
//--------------------------------------------------------------------------------------------------


// Bonus Challenge 🔥

// Predict outputs without running:

// console.log(true + true)   //2
// console.log("5" - 2)       //3
// console.log("5" + 2)       //52
// console.log(null + 1)      //1
// console.log(undefined + 1)  //NAN
// console.log(Boolean(" "))    //true
// console.log(Number(true))    //1
