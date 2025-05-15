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
//trying to change a const variable will give you an console.log(numStudents);error, and stop the code as well as, when you make a general error, the code stops running)

console.log(ourClassNum);

//const and let cannot be redeclared (or recreated)
//let numStudents = 25; (this will also give you an error)


/************************
  javascript datatypes
*************************/
// storing a value of true or false is called a boolean
let doorClosed = true; //you dont have to use quote because it recognizes true and false.
console.log(doorClosed);

//you can create an empty variable, which will return undefined, undefined can also mean you forgot to include the value

let whiteboardContent;
console.log(whiteboardContent); //should give you undefined

//you can use the keyword "null" (which means nothing)
let classKids = null; // this works when you need to have a value but it is currently undefined

//number - can be writteh without quotes (computer recognizes them)
//string - is text that must be written in quotes

//difference between == and ===
const numLights = 12; //this variable is storing a number
const numChairs = "12"; //this variable is storing a piece of text

console.log(numLights == numChairs); //gives you true
console.log(numLights === numChairs); //gives you false..... this asks are they the same value and are they the same datatype (one is text, one is number)

// two equals == checks if they are the same value
// three equals === checks if they are the same value and the same datatype




/***************************************
 a practical example using the form field
 ***************************************/

//blur is the opposite of the focus state in CSS | get the field by its id, and check if the user clicked away 
//first get the element by its id then check whether the user clicks away(blur) and then do whatever piece of code is contained in the function
document.getElementById("answer").addEventListener("blur", function(){
      //get the value for the form field and put it into a variable
      const userAnswer = this.value;
      //the keyword "this" means the thing you currently have
      //right now, that thing is the field with the id "answer"
      //console.log(userAnswer); This was added just for testing purposes

      //use an if statement to check if the value is right
      const feedbackElement = document.getElementById("feedback");
      if(userAnswer == "document"){
        //add feedback into the feedback element
        //document.getElementById("feedback").textContent = "You're right!";
        //this symbol {} is used to contain a set of things that happens.... if youre going to use a value once, don't use a variable, if more than once then use variable. A variable is wehen you use a "let" or "const".

        feedbackElement.textContent = "You're right!";
      }else{
        feedbackElement.textContent = "You're wrong!";
      }
});