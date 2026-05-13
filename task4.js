// Task 1 — Basic Function
// Create a function called welcomeUser.
// Requirements:
// Accept name
// Print:
// Welcome Naveen
// Example:
// welcomeUser("Naveen")


//code:

//    function welcomeUser(name){
//     console.log(`Welcome ${name}`);
    
//    }
//    welcomeUser("Saikiran")


//=================================================================================================================

// Task 2 — Parameter + Return
// Create a function squareNumber.
// Requirements:
// Accept one number
// Return square value
// Example:
// squareNumber(5)
// Output:
// 25


//code:

//    function squareNumber(num){
//     return num*num;
//    }
//    console.log(squareNumber(5));
   

//===============================================================================================================

// Task 3 — Object Function
// Create an object:
// {
//    name : "Rahul",
//    salary : 50000
// }
// Requirements:
// Create a function:
// employeeBonus(bonus)
// Output:
// Rahul
// 55000


//code:

// let employee={
//    name : "Rahul",
//     salary : 50000
// }

//  function employeeBonus(bonus){
//     console.log(employee.name);
//     console.log(employee.salary+bonus);  
//  }
// employeeBonus(5000)

//==============================================================================================================

// Task 4 — Scope Checking
// Inside a function:
// Create var
// Create let
// Create const
// Requirements:
// Try accessing them outside block
// Observe which works and which gives error


//code:

// function scopeChecking(){
//     var a=5;
//     let b=3;
//     const c=2;
// }
// scopeChecking()
//console.log(a);
//console.log(b);
//console.log(c);

//All three getting error "not defined"

//================================================================================================================

// Task 5 — Arrow Function
// Convert this into arrow function:
// function add(a,b){
//    console.log(a+b);
// }


//code:

// let add=(a,b)=>{
//      console.log(a+b);
     
// }
// add(10,20)


//=================================================================================================================

// Task 6 — Callback Function
// Create:
// multiply
// calculator
// Requirements:
// calculator should accept:
// callback function
// two numbers
// Example:
// calculator(multiply,5,2)
// Output:
// 10

//code:


//   function multiply(n1,n2){

//      console.log(n1*n2);
     
//   }


//   function calculator(callback,n1,n2){
//          callback(n1,n2)
//   }
//   calculator(multiply,5,2)



//===============================================================================================================

// Task 7 — Generator Function
// Create generator function offers.
// Requirements:
// Yield:
// "50% OFF"
// "Free Delivery"
// "Cashback"
// Use:
// next()
// to print values one by one.

//code:

//   function* offers(){
//      yield "50% OFF"
//      yield "Free Delivery"
//      yield "Cashback"

//   }
   
//   let offer=offers()
//   console.log(offer.next().value);
//   console.log(offer.next().value);
//   console.log(offer.next().value);
  
  

//===============================================================================================================

// Task 8 — Default Parameter
// Create:
// student(name,course="JavaScript")
// Requirements:
// If course not passed,
// default should become "JavaScript".


//code:

// let student=(name,course="javascript")=>{
//     console.log(`Name : ${name}`);
//     console.log(`course : ${course}`);  
// }
// student("sai")



//===============================================================================================================

// Task 9 — Currying
// Create currying function for multiplication.
// Example:
// multi(2)(3)(4)
// Output:
// 24

//code:

//   function mult(n1){
//     return function(n2){
//         return function(n3){
//               console.log(n1*n2*n3);
              
//         }
//     }
//   }
//    mult(2)(3)(4)

//================================================================================================================

// Task 10 — Spread Operator
// Merge these arrays:
// [1,2,3]
// [4,5,6]
// Final Output:
// [1,2,3,4,5,6]

//code:

//   let a=[1,2,3]
//   let b= [4,5,6]

//   let ab=[...a,...b]
//   console.log(ab);
  


//================================================================================================================

// Task 11 — Object Spread
// Merge two objects:
// {name:"Navi"}
// {role:"Developer"}
// Final Output:
// {
//   name:"Navi",
//   role:"Developer"
// }


//code:

// let empName={
//     name:"Navi"
// }

// let empRole={
//     role:"Developer"
// }

// let empData={...empName,...empRole}

// console.log(empData);



//================================================================================================================

// Task 12 — Rest Operator
// Create function:
// numbers(...num)
// Requirements:
// Print all numbers
// Print total sum
// Example:
// numbers(1,2,3,4)
// Output:
// [1,2,3,4]
// 10


//code:

//   let numbers=function(...num){
//      console.log(num);

//      let sum=0;

//      for(let sums of num){
//         sum+=sums
//      }

//      console.log(sum);
     
     
//   }

//   numbers(1,2,3,4)

//================================================================================================================


// Mini Challenge 🔥
// Create one small Student Management System using:
// function
// callback
// object
// array
// spread operator
// rest operator
// Features:
// Add student
// Print students
// Calculate marks
// Add bonus marks


//code:


var students=[];


function addstudents(name,marks){

    var student={
        name:name,
        marks:marks
    }

    students[students.length]=student;
}

addstudents("sai",[50,60,70])
addstudents("kiran",[50,80,70])
addstudents("varun",[90,60,70])

function printStudents(){
console.log("Students List:");

for(var i=0;i<students.length;i++){
    console.log(students[i]);
    
}
}
printStudents()

console.log(" ");

console.log(`total arks of students:`);

function showTotal(name,total){
    console.log(`name :${name} total: ${total}`);
    
}

function calculateMarks(student,callback){
      var total =0

    for(var i=0;i<student.marks.length;i++){
          total=total+student.marks[i];
    }

    callback(student.name,total);
}

for(var i=0;i<students.length;i++){
    calculateMarks(students[i],showTotal)
}


function addBonusMarks(bonus,...studentNames){
    
   

   for(var i=0;i<students.length;i++){
       
      var found =false

      for(var j=0;j<studentNames.length;j++){
         
        if(students[i].name==studentNames[j]){
            found=true
        }
      }

      if(found){
      var updateMarks=[];

        for(k=0;k<students[i].marks.length;k++){

            updateMarks[updateMarks.length]=students[i].marks[k]+bonus
        }
      }

      students[i]={
        ...students[i],
        marks:updateMarks
      }
   }
    
}
addBonusMarks(5,"sai","varun")

console.log(" ");

console.log(`After adding bonus marks`);

printStudents()

