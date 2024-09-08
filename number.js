// Number and casting

// ex.1
// input:
// let numA = 50
// let numB = 40
// requirement: Write code numA+numB
// scope: Number operator
// output: 90

// your code here:
let numA = 50;
let numB = 40;
let output_1 = numA + numB;
console.log(output_1);

// ex.2
// input:
// let numC = 50
// let numD = "40"
// requirement: Write code numA-numB, Not allow to change numB type
// scope: Casting,Number operator
// output: 10

// your code here:
let numC = 50;
let numD = "40";
let output_2 = 50 - Number(numD);
console.log(output_2);

// ex.3
// input:
// let userDeltaRange = 2.3456
// let factorX = 5
// requirement: Write code userDeltaRange * factorX,
// but userDeltaRange must have 2 float digit before * with factorX
// scope: Casting,Number operator,Number method
// output: 11.7

// your code here:
let userDeltaRange = 2.3456;
let factorX = 5;
let convertedDeltaRange = userDeltaRange.toFixed(2);
let output_3 = factorX * Number(convertedDeltaRange);
console.log(output_3);
