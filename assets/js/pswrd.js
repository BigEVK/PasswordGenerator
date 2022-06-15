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


window.alert("Due to technical difficulties, your password will contain Numbers, Upper and Lower case letters, and special symbols. There will be 13 characters. Thank you for your understanding.")


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

function getPrompt() {
  charLength = prompt("Please choose between (8 - 128 cahracters");
  if (CharLength < 8 || charLength >128) {
    alert("Please choose between 8 and 128.")
  }
}