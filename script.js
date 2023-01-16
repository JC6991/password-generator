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
  passwordLength: "",
  lowercaseChar:  true,
  uppercaseChar: true,
  numericChar: true,
  specialChar: true
}

// Function to prompt user for password options
function getPasswordOptions() {
  passwordOptions.passwordLength = parseInt(prompt("Please state the character length of your desired password between 10 and 64 characters:"));  
   
  // Obtain user selections
  passwordOptions.passwordLength = passwordOptions.passwordLength;

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

  // Select random inner array
  let randomIndex = Math.floor(Math.random() * arr.length);
  arr[randomIndex][Math.floor((Math.random() * (arr[randomIndex].length)))];

  // Create array to store the randomly selected array
  let outerArray = arr[randomIndex]

  // Select random value from chosen array
  let randomChar = Math.floor(Math.random() * outerArray.length);
  outerArray[randomChar][Math.floor((Math.random() * (outerArray[randomChar].length)))];

  // Convert value to string and return value
  let character = String(outerArray[randomChar]);

  return character;

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

  // Based on user input, push selected arrays into one array
  let passwordOptionsArray = [];
  if (passwordOptions.lowercaseChar) {
    passwordOptionsArray.push(lowerCasedCharacters);
  }
  if (passwordOptions.uppercaseChar) {
    passwordOptionsArray.push(upperCasedCharacters);
  }
  if (passwordOptions.numericChar) {
    passwordOptionsArray.push(numericCharacters);
  }
  if (passwordOptions.specialChar) {
    passwordOptionsArray.push(specialCharacters);
  }

  // Function to get random password for length of array specified by user
  // Not merged passwordOptionsArray into single array as there is a higher probability that all specified options are selected at random
  let passwordArray = [];

  function getRandomPassword() {
    for(let i = 0; i < passwordOptions.passwordLength; i++) {
      passwordArray[i] = getRandom(passwordOptionsArray);
    }
  }

  getRandomPassword();

  // Check if all selected password options are included and re-run the getRandomPassword function if not  
  if(passwordOptions.lowercaseChar) {
    let lowercaseIncluded = false;

    for(let i = 0; i < lowerCasedCharacters.length; i++) {
      if(passwordArray.indexOf(lowerCasedCharacters[i]) > -1) {
        lowercaseIncluded = true;
      }
      else{
        getRandomPassword();
      }
    }
  }

  if(passwordOptions.uppercaseChar) {
    let uppercaseIncluded = false;

    for(let i = 0; i < upperCasedCharacters.length; i++) {
      if(passwordArray.indexOf(upperCasedCharacters[i]) > -1) {
        uppercaseIncluded = true;
      }
      else{
        getRandomPassword();
      }
    }
  }
  
  if(passwordOptions.numericChar) {
    let numericIncluded = false;

    for(let i = 0; i < numericCharacters.length; i++) {
      if(passwordArray.indexOf(numericCharacters[i]) > -1) {
        numericIncluded = true;
      }
      else{
        getRandomPassword();
      }
    }
  }

  if(passwordOptions.specialChar) {
    let specialIncluded = false;

    for(let i = 0; i < specialCharacters.length; i++) {
      if(passwordArray.indexOf(specialCharacters[i]) > -1) {
        specialIncluded = true;
      }
      else{
        getRandomPassword();
      }
    }
  }

  // Combine array into a string of characters and return value
  let randomPassword = passwordArray.join('');

  return randomPassword;


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