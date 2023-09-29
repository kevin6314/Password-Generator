//Create my empty arrays

let specialCharOptions = [" ","!","","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];
let upperOptions = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let lowerOptions = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let numsOptions = ['0','1','2','3','4','5','6','7','8','9'];
let passwordArray = [];
let randomOptions = []; 

//Create object to store user data

let userOptions = {
  charLength: Number,
  charLower: Boolean,
  charUpper: Boolean,
  charNums: Boolean,
  specialChar: Boolean
};

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  resetArrays();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Add event listener to copy code with one click
var passwordTextarea = document.querySelector('#password');
passwordTextarea.addEventListener("click", function(){
  passwordTextarea.select();
  document.execCommand('copy');
  alert("Password copied to clipboard");
})

//Generate my password

function generatePassword (){
  
  getLength();
  getCharacters();
  validateInput();
  
  for (var i = 0; i < passwordArray.length; i++){
    var randomIndex = Math.floor(Math.random()*randomOptions.length);
    passwordArray[i] = randomOptions[randomIndex];
  }  

  let password = passwordArray.join('');
  console.log(password);
  return password;
};

//function to reset arrays

function resetArrays(){
  passwordArray.length = 0;
  userOptions.length = 0;
  randomOptions.length = 0;
}

//Get user input on the length of the password

function getLength(){

  var chooseLength = window.prompt("How many characters do you want to use between 2 and 128?");
  userOptions.charLength=chooseLength;

  while (chooseLength < 2 || chooseLength > 128 || isNaN(chooseLength)) {
    alert("Please enter a valid number!");
    var chooseLength = window.prompt("How many characters do you want to use between 2 and 128?");
    userOptions.charLength=chooseLength;
  }

  passwordArray.length = chooseLength;
  console.log(userOptions.charLength);
  return passwordArray;
}

//Get user input on the characters to use

function getCharacters(){

  //add lower characters to the options array
  var chooseLower = window.confirm("Do you want lowercase characters?");
  userOptions.charLower=chooseLower;
  
  if (chooseLower){
    randomOptions.push(...lowerOptions);
  } 
  console.log(randomOptions);
  console.log(userOptions);

  //add upper characters to the options array
  var chooseUpper = window.confirm("Do you want uppercase characters?");
  userOptions.charUpper=chooseUpper;
  
  if (chooseUpper){
    randomOptions.push(...upperOptions);
  }
  console.log(randomOptions);
  console.log(userOptions);

  //add numbers to the options array
  var chooseNums = window.confirm("Do you want numbers?");
  userOptions.charNums=chooseNums;
  
  if (chooseNums){
    randomOptions.push(...numsOptions);
  }
  console.log(randomOptions);
  console.log(userOptions);
  
  //add characters to the options array
  var chooseChars = window.confirm("Do you want special characters?");
  userOptions.specialChar=chooseChars;

  if (chooseChars){
    randomOptions.push(...specialCharOptions);
  }
  console.log(randomOptions);
  console.log(userOptions);

  return randomOptions;
  
}

//Validate that the input the user provided is valid
function validateInput(){
    // let countTrue = 0;

    if (randomOptions.length < 1) {
      alert("Please try again!");
    } 
  }