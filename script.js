//Presented choice arrays under the first variable. Deleted console.log when completed
var generateBtn = document.querySelector("#generate");
var uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var numerals = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

//Created variables that promt users to input numeral(s)
function generatePassword() {
  var passwordOptions = [];
  var passwordLength = Number(prompt("Choose password length 8-128"));

  //Created parameters for character length and rules for no client selection
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please select a number between 8-128");
    return;
  } else {
    uppercaseSelection = confirm("Include uppercase letters?");
    lowercaseSelection = confirm("Include lowercase letters?");
    numeralsSelection = confirm("Include numerals?");
    symbolsSelection = confirm("Include special characters?");
  }

  //Created conditional statement in the event client makes no selection when prompted
  if (
    !uppercaseSelection &&
    !lowercaseSelection &&
    !numeralsSelection &&
    !symbolsSelection
  ) {
    alert("Please select at least one character type");
    return;
  }

  //Created if statements with concat for variables referring back to passwordSelection
  //in order to provide the computer with access to the full array of each variable
  if (uppercaseSelection) {
    passwordOptions = passwordOptions.concat(uppercase);
  }

  if (lowercaseSelection) {
    passwordOptions = passwordOptions.concat(lowercase);
  }

  if (numeralsSelection) {
    passwordOptions = passwordOptions.concat(numerals);
  }

  if (symbolsSelection) {
    passwordOptions = passwordOptions.concat(symbols);
  }

  //Created loop for computer to generate random password
  var newPassword = [];
  for (let i = 0; i < passwordLength; i++) {
    var x = Math.floor(Math.random() * passwordOptions.length);
    var newPassword = newPassword.concat(passwordOptions[x]);
  }
  return (newPassword = newPassword.join(""));
}

//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
