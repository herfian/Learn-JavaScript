// Operator : Deskripsi
// && : AND (Dan)
// || : OR (Atau)
// ! : NOT (Bukan)

// Operator : Kondisi 1 : Kondisi 2 : Hasil
// &&	    : true	    : true	    : true
// &&	    : true	    : false	    : false
// &&	    : false	    : true	    : false
// &&	    : false	    : false	    : false
// ||	    : true	    : true	    : true
// ||	    : true	    : false	    : true
// ||	    : false	    : true	    : true
// ||	    : false	    : false	    : false
// !	    : true	    : -	        : false
// !	    : false	    : -	        : true

let bilangan1 = 6;
let bilangan2 = 4;

console.log(bilangan1 === 6 && bilangan2 === 4); // Output: true
console.log(bilangan1 === 6 && bilangan2 < 4); // Output: false
console.log(bilangan1 < 6 && bilangan2 === 4); // Output: false
console.log(bilangan1 < 6 && bilangan2 < 4); // Output: false
console.log("==================")
console.log(bilangan1 === 6 || bilangan2 === 4); // Output: true
console.log(bilangan1 === 6 || bilangan2 < 4); // Output: true
console.log(bilangan1 < 6 || bilangan2 === 4); // Output: true
console.log(bilangan1 < 6 || bilangan2 < 4); // Output: false
console.log("==================")
console.log(!true); // Output: false
console.log(!false); // Output: true

console.log("==================")

// TASK
// Isilah titik-titik di bawah ini dengan operator logika yang benar!
let number1 = '2';
let number2 = 3;

// let findTheLogic = number1 == 2 . . . number2 === '3';

console.log(findTheLogic); // Output True