// Fungsi yang berdiri sendiri
function sapa() { // Nama Fungsi
    return "Selamat Pagi"; // Kode yang di jalankan
};

console.log(sapa());

console.log("=================")

// Fungsi disimpan di dalam variable
let berkenalan = function() {
    return "Halo, nama saya Mark";
};

console.log(berkenalan());

console.log(berkenalan(), '' + 'Nama kamu siapa?')

console.log("=================")

// Tanpa return
let umur = 24;

function ulangTahun() {
    umur += 1; // return
}

console.log(ulangTahun());

// TASK
// 1. Buat sebuah fungsi bernama namaSaya yang mengembalikan nama kamu.
let nama = "Fian" ;

function namaSaya() {
    return "Halo nama saya " + nama + ", Siapa nama kamu?"; 
}

console.log(namaSaya())
