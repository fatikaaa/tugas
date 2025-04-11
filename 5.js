// Semua kemungkinan nilai x dan y (boolean: 0 dan 1)
let values = [0, 1];

console.log("x y | sum carry");
console.log("--------------");

for (let x of values) {
  for (let y of values) {
    let or = x || y;          // x OR y
    let and = x && y;         // x AND y
    let notAnd = !and;        // NOT(x AND y)
    let sum = or && notAnd;   // (x OR y) AND NOT(x AND y)
    let carry = and;          // x AND y
    console.log(`${x} ${y} |  ${Number(sum)}    ${carry}`);
  }
}
