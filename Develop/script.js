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

var specialCharacters="~!@#$%^&*()_+{}|:<>?"
var lowerCaseAlphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var upperCaseAlphabet="abcdefghijklmnopqrstuvwxyz"
var numbers="1234567890"

function writePassword(){
var specialCharactersPop=confirm("Do you want special character?")
var lowerCaseAlphabetPop=confirm("Do you want lowercase alphabet?")
var upperCaseAlphabet=confirm("Do you want uppercase alphabet?")
var num=confirm("Do you want number?")
var passLength=prompt("Enter a password length from 8 to 128 character")

if(passLength < 8 || passLength > 128){
alert("Invalid Selection.Try again.!!");
var passLength=prompt("Enter a password length from 8 to 128 character")
}else if(specialCharactersPop ===false && lowerCaseAlphabetPop===false && upperCaseAlphabet==false && num===false)
  alert("You should choose altleast one")
}


 if(specialCharactersPop==false){
  upperCaseAlphabet + lowerCaseAlphabet + numbers
 }

 if(lowerCaseAlphabetPop==false){
  specialCharacters+ upperCaseAlphabet + numbers
 }

 if(upperCaseAlphabet==false){
  specialCharacters+ lowerCaseAlphabet + numbers
 }

 if(numbers== false){
  specialCharacters+ upperCaseAlphabet + lowerCaseAlphabet
 }

 function generatepass(){
  var charset= specialCharacters+ upperCaseAlphabet+ lowerCaseAlphabet+ numbers;
  var password="";
  for ( var i=0; i<passLength; i++){
    var randomIndex= Math.floor(Math.random()* charset.length)
    password += charset[randomIndex];
  }return password;
}






