//console.log will output a message in the developer console
// two slashes starts a single line comment
console.log("it worked"); //single line comments can go beside the code

/*
This is a multi-line comment, 
starts with a / and a * and closes with * and a /
*/

// to declare a variable, use let or const 
const ourClassNum = "J207";
let numStudents = 9; //with a number, you don't need quotes, the comp recognizes numbers

console.log(ourClassNum);

//if you declare a variable with let, you can change its value
numStudents = 21;

console.log(numStudents); //make sure you include your console.log after you change your variable since code runs from top to bottom

//if you declare a value with const, you can't change its value
//ourClassNum = "c128";
//trying to change a const variable will give you an error, and stop the code as well as, when you make a general error, the code stops running)

console.log(ourClassNum);

//const and let cannot be redeclared (or recreated)
//let numStudents = 25; (this will also give you an error)