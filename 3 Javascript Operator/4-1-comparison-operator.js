// Operator	: Deskripsi
// ==	: sama dengan (cek nilai)
// ===	: sama dengan (cek nilai dan tipe data)
// !=	: tidak sama dengan (cek nilai)
// !==	: tidak sama dengan (cek nilai dan tipe data)
// >	: lebih dari
// <	: kurang dari
// >=	: lebih dari atau sama dengan
// <=	: kurang dari atau sama dengan
// ? :	: ternary operator

// Operator == (Loose Equality)
let bilangan = 10;

console.log(bilangan == 10);
console.log(bilangan == 8);
console.log(bilangan == "10");
console.log("3.14" == 3.14);

console.log("====================")

// Operator === (Strict Equality)
console.log(bilangan === 10); // Output: true --> nilai dan tipe data sama
console.log(bilangan === "10"); // Output: false --> nilai sama tetapi tipe data tidak sama

console.log("====================")

// Operator != (**kedua operand memiliki nilai yang sama, tidak terpengaruh sama tipe datanya.**)
console.log(bilangan != 8); // Output: true --> nilai tidak sama tetapi tipe data sama
console.log(bilangan != "8"); // Output: true --> nilai dan tipe data tidak sama
console.log(bilangan != 10); // Output: false --> nilai dan tipe data sama
console.log(bilangan != "10"); // Output: false --> nilai sama tetapi tipe data tidak sama

console.log("====================")

// Operator !== (**nilai dan tipe data dari kedua operand sama. **)
console.log(bilangan !== 8); // Output: true --> nilai tidak sama tetapi tipe data sama
console.log(bilangan !== "8"); // Output: true --> nilai dan tipe data tidak sama
console.log(bilangan !== 10); // Output: false --> nilai dan tipe data sama
console.log(bilangan !== "10"); // Output: true --> nilai sama tetapi tipe data tidak sama

console.log("====================")

// Operator > (lebih dari)
console.log(bilangan > 9);
console.log(bilangan > 10);
console.log(bilangan > 11);

console.log("====================")

// Operator < (kurang dari)
console.log(bilangan < 9);
console.log(bilangan < 10);
console.log(bilangan < 11);

console.log("====================")

// Operator >= (lebih dari atau sama dengan)
console.log(bilangan >= 9);
console.log(bilangan >= 10);
console.log(bilangan >= 11);

console.log("====================")

// Operator <= (kurang dari atau sama dengan)
console.log(bilangan <= 9);
console.log(bilangan <= 10);
console.log(bilangan <= 11);

console.log("====================")

// Operator Ternary
// variabel = (kondisi true) ? nilai1 : nilai2;
let makanan = "Daging";

let jenisHewan = makanan === "Daging" ? "karnivora" : "herbivora";

console.log(jenisHewan);

// TASK
// Isilah titik-titik di bawah ini dengan operator perbandingan yang benar!
// let x = 3;
// let comparison = x ... '3';

// console.log(comparison); // Output: true





