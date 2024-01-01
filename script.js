// Assignment Code

//presented choice arrays under the first variable. Deleted console.log when completed
var generateBtn = document.querySelector("#generate");
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numerals = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];


// Write password to the #password input

//Created variables that promt users to input numeral(s)
function generatePassword() {
  var passwordSelection = [];
  var passwordLength = Number(prompt ("Choose character numer 8-128"));
  
  
//Created parameters for character length and rules for no client selection
  if (isNaN(passwordLength) || (passwordLength < 8) || (passwordLength > 128)) {
    alert("Please select a number between 8-128")
    return;
  }
  else {
    var upperConfirm = confirm("Include uppercase letters?");
    var lowerConfirm = confirm("Include lowercase letters?");
    var numeralsConfirm = confirm("Include numerals?");
    var symbolsConfirm = confirm("Include special characters?");
  }
  if (!upperConfirm && !lowerConfirm && !numeralsConfirm && !symbolsConfirm) {
    alert("Please select at least one character type")
    return;
  } 

  //Created if statements with concat for variables referring back to passwordSelection 
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
  //Created loop for computer to generate random password
  var newPassword = []
  for (let i = 0; i < passwordLength; i++) {
    var x = Math.floor(Math.random() * passwordSelection.length);
    var newPassword = newPassword.concat (passwordSelection[x])
  }
  return (newPassword = newPassword.join(""))
}

function writePassword() {    
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);