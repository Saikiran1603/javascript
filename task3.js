// Looping Statements
//    ------------------
// 1. Print Numbers
// Print numbers from 1 to 20 using a for loop.

//CODE

    
//    for(let num=1;num<=20;num++){
//      console.log(num);
     
//    }

//========================================================================================================

// 2. Odd Numbers
// Print all odd numbers from 1 to 50.

//code:-

// for(let a=1;a<=50;a++){
//     if(a%2!=0){
//         console.log(a);
        
//     }
// }

//==============================================================================================================

// 3. Multiplication Table
// Print the multiplication table of 7.
// Example:
// 7 x 1 = 7
// 7 x 2 = 14

//code:-

//   for(let n=1;n<=10;n++){
//     console.log("7 x ",n," = ",7*n);
    
//   }

//===============================================================================================================

// 4. Reverse Counting
// Using while loop, print numbers from 20 to 1.

//code:-

    // let n=20;

    // while(n>0){
    //     console.log(n);
    //     n--;
        
    // }

//=============================================================================================================

// 5. Sum of Numbers
// Find the total sum of numbers from 1 to 100.

//   let sum=0;

//   for(let n=1;n<=100;n++){
//     sum =sum+n;
//   }
//   console.log(sum);
  
//=================================================================================================================

// 6. Array Loop
// Loop through this array and print all values.
// let fruits = ["apple","banana","orange","grapes"]
 
   //code:-

//    let fruits = ["apple","banana","orange","grapes"]

//    for(let fruit of fruits){
//       console.log(fruit);
      
//    }
 

//================================================================================================================

// 7. Count Even Numbers
// Count how many even numbers are present between 1 to 50.

   //code:-

//     let count=0;
//    for(let n=1;n<=50;n++){
//       if(n%2==0){
//         count++;
//       }
//    }

//    console.log("no of even numbers are present : ",count);
   

//=================================================================================================================

// 8. Star Pattern
// Print this pattern using loops:
// *
// **
// ***
// ****
// *****

//code:-

//    for(let n=1;n<=5;n++){
//      let star="";
//      for(let k=1;k<=n;k++){
//         star +="*"
       
//      }
//    console.log(star);
    
//    }

//=================================================================================================================

// Functions
// ---------

// 9. Simple Function
// Create a function named welcome() that prints:
// Welcome to JavaScript

   //code:-

    //  function welcome(){
    //     console.log("Welcome to JavaScript");
        
    //  }
    //  welcome()


//==================================================================================================================

// 10. Function with Parameter
// Create a function that accepts a name and prints:
// Hello Naveen
   
   //code:-

//    function user(name){
//        console.log("Hello",name);
       
//    }

//    user("Naveen")

//====================================================================================================================
// 11. Add Two Numbers
// Create a function that takes 2 numbers and returns the addition.
// Example:
// add(10,20)
// Output:
// 30

//code:-


//  function add(n1,n2){
//       return n1+n2;
//  }

//  console.log(add(10,20))




//=================================================================================================================

// 12. Salary Bonus
// Create a function that adds bonus to employee salary.
// Example:
// salary = 50000
// bonus = 5000
// Output:
// 55000
   

//code:-

//  let salary = 50000

//  function addBonus(bonus){
//       console.log(salary+bonus);
      
//  }

//  addBonus(5000)




//=================================================================================================================
// 13. Object Loop
// Print all keys and values using for in.
// let student = {
//     name : "Rahul",
//     course : "JavaScript",
//     marks : 95
// }


//code

// let student = {
//            name : "Rahul",
//            course : "JavaScript",
//            marks : 95
//     }

// for(let std in student){
//      console.log(std,":",student[std]);
     
// }

//=================================================================================================================

// 14. Find Largest Number
// Create a function to find the largest number between two values.
// Example:
// largest(10,50)
// Output:
// 50

//code:-

// function largest(n1,n2){
//     if(n1>n2){
//         console.log(n1);
        
//     }else if(n2>n1){
//         console.log(n2);
//     }else{
//         console.log("both are equal");
//     }
// }

// largest(10,50)


//=================================================================================================================

// 15. Mini Employee Task
// Create an employee object and print:
// Employee Name
// Department
// Salary
// Salary after bonus
// Using:
// object
// function
// parameter
// console.log()


let employee={
     Name:"sai",
     Department:"cse",
     Salary:40000,
     Salaryafterbonus:45000
}

function empDetails(name,dep,sal,sab){
     console.log("Employee Name :",name);
      console.log("Department :",dep);
       console.log("Salary :",sal);
        console.log("Salary after bonus :",sab);
}
empDetails(employee.Name,employee.Department,employee.Salary,employee.Salaryafterbonus)