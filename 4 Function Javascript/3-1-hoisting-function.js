// Function Hoisting.
// Bisa memanggil terlebih dahulu, padahal deklarasi fungsi ada di baris setelahnya.

console.log(operasiPerkalian(10, 15))

function operasiPerkalian(angka1, angka2){
    return angka1 * angka2;
}

// Tapi, ini tidak berlaku jika fungsi tersebut dideklarasi di dalam sebuah variabel.
console.log(operasiPerkalian(5, 5)); // Output: Uncaught ReferenceError: Cannot access 'operasiPerkalian' before initialization

const operasiPerkalian = function(angka1, angka2) {
  return angka1 * angka2;
};