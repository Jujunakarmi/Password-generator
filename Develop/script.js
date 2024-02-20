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

var specialCharacters = "~!@#$%^&*()_+{}|:<>?"
var lowerCaseAlphabet = "abcdefghijklmnopqrstuvwxyz"
var upperCaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "1234567890"

function generatePassword() {
  var specialPop = confirm("Do you want your password to include special character?")
  var lowerCasePop = confirm("Do you want your password to include lowercase alphabet?")
  var upperCasePop = confirm("Do you want your password to include uppercase alphabet?")
  var num = confirm("Do you want your password to include number?")

  if (!specialPop && !lowerCasePop && !upperCasePop && !num) {
    alert("You should choose altleast one");
    return null
  }

  var passLength = Number(prompt("Enter a password length from 8 to 128 character"))

  if (passLength < 8 || passLength > 128) {
    alert("Invalid Selection.Try again.!!");
    return null
  }

  var possibleCharacter = ""
  var forcedCharacter = ""

  if (specialPop) {
    possibleCharacter += specialCharacters
    var randomSpecialIndex = Math.floor(Math.random() * specialCharacters.length);
    forcedCharacter += specialCharacters[randomSpecialIndex]
  }

  if (lowerCasePop) {
    possibleCharacter += lowerCaseAlphabet
    var randomLowerIndex = Math.floor(Math.random() * lowerCaseAlphabet.length);
    forcedCharacter += lowerCaseAlphabet[randomLowerIndex]
  }

  if (upperCasePop) {
    possibleCharacter += upperCaseAlphabet
    var randomUpperIndex = Math.floor(Math.random() * upperCaseAlphabet.length);
    forcedCharacter += upperCaseAlphabet[randomUpperIndex]
  }

  if (num) {
    possibleCharacter += numbers
    var randomUpperIndex = Math.floor(Math.random() * numbers.length);
    forcedCharacter += numbers[randomUpperIndex]
  }
  console.log(forcedCharacter)
  var password = ""
  for (var i = 0; i < passLength - forcedCharacter.length; i++) {
    var randomPassIndex = Math.floor(Math.random() * possibleCharacter.length);
    password += possibleCharacter[randomPassIndex]
  }
  return password + forcedCharacter
}

