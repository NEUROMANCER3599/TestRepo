console.log("Hello, JS");

let x;
const y = 50;

let firstname = "Rawipat";
let lastname = "Tipparat";

let fullname = firstname.concat(lastname);

console.log(fullname);

let letters = "A,B,C,D";
let splitletters = letters.split(',');
console.log(splitletters);

let letterarray = ["A","B","C","D","E"];
letterarray.unshift("I");
console.log(letterarray);

let UserObject = {name: "Paul Schwarzkopf", Age: 30, Money: 50000};
console.log(UserObject.Money);

let Money = Object.values(UserObject);