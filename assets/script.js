// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria

//// something something DOM

//// create arrays for all lowercase, upercase, numeric, and special characters
let passwordResult="";
let caseArray=[];
let lowercaseChar=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let uppercaseChar=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","W","X","Y","Z"];
let numericChar=["1","2","3","4","5","6","7","8","9","0"];
let specialChar=["!","@","#","$","%","^","&","*","(",")","{","}","|","[","]",";","'",":","<",">","?","/"];

//// use a loop - if user does not select at least one type of character, then they have to start over

// declaring boolean variables, asking user for input
let useLowerCase=confirm("Do you want to include lowercase characters?");
let useUpperCase=confirm("Do you want to include uppercase characters?");
let useNumeric=confirm("Do you want to include numeric characters?");
let useSpecial=confirm("Do you want to include special characters?");

//running loop to check if all variables are false. If so, user is prompted to select again
while (useLowerCase == false && useUpperCase == false && useNumeric == false && useSpecial == false) {
    alert("Please select one type of character");
    useLowerCase=confirm("Do you want to include lowercase characters?");
    useUpperCase=confirm("Do you want to include uppercase characters?");
    useNumeric=confirm("Do you want to include numeric characters?");
    useSpecial=confirm("Do you want to include special characters?");
}

// while loop to check for password length. If number less than 8 or over 128, or if input is a string or NaN, user is asked for input again

let passwordLength=parseInt(prompt("How many characters do you want the password to be? The password cannot be less than 8 or more than 128 characters."));
while(passwordLength <= 8 || passwordLength >= 128 || typeof(passwordLength) != "number" || passwordLength == NaN) {
    alert("Please choose a number that is more than 8 and less than 128 characters");
    passwordLength=parseInt(prompt("How many characters do you want the password to be? The password cannot be less than 8 or more than 128 characters."));
} 

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

////use Math.random() to randomly index through
////create an array of the selected character types, randomly select one from the array, and then a random index from the selected array 

if (useLowerCase==true){
    
}
if (useUpperCase==true){

}
if (useNumeric==true){

}
if (useSpecial==true){
    
}

//// if character type is selected, the array name is stored into a group array
//// a loop is run for the length of the password
//// a random number is generated for the group array (length of group array)
//// a random number is generated for the character array (length of character array)

for(let i=0;i<passwordLength;i++){
    console.log(i); //testing for loop. should print out as many numbers as there are in the length
}

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

////something something DOM