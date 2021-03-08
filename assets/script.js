// Global Variables
var genBtn = document.querySelector('#generate');
var lowercaseChar  = 'abcdefghijklmnopqrstuvwxyz';
var uppercaseChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '0123456789';
var specials = '!@#$%^&*()_-+={}[];:`~<,>.?/|'
var passswordLength;
var uppercaseCheck;
var specialCheck;
var numberCheck;
var lowercaseCheck

// Function asks length of the password
function checkLength(){
    passswordLength = prompt('How long would you like your password? Enter 8-128.');
    if(passswordLength < 8 || !passswordLength || isNaN(passswordLength)|| passswordLength > 128){
        alert('Password length must be between 8 and 128 characters.')
        checkLength();
    }
    return passswordLength;
}

// Function asks if the user wants uppercase
function checkUppercase(){
    uppercaseCheck = confirm('Do you want your password to contain uppercase letters? Confirm for yes, cancel for no.');
    if(uppercaseCheck){
        uppercaseCheck= true;
        return uppercaseCheck;
        console.log('uppercase = true');
    }else{
        uppercaseCheck = false;
        return uppercaseCheck;
        console.log('uppercase = false');
    }
    return uppercaseCheck;
}
// Function asks if the user wants lowercase letters
function checkLowercase(){
    lowercaseCheck = confirm('Do you want your password to contain lowercase letters? Confirm for yes, cancel for no.');
    if(lowercaseCheck){
        lowercaseCheck= true;
        return lowercaseCheck;
        console.log('lowercase = true');
    }else{
        lowercaseCheck = false;
        return lowercaseCheck;
        console.log('lowercase = false');
    }
    return lowercaseCheck;
}
// Function asks if user wants numbers
function checkNumbers(){
    numberCheck = confirm('Do you want your password to contain numbers? Confirm for yes, cancel for no.');
    if(numberCheck){
    numberCheck= true;
        return numberCheck;
        console.log('numbercheck = true');
    }else{
        numberCheck = false;
        return numberCheck;
        console.log('numbercheck = false');
    }
    return numberCheck;
}
// Function asks if user wants special characters
function checkSpecial(){
    specialCheck = confirm('Do you want your password to contain special characters? Confirm for yes, cancel for no.');
    if(specialCheck){
    specialCheck= true;
        return specialCheck;
        console.log('specialcheck = true');
    }else{
        specialCheck = false;
        return specialCheck;
        console.log('specialcheck = false');
    }
    return specialCheck;
}

// Function uses responses to generate a password
function generatePassword(){
    checkLength();
    checkNumbers();
    checkSpecial();
    checkLowercase();
    checkUppercase();

    var characters;
    var password = '';
    if (uppercaseCheck && lowercaseCheck && numberCheck && specialCheck){
        characters += uppercaseChar + lowercaseChar + numbers + specials;

    }else if (uppercaseCheck && lowercaseCheck && numberCheck){
        characters += uppercaseChar + lowercaseChar + numbers;

    }else if (uppercaseCheck && lowercaseCheck && specialCheck){
        characters += uppercaseChar + lowercaseChar + specials;

    }else if (uppercaseCheck && numberCheck && specialCheck){
        characters += uppercaseChar + numbers + specials;

    }else if (lowercaseCheck && numberCheck && specialCheck){
        characters += lowercaseChar + numbers + specials;

    }else if (lowercaseCheck && numberCheck){
        characters += lowercaseChar + numbers;
    
    }else if (lowercaseCheck && uppercaseCheck){
        characters += lowercaseChar + uppercaseChar;

    }else if (lowercaseCheck && specialCheck){
        characters += lowercaseChar + specials;
    }else if (uppercaseCheck && numberCheck){
        characters += uppercaseChar + numbers;

    }else if (uppercaseCheck && specialCheck){
        characters += uppercaseChar + specials;

    }else if (specialCheck && numberCheck){
        characters += specials + numbers;

    }else if (specialCheck){
        characters === specials;
    }else if (numberCheck){
        characters === numbers;

    }else if (lowercaseCheck){
        characters === lowercaseChar;

    }else if (uppercaseChar){
        characters === uppercaseChar;

    }

    for(var i = 0; i < passswordLength; i++){
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;

}

// Writes the password to the Password ID
function writePassword(){
    var password1 = '';
    password1 = generatePassword();
    var passwordText = document.querySelector('#password');
    passwordText.value = password1;
}

// Makes the generate button start the process
genBtn.addEventListener('click', writePassword);
