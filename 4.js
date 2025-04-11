const prompt = require('prompt-sync')();

let numbers = [];

for (let i = 1; i <= 4; i++) {
  let input = parseInt(prompt(`- input ${i}: `));
  if (!isNaN(input)) {
    numbers.push(input);
  } else {
    console.log("Input bukan angka. Diabaikan.");
  }
}

console.log("\nYour histogram is:");
for (let i = 0; i < numbers.length; i++) {
  let bar = "|".repeat(numbers[i]);
  console.log(`${numbers[i]}: ${bar}`);
}
