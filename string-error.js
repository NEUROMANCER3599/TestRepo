//STRING ERROR//

//exercise 1

// source code:
/*
let friendList = "George,Kara,Migale,Roberto,Fernando,Michale,Tommy";
let splitArr = friendList.split(",");
console.log(splitArr);
*/
// output:['George','Kara','Migale','Roberto','','Fernando','Michale', 'Tommy']
// expect output:['George','Kara','Migale','Roberto','Fernando','Michale', 'Tommy']
// what cause error occured?
// Answer here📕:
let friendList = "George,Kara,Migale,Roberto,Fernando,Michale,Tommy";
let splitArr = friendList.split(",");
console.log(splitArr);

//excercise 2

// source code:
/*
let firstName = "John";
let lastName = "Doe";
let concate = `My firstname is ${firstName} my last name is ${lastName}`;
console.log(concate);
*/
//output: My firstname is ${firstname} my last name is ${lastname}
//expect output: My firstname is John my last name is Doe
// what cause error occured?
// Answer here📕:
let firstName = "John";
let lastName = "Doe";
let concate = `My firstname is ${firstName} my last name is ${lastName}`;
console.log(concate);
