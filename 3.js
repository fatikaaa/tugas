const prompt = require('prompt-sync')();

while (true) {
  let input = prompt("Masukkan tanggal lahir (DD/MM/YYYY) atau ketik 'cancel': ");

  if (input.toLowerCase() === "cancel") {
    console.log("> Return to the homepage.");
    break;
  }

  const parts = input.split("/");
  if (parts.length !== 3) {
    console.log("> Format tidak valid. Gunakan DD/MM/YYYY.");
    continue;
  }

  const day = parseInt(parts[0]);
  const month = parseInt(parts[1]) - 1; // bulan dari 0
  const year = parseInt(parts[2]);

  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    console.log("> Tanggal tidak valid.");
    continue;
  }

  const birthDate = new Date(year, month, day);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  if (age >= 18) {
    console.log("> View the page: “Tomb Raider");
  } else {
    console.log("> This content is not for you.");
  }
}

