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
// const arr = [301,302];
// let result = arr.map(x => "/invoices/"+x+".pdf");
// console.log(result);


//---------------------------------------------------------------------------------------------------

// 21th Question
// Add Department Info
//  ['John', 'Mira'] → ['John - Sales', 'Mira - Sales']

// const arr = ["John","Mira"];
// const ans = arr.map(x => x+" - Sales");
// console.log(ans);
//---------------------------------------------------------------------------------------------------



//22th Question
// Employee IDs to Short Format
//  ['EMP001', 'EMP002'] → ['001', '002']
// const arr = ["EMP001","EMP002"];
// let result = arr.map(x => x.slice(3));
// console.log(result);


//---------------------------------------------------------------------------------------------------


//23th Question
// Generate Work Email IDs
//  ['Rita Kumar', 'Anil Roy'] → ['rita.kumar@company.com', 'anil.roy@company.com']
// const arr = ["Rita Kumar","Anil Roy"];
// const ans = arr.map(x => x.replace(" ",".").toLowerCase() + "@company.com");
// console.log(ans);


//---------------------------------------------------------------------------------------------------

//24th Question
// Salary Amount to Text
//  [45000, 52000] → ['₹45000', '₹52000']
// const arr = [45000, 52000];
// const ans = arr.map(x => "₹"+x);
// console.log(ans);


//---------------------------------------------------------------------------------------------------


//25th Question
// All Employees to Active Status
//  ['Ankita', 'Suraj'] → [{ name: 'Ankita', status: 'active' }, { name: 'Suraj', status: 'active' }]
// const arr = ["Ankita","Suraj"];
// const ans = arr.map(x => {
//     return {name: x, status: "active"};
// });
// console.log(ans);


//---------------------------------------------------------------------------------------------------


//26th Question
// Add Unit Type to Property
//  ['Green Villa', 'Oak Tower'] → ['Green Villa - Apartment', 'Oak Tower - Apartment']
// const arr = ["Green Villa","Oak Tower"];
// const ans = arr.map(x => x+" - Apartment");
// console.log(ans);

//---------------------------------------------------------------------------------------------------


//27th Question
// Convert Rent Price to Monthly Format
//  [15000, 20000] → ['₹15000/month', '₹20000/month']
// const arr = [15000,20000];
// const ans = arr.map(x => "₹"+x+"/month");
// console.log(ans);


//---------------------------------------------------------------------------------------------------


//28th Question
// Add Default Furnishing Status
//  ['Flat 1', 'Flat 2'] → [{ name: 'Flat 1', furnished: false }, { name: 'Flat 2', furnished: false }]
// const arr = ["Flat 1", "Flat 2"];
// const ans = arr.map(x => {
//     return {name: x, furnished: false};
// });
// console.log(ans);


//---------------------------------------------------------------------------------------------------


//29th Question
// Property Listing Link Creation
//  ['P001', 'P002'] → ['/properties/P001', '/properties/P002']
// const arr =["P001","P002"];
// const ans = arr.map(x => "/properties/"+x);
// console.log(ans);


//---------------------------------------------------------------------------------------------------


//30th Question
// Attach Available From Date
//  ['Unit A', 'Unit B'] → ['Unit A - Available from 1st May', 'Unit B - Available from 1st May']
// const arr = ["Unit A","Unit B"];
// const ans = arr.map(x => x+ " - Available from 1st May");
// console.log(ans);


//---------------------------------------------------------------------------------------------------


//31th Question
// Tracking Code Formatting
//  ['TR123', 'TR456'] → ['Tracking: TR123', 'Tracking: TR456']
// const arr = ["TR123","TR456"];
// const ans = arr.map(x => "Tracking: "+x);
// console.log(ans);


//---------------------------------------------------------------------------------------------------


//32th Question
// Mark Shipments as Pending
//  [1001, 1002] → [{ id: 1001, status: 'Pending' }, { id: 1002, status: 'Pending' }]
// const arr = [1001,1002];
// const ans = arr.map(x => {
//     return {id: x, status: "Pending"};
// });
// console.log(ans)


//---------------------------------------------------------------------------------------------------


//33th Question
// Add Delivery Region Tag
//  ['Order A', 'Order B'] → ['Order A - North Zone', 'Order B - North Zone']
// const arr = ["Order A", "Order B"];
// const ans = arr.map(x => x+ " - North Zone");
// console.log(ans);

//---------------------------------------------------------------------------------------------------


//34th Question
// Expected Delivery Time Format
//  [2, 4] → ['2 days', '4 days']
// const arr = [2, 4];
// const ans = arr.map(x => x+ " days");
// console.log(ans);

//---------------------------------------------------------------------------------------------------


//35th Question
// Create Shipment URLs
//  ['SHIP001', 'SHIP002'] → ['/track/SHIP001', '/track/SHIP002']
// const arr = ["SHIP001", "SHIP002"];
// const ans = arr.map(x => "/track/"+x);
// console.log(ans);


//---------------------------------------------------------------------------------------------------


//36th Question
// Convert Integer Array to Boolean Flags
//  [0, 1, 0] → [false, true, false]
// const arr = [0,1,0];
// const ans = arr.map(x => x===0? false:true);
// console.log(ans);


//---------------------------------------------------------------------------------------------------


//37th Question
// Capitalize First Character in Each String
//  ['alpha', 'beta'] → ['Alpha', 'Beta']
// const arr = ["alpha","beta"];
// const ans = arr.map(x => x[0].toUpperCase()+x.slice(1));
// console.log(ans)


//---------------------------------------------------------------------------------------------------

//38th Question
// Add Index to Array Values
//  ['a', 'b'] → ['0: a', '1: b']
// const arr = ['a', 'b'];
// const ans = arr.map((x,i) => {
//     return i+": "+x;
// });
// console.log(ans);

//---------------------------------------------------------------------------------------------------


//39th Question
// Attach Country Code
//  ['1234567890', '9876543210'] → ['+91-1234567890', '+91-9876543210']
// const arr = ['1234567890', '9876543210'];
// const ans = arr.map(x => "+91-"+x);
// console.log(ans);


//---------------------------------------------------------------------------------------------------


//40th Question
// Convert Product Titles to Slugs
//  ['Red Shirt', 'Blue Jeans'] → ['red-shirt', 'blue-jeans']
// const arr = ['Red Shirt', 'Blue Jeans'];
// const ans = arr.map(x => x.replace(" ","-").toLowerCase() );
// console.log(ans);