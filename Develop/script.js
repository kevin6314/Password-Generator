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

generatePassword(){
  //your code here
  //var numChar = window.prompt
  //var includeNums = window.confirm will be true/false
  //array for each character type
  //var numArray = ["0","1"]
  //if statement
    //if true push that array into a new array

  return password;
}
