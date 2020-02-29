// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Write password to the #password input

function writePassword() {
  
  passwordText.value = "";

  var passLength = prompt("Enter number of characters desired for password: \n(must be between 8-128 characters long)");
    if(passLength < 8){
      alert("Minimum password length is 8");
      return;
      
    }
    if(passLength > 128){
      alert("Maximum password length is 128")
      return;
    }
    if(passLength === ""){
      alert("Must provide password length")
      return;
    }

  var lowerCase = confirm("Do you want lowercase characters included?");
  var upperCase = confirm("Do you want uppercase characters included?");
  var numbers = confirm("Do you want numbers included?");
  var specialChar = confirm("Do you want special characters included?");

  if(lowerCase){
    var lowercaseArray = "abcdefghijklmnopqrxtuvwxyz".split("");
  }
    else {
      lowercaseArray = "";
    }

  if(upperCase){
    var upperCaseArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  }
    else {
      var upperCaseArray = "";
    }

  if(numbers){
    var numbersArray = "1234567890".split("");
  }
    else {
      var numbersArray = "";
    }

  if(specialChar){
    var specialCharArray = "!#$%&()*+,-./:;<=>?@^_{|}~".split("");
  }
  else {
    var specialCharArray = "";
  }

  var totalPool = lowercaseArray.concat(upperCaseArray, numbersArray, specialCharArray)

  for(var i = 0; i < passLength; i++) {
    var password = totalPool[Math.floor(Math.random() * totalPool.length)]

    passwordText += password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

