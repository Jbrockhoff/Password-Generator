// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numerals = [1234567890];
  var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
  var passwordSelection = [];
  var passwordLength = Number(prompt ("Choose character numer 8-128"));
  
  
  //Created parameters for character length and if statements with concat
  //for variables 
  if (isNaN(passwordLength) || (passwordLength < 8) || (passwordLength > 128)) {
    alert("Please select a number between 8-128")
  }
  else {
    var upperConfirm = confirm("Include uppercase letters?");
    var lowerConfirm = confirm("Include lowercase letters?");
    var numeralsConfirm = confirm("Include numerals?");
    var symbolsConfirm = confirm("Include special characters?");
  }

  if (upperConfirm) {
    var passwordSelection = passwordSelection.concat (uppercase);
  }

  if (lowerConfirm) {
    var passwordSelection = passwordSelection.concat (lowercase);
  }

  if (numeralsConfirm) {
    var passwordSelection = passwordSelection.concat (numerals);
  }

  if (symbolsConfirm) {
    var passwordSelection = passwordSelection.concat (symbols);
  }


}


function writePassword() {    
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);