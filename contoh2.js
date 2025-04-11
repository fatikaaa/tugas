const prompt = require('prompt-sync')(); // panggil library

let input = "";

while (input !== "selesai") {
  input = prompt("Ketik sesuatu (atau ketik 'selesai' untuk berhenti): ");
}

console.log("Program selesai!");

