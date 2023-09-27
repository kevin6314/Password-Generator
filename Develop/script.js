// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword (){
  //your code here
  //var numChar = window.prompt
  //var includeNums = window.confirm will be true/false
  //array for each character type
  //var numArray = ["0","1"]
  //if statement
  //if true push that array into a new array

  return password;
};

// Ask and set criteria to use: length, char types
//input length of password = 8 to 128 char
//input types of characters: lowercase, uppercase, numeric, and/or special chars

let userOptions = {
  charLength: Number,
  charLower: Boolean,
  charUpper: Boolean,
  charNums: Boolean,
  specialChar: Boolean
};

function getInput(){

  var chooseLength = window.prompt("How many numbers do you want to use between 2 and 128?");
  userOptions.charLength=chooseLength;
  console.log(userOptions.charLength);

  var chooseLower = window.confirm("Lower?");
  userOptions.charLower=chooseLower;
  console.log(userOptions.charLower);
  
  var chooseUpper = window.confirm("Upper?");
  userOptions.charUpper=chooseUpper;
  console.log(userOptions.charUpper);
  
  var chooseNums = window.confirm("Numbers?");
  userOptions.charNums=chooseNums;
  console.log(userOptions.charNums);
  
  var chooseChars = window.confirm("Characters?");
  userOptions.specialChar=chooseChars;
  console.log(userOptions.specialChar);

  validateInput();
}

function validateInput(){
    let countFalse = 0;

    for (let key in userOptions) {
      if (userOptions[key] === false){
        countFalse++;
      }
    }

    if ((countFalse > 3) || (Number.isInteger(userOptions.charLength)) ||
      (userOptions.charLength < 2) || (userOptions.charLength > 128)) {
      console.log("Please try again!")
    } else {
      console.log("Generate password");
    }

  }