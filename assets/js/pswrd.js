// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  
}
// var password = document.getElementById("generate");
function generatePassword(){
  // returns a password
 var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmopqrstuvwxyk!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
 var passwordLength = 12;
 var password = "";

 for (var i = 0; i <= passwordLength; i++){
var randomNumber = Math.floor(Math.random() * chars.length);
password += chars.substring(randomNumber, randomNumber +1);
 }
 return password
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

