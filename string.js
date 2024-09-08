// String

// ex.1
// input: let x = " username007xza "
// requirement: None
// scope:String method
// output: "username007xza"

// your code here:
let x = " username007xza ";
let fliter = x.split(' ').join(' ');
console.log(fliter);
// ex.2
// input: "Bob,John,Noi,Por,Au,Aim,"
// requirement: None
// scope: String method
// output: "Noi"


// your code here:
let namelist = ["Bob","John","Noi","Por","Au","Aim"];
let nameindex = namelist.indexOf("Noi");
let output = namelist[nameindex]
console.log(output);

// ex.3
// input:
// let firstName = "John"
// let lastName = "Doe"
// requirement: not allow + for do string concatenation(ต่อสตริง)
// scope: String concatenation
// output: My first name is John my last name is Doe

// your code here:
let firstName = "John"
let lastName = "Doe"
let outputstring = `My firstname is ${firstName} my last name is ${lastName}`;
console.log(outputstring)
