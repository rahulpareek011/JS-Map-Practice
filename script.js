//----------------------------------------------------------------------------------------------------

// 3rd question 
// Mark All Lessons as Incomplete
//  ['Lesson 1', 'Lesson 2'] → [{ lesson: 'Lesson 1', completed: false }, { lesson: 'Lesson 2', completed: false }]


// const lessons = ["Lesson 1", "Lesson 2"];
// let result = lessons.map(x => ({ lesson: x, completed: false }))
// console.log(result);


//---------------------------------------------------------------------------------------------------


//4th Question
// Attach Certificate Suffix
//  ['Digital Marketing', 'Finance Basics'] → ['Digital Marketing - Certified', 'Finance Basics - Certified']

// const certificate = ["Digital Marketing", "Finance Basics"];
// let result = certificate.map((myCertificate) =>  myCertificate + "- Certified") ;
// console.log(result);


//---------------------------------------------------------------------------------------------------


//5th Question
// Convert Marks to Pass/Fail
//  [65, 45, 30] → ['Pass', 'Pass', 'Fail']


// const marks = [65,45,30];
// let result = marks.map(x => x>=33 ? "Pass" : "Fail");
// console.log(result);


//---------------------------------------------------------------------------------------------------


//6th Question
// Apply GST of 18% to Prices
//  [100, 200, 500] → [118, 236, 590]

// const price = [100,200,500];
// let finalPrice = price.map(x => x+x*18/100);
// console.log(finalPrice);


//---------------------------------------------------------------------------------------------------


//7th Question
// Attach SKU Prefix
//  ['A123', 'B456'] → ['SKU-A123', 'SKU-B456']

// const arr = ['A123','B456'];
// let result = arr.map(x => 'SKU-'+x);
// console.log(result);



//---------------------------------------------------------------------------------------------------


//8th Question
// Create Cart Summary with Quantity 1
//  ['Mouse', 'Keyboard'] → [{ item: 'Mouse', quantity: 1 }, { item: 'Keyboard', quantity: 1 }]

// const arr = ["Mouse", "Keyboard"];
// let result = arr.map(x => {
//     return{item: x,quantity: 1};
// });
// console.log(result);


//---------------------------------------------------------------------------------------------------


//9th Question
// Add Availability Status
//  ['Item1', 'Item2'] → [{ name: 'Item1', available: true }, { name: 'Item2', available: true }]

// const arr =  ["Items1","Items2"];
// let result = arr.map(x =>{
//     return {name: x, available:true};
// });
// console.log(result);




//---------------------------------------------------------------------------------------------------


//10th Question
// Price to Text Format
//  [499, 899] → ['Price: ₹499', 'Price: ₹899']
const price = [499,899];
let result = price.map(x => "Price: ₹"+x);
console.log(result);