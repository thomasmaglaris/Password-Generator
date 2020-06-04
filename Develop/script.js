// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordText = document.querySelector("#password");

var passwordLength = prompt("Pick the length of your password from 8 to 128 characters");





if (passwordLength <= 7 || passwordLength >= 129) {

  confirm("That wasn't an adequate password length, please click refresh to try again");

  // passwordLength = prompt("Pick the length of your password from 8 to 128 characters");

  //if I reuse passwordLength it does not move to else statement when reusing a password length between 8 and 128, so asking to refresh to start again

}

else if (isNaN(passwordLength)) {

  confirm("You must enter a number between 8 and 128, please click refresh to try again");

  // passwordLength = prompt("Pick the length of your password from 8 to 128 characters");

}

else {

  var lowerCaseQst = confirm("Would you like to include lower case characters?");

  var upperCaseQst = confirm("Would you like to include upper case characters?");

  var numberCharQst = confirm("Would you like to include numbers?");

  var specialCharQst = confirm("Would you like to include special characters?");



var lowerCase = "abcdefghijklmnopqrstuvwxyz";

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var numeric = "0123456789";

var specialChar = "~!@#$%^&*()_`{[}]|:?/>.<,";

var password = '';



function generatePassword() {

  var okayClick = '';

  if (lowerCaseQst === true) {

    okayClick += lowerCase;

  }

  if (upperCaseQst === true) {

    okayClick += upperCase;

  }

  if (numberCharQst === true) {

    okayClick += numeric;

  }

  if (specialCharQst === true) {

    okayClick += specialChar;

  }



  for (var i = 0; i < passwordLength; i++) {

    var random = Math.floor(Math.random() * okayClick.length);

    password += okayClick[random]

  }

  return password

}


}
passwordText.value = generatePassword();
// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);


