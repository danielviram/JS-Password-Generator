// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria

//// something something DOM

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

//// use confirms assigned to variables to generate boolean values

let useLowercase=confirm("Do you want to include lowercase characters?");
let useUppercase=confirm("Do you want to include uppercase characters?");
let useNumeric=confirm("Do you want to include numeric characters?");
let useSpecial=confirm("Do you want to include special characters?");

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters

////use prompt assigned to a variable to generate a number
////use if/else statements to prevent numbers from goign below 8, above 128

// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters

//// create arrays for all lowercase, upercase, numeric, and special characters

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

//// create an if statement - if user does not select at least one type of character, then they have to start over

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria


// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

