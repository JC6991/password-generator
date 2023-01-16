// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Object to store user input for password options
let passwordOptions = {
  passwordLength: 0,
  lowercaseChar:  true,
  uppercaseChar: true,
  numericChar: true,
  specialChar: true
}

// Function to prompt user for password options
function getPasswordOptions() {
  passwordOptions.passwordLength = parseInt(prompt("Please state the character length of your desired password between 10 and 64 characters:"));  
  
  if(passwordOptions.passwordLength >= 10 && passwordOptions.passwordLength <= 64){

    passwordOptions.lowercaseChar = confirm("Please click confirm if you want to include lowercase characters in your passwors, otherwise click cancel.");    

      if(passwordOptions.lowercaseChar || passwordOptions.lowercaseChar === false){

        passwordOptions.uppercaseChar = confirm("Please click confirm if you want to include uppercase characters in your passwors, otherwise click cancel.");        

          if(passwordOptions.uppercaseChar || passwordOptions.uppercaseChar === false){

            passwordOptions.numericChar = confirm("Please click confirm if you want to include numeric characters in your passwors, otherwise click cancel.");            

            if(passwordOptions.numericChar || passwordOptions.numericChar === false){

              passwordOptions.specialChar = confirm("Please click confirm if you want to include special characters in your passwors, otherwise click cancel.");              

              if(passwordOptions.specialChar || passwordOptions.specialChar === false){
                
              };
            };
          };
      };
  }
  else if(passwordOptions.passwordLength === false){

  }
  else{
    alert("Invalid input!! You need to choose a value between 10 and 64.");
    getPasswordOptions();
  };
     
  return;

}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

  getPasswordOptions();

  // if statement to capture if user makes no selections
  if((passwordOptions.lowercaseChar === false &&
    passwordOptions.uppercaseChar === false &&
    passwordOptions.numericChar === false &&
    passwordOptions.specialChar === false) ) {
      alert("You must confirm at least ONE password option.");
      getPasswordOptions();
    }

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);