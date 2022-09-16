// Assignment code here
var charAll =
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmopqrstuvwxyk!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var charNum = "0123456789";
var charCap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charLower = "abcdefghijklmopqrstuvwxy";
var charSymb = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var passwordLength = 12;
var password = "";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  // console.log(password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}



// window.alert(
//   "Due to technical difficulties, your password will contain Numbers, Upper and Lower case letters, and special symbols. There will be 13 characters. Thank you for your understanding."
// );

// var password = document.getElementById("generate");
function generatePassword() {
  // var askUser = confirm(
  //   "Would you like to include Upper Case, Lower Case, Numbers, and Special Characters?"
  // ); 
  var chars = ""
  var password = ""
  // if (askUser === false) {
    var pwdLength = prompt("Please choose between 8 and 128 characters.")
    if (pwdLength >7 && pwdLength <129) {
      var confirmNum = confirm("Would youy like to include Numbers?");
      var confirmCap = confirm("Would youy like to include Capital Letters?");
      var confirmLower = confirm("Would youy like to include Lower Case Letters?" );
      var confirmSymb = confirm("Would youy like to include Special Characters?");
      
      if (confirmNum) {
        console.log("numberselected")
        chars = chars + charNum
      }
      if (confirmCap) {
        console.log("capSelected")
        chars = chars + charCap
      }
      if (confirmLower) {
        console.log("LowerSelected")
        chars = chars + charLower
      }
      if (confirmSymb) {
        console.log("SymbolSelected")
        chars = chars + charSymb
      }
      console.log(chars);
      
    for (var i = 0; i <= pwdLength - 1; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length );
      password += chars.substring(randomNumber, randomNumber + 1);
    }
    return password;
    }  else {
      generatePassword();
    }
  // }
  //  else {
  //   var chars =
  //     "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmopqrstuvwxyk!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  //   var passwordLength = 12;
  //   var password = "";

  //   for (var i = 0; i <= passwordLength; i++) {
  //     var randomNumber = Math.floor(Math.random() * chars.length);
  //     password += chars.substring(randomNumber, randomNumber + 1);
  //   }
  //   return password;
  // }
  // returns a password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function getPrompt() {
  charLength = prompt("Please choose between (8 - 128 cahracters");
  if (CharLength < 8 || charLength > 128) {
    alert("Please choose between 8 and 128.");
  }
}
