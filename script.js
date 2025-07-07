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
// const price = [499,899];
// let result = price.map(x => "Price: ₹"+x);
// console.log(result);


//---------------------------------------------------------------------------------------------------


//11th Question
// Append Batch Year
//  ['Amit', 'Neha'] → ['Amit - 2020', 'Neha - 2020']
// const arr = ['Amit' , 'Neha'];
// let result = arr.map(x => x + " - 2020");
// console.log(result);


//---------------------------------------------------------------------------------------------------


//12th Question
// Generate Student Emails
//  ['Raj Verma', 'Kavita Rai'] → ['raj.verma@univ.com', 'kavita.rai@univ.com']
// const arr = ["Raj Verma","Kavita Rai"];
// let result = arr.map(x => {
//     return x.toLowerCase().replace(" ",".") +"@univ.com";
// })
// console.log(result);



//---------------------------------------------------------------------------------------------------


//13th Question
// Convert Subject Names to Uppercase
//  ['history', 'geography'] → ['HISTORY', 'GEOGRAPHY']
// const arr = ["history","geography"];
// let result = arr.map(x => x.toUpperCase());
// console.log(result);


//---------------------------------------------------------------------------------------------------


//14th Question
// Student Roll Numbers Formatting
//  [101, 102] → ['Roll#101', 'Roll#102']
// const arr = [101,102];
// let result = arr.map(x => "Roll#"+x);
// console.log(result);


//---------------------------------------------------------------------------------------------------

//15th Question
// Assign All Students to Same Section
//  ['S1', 'S2'] → [{ id: 'S1', section: 'A' }, { id: 'S2', section: 'A' }]
// const arr = ["S1","S2"];
// let result = arr.map(x =>{
//     return {id: x, section: "A"};
// });
// console.log(result);


//---------------------------------------------------------------------------------------------------


//16th Question
// Add Status to Leads
//  ['Lead1', 'Lead2'] → [{ name: 'Lead1', status: 'new' }, { name: 'Lead2', status: 'new' }]
// const arr = ["Lead1","Lead2"];
// let result = arr.map(x =>{
//     return {name: x, status: "new"};
// });
// console.log(result);


//---------------------------------------------------------------------------------------------------


//17th Question
// Client Name Capitalization
//  ['reliance', 'tcs'] → ['Reliance', 'Tcs']
// const arr = ["reliance","tcs"];
// let result = arr.map(x => x[0].toUpperCase()+x.slice(1));
// console.log(result);



//---------------------------------------------------------------------------------------------------

//18th Question
// Format Client Codes
//  ['C01', 'C02'] → ['CLIENT-C01', 'CLIENT-C02']
// const arr = ["C01","C02"];
// let result = arr.map(x => "CLIENT-"+x);
// console.log(result);


//---------------------------------------------------------------------------------------------------

//19th Question
// Assign Sales Representative
//  ['Client A', 'Client B'] → [{ name: 'Client A', rep: 'Unassigned' }, { name: 'Client B', rep: 'Unassigned' }]
// const arr = ["Client A","Client B"];
// let result = arr.map(x => {
//     return {name: x,rep: "Unassigned"};
// });
// console.log(result);



//---------------------------------------------------------------------------------------------------


//20th Question
// Transform Invoices to PDF links
//  [301, 302] → ['/invoices/301.pdf', '/invoices/302.pdf']
const arr = [301,302];
let result = arr.map(x => "/invoices/"+x+".pdf");
console.log(result);