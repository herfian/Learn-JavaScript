let nama = "Stefanus";
const namaIbuKandung = "Clara";
const umur = 20;
const apakahSudahMenikah = false;
let jumlahAnak;

// Memberi nilai baru kepada variabel nama
nama = "Albert";

// memberi nilai baru kepada variabel namaIbuKandung tadi
namaIbuKandung = "Juliana";
// Akan muncul error, karena deklarasi menggunakan const tidak dapat diubah
// Uncaught TypeError: Assignment to constant variable.

// string - deretan karakter yang diapit oleh sepasang tanda kutip;
// number - bilangan bulat, pecahan, dan lain-lain;
// boolean - nilai benar dari sebuah pernyataan yang dituliskan sebagai true atau false;
// null - sebuah nilai yang berarti kosong atau menunjuk pada nilai yang tidak ada;
// undefined - berbeda dari null, undefined menandakan kondisi variabel yang belum diberi sebuah nilai. Jadi pernyataan "nilai variabel itu adalah undefined" sebenarnya kurang tepat, sebab variabelnya memang tidak mempunyai sebuah nilai;
// symbol - sebuah nilai unik yang dihasilkan tiap kali kita memanggil fungsi Symbol(). Nilai unik ini memiliki beberapa kegunaan seperti memberi nomor identifikasi unik dan berperan sebagai nama properti unik sebuah objek;
// object - sebuah kumpulan pasangan properti dan nilai. Seperti objek dalam kehidupan sehari-hari saja. Misalnya objek Apel memiliki properti warna dengan nilai merah.