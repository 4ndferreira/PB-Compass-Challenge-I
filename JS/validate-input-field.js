//Function for Individual Validation of Filling Fields
/*const validateInputField = (typedInfo, errorIcon, errorInfo, isValidInfo) => {
    typedInfo.addEventListener('blur', () => {
        if (isValidInfo(typedInfo)) {
            typedInfo.classList.remove('error');
        }else{
            typedInfo.classList.add('error');
            errorIcon.style.visibility = 'visible';
            errorInfo.style.visibility = 'visible';
        };
    });
    typedInfo.addEventListener('focus', () => {
        errorIcon.style.visibility = 'hidden';
        errorInfo.style.visibility = 'hidden';
    });
};

//Name Check
const errorName = document.getElementById('hint-1');
const errorIconName = document.getElementById('error-icon-1');
const isValidName = typedInfo => typedInfo.value.trim().split(' ').length >= 2;

validateInputField(typedName, errorIconName, errorName, isValidName);

//Email Check
const errorEmail = document.getElementById('hint-2');
const errorIconEmail = document.getElementById('error-icon-2');
const isValidEmail = (typedInfo) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(typedInfo.value);

validateInputField(typedEmail, errorIconEmail, errorEmail, isValidEmail);

//Message Check
const errorMessage = document.getElementById('hint-3');
const errorIconMessage = document.getElementById('error-icon-3');
const validMessage = false;
const isValidMessage = (typedInfo) => typedInfo.value.replace(/\s/g, "").length >= 20;

validateInputField(typedMessage, errorIconMessage, errorMessage, isValidMessage);*/ 
