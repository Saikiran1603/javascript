// 1. Student Attendance System
// Create two arrays:
// presentStudents
// absentStudents
// Merge both arrays using spread operator
// Add one new student at last
// Print final array


//code:


// let presentStudents = ["sai","kiran","vamsi","priya"];
// let absentStudents = ["krish","varun","anil","abhi"]

// let totalStudents = [...presentStudents,...absentStudents]

// totalStudents.push("arjun")

// console.log(totalStudents);




//==================================================================================================================

// 2. E-Commerce Cart
// Create object for mobile details
// Create another object for charger details
// Merge both objects using spread operator
// Add deliveryDate property
// Print final object


//code:


// let mobileDetails = {

//     brand :"realme",
//     name : "realme narzo 70 turbo",
//     ram :"8gb",
//     storage : "128",
//     price : 16999
// }

// let chargerDetails = {
   
//     watts : "80w",
//     cable : "type C"
// }

// let totalDetails = {...mobileDetails,...chargerDetails,deliveryDate :"15/05/2026"};
 
// console.log(totalDetails);




//==============================================================================================================

// 3. Food Delivery App
// Create function named orderFood()
// Accept multiple food items using rest operator
// Print:
// Total items ordered
// First item
// Last item

//code:


// function orderFood(...foodItems){

//     let items=0;

//     for(let i=0 ;i<foodItems.length;i++){

//         items++;
//     }

//     console.log(`Total items ordered : ${items}`);
//     console.log(`First item : ${foodItems[0]}`);
//     console.log(`Last item : ${foodItems[foodItems.length-1]}`);
// }
// orderFood("dosa","idly","bonda","puri","chicken Biryani")


//===============================================================================================================

// 4. Employee Salary Filter
// Create array of employee objects
// Filter employees whose salary is above 50000
// Print filtered employees



//code:


// let employees = [{empName : "sai",salary : 50000},
//                  {empName:"vamsi",salary:47000},
//                  {empName:"varun",salary:60000},
//                  {empName:"arjun",salary:30000},
//                  {empName:"krishna",salary:70000}
//                 ]


//      let employee = employees.filter((c,i,t)=>{
//           return c.salary>50000
//      })           
//        console.log(employee);
       
//=================================================================================================================

// 5. Online Game Score Board
// Create array of scores
// Use reduce()
// Find total score of all players
// Print final total


//code:

// let scores = [100,150,200,170,287,277]

// let totalScore = scores.reduce((acc,c,i,t)=>{
//      return acc+c
// },0)

// console.log("Total Score :",totalScore);
