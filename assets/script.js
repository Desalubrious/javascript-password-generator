// Global Variables
var enter;
var promptNumber;
var promptCharacter;
var promptUpper;
var promptLower;

// Password values stored in an array
// Special characters
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
//Numerals stored in an array
number = [1,2,3,4,5,6,7,8,9,0];
// Letters stored in an array
letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//Space for uppercase conversion
space = [];

// Logs responses from prompts for later use
var responses;

// Converts letters to uppercase
var toUpper = function(x){
    return x.toUpperCase();
}

// Creates a variable for uppercase conversion
alpha = letters.map(toUpper);

// Selects the generate button
var get = document.querySelector('#generate');

// Once the generate button is clicked, the function starts to generate a password
get.addEventListener('click',function()
{
    pw = generatePassword();
    document.getElementById('password').placeholder = pw;
})

// Function to generate a password
function generatePassword(){
    enter = parseInt(prompt('Enter how many characters for your password, 8-128'));
    // Makes sure a value is entered
    if(!enter || enter < 8 || enter > 128 ){
        alert('Entry must not be blank, and must be 8-128')
    }else{
        // Continues, and asks the required questions
        promptNumber = confirm("Will this contain numbers?");
        promptCharacter = confirm("Will this contain special characters?");
        promptUpper = confirm("Will this contain uppercase letters?");
        promptLower = confirm("Will this contain lowercase letters?");
    }
    // Makes sure that options are selected
    if(!promptLower && !promptCharacter && !promptNumber && !promptUpper){
        responses = alert('You must choose at least one option!')
    }
    // User selected all options
    else if(promptUpper && promptNumber && promptLower && promptCharacter){
        responses = character.concat(number,letters,alpha);
    }
    //User selected 3 options
    else if (promptCharacter && promptNumber && promptUppercase) {
        choices = character.concat(number, alpha);
    }
    else if (promptCharacter && promptNumber && promptLowercase) {
        choices = character.concat(number, alpha);
    }
    else if (promptCharacter && promptLowercase && promptUppercase) {
        choices = character.concat(alpha, letters);
    }
    else if (promptNumber && promptLowercase && promptUppercase) {
        choices = number.concat(letters, alpha2);
    }
    //User selected 2 options
    else if (promptCharacter && promptNumber) {
        choices = character.concat(number);

    } else if (promptCharacter && promptLowercase) {
        choices = character.concat(letters);

    } else if (promptCharacter && promptUppercase) {
        choices = character.concat(alpha);
    }
    else if (promptLowercase && promptNumber) {
        choices = letters.concat(number);

    } else if (promptLowercase && promptUppercase) {
        choices = letters.concat(alpha);

    } else if (promptNumber && promptUppercase) {
        choices = number.concat(alpha);
    }
    // User selected one option
    else if (promptCharacter) {
        choices = character;
    }
    else if (promptNumber) {
        choices = number;
    }
    else if (promptLowercase) {
        choices = letters;
    }
    // Used space variable to fill uppercase conversion
    else if (promptUppercase) {
        choices = space.concat(alpha);
    };
    
}   