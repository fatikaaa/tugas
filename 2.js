const prompt = require('prompt-sync')();

// Input 
let n = parseInt(prompt("Masukkan nilai n (2 sampai 9): "));

if (n < 2 || n > 9) {
  console.log("Masukkan harus antara 2 sampai 9");
} else {

// header (bagian atas)

  let header = "  ";
  for (let i = 1; i < n; i++) {  
    header += " " + i;
  }
  console.log(header);

// garis garis atas angka

  let garis = "--" + "--".repeat(n);
  console.log(garis);

  // pola dalam kolom
  let angka = 1

  for (let baris = 0; baris < n - 1; baris++) {
    let line = baris + " |";
    for (let kolom = 1; kolom < n; kolom++) {
      if (kolom <= baris) {
        line += " *";
      } else {
        line += " " + angka;
        angka++;
      }
    }
    console.log(line);
  }
}
