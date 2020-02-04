// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria

//// something something DOM


//// create arrays for all lowercase, upercase, numeric, and special characters

let lowercaseChar=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let uppercaseChar=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","W","X","Y","Z"];
let numericChar=["1","2","3","4","5","6","7","8","9","0"];
let specialChar=["!","@","#","$","%","^","&","*","(",")","{","}","|","[","]",";","'",":","<",">","?","/"];

//// test the special characters to see what needs escape characters using a loop

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters

////use a loop to check if all are not selected - if so, user has to restart and select at least one

let useLowercase=confirm("Do you want to include lowercase characters?");
let useUppercase=confirm("Do you want to include uppercase characters?");
let useNumeric=confirm("Do you want to include numeric characters?");
let useSpecial=confirm("Do you want to include special characters?");

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters

//// check to make sure that only numbers are entered
//// check to make sure the number is greater than or equal to 8, less than or equal to 128

let passwordLength=prompt("How many characters do you want the password to be?")

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

//// create an if statement - if user does not select at least one type of character, then they have to start over

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria


// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

