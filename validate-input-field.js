//Function for Individual Validation of Filling Fields
const validateInputField = (typedInfo, errorIcon, errorInfo, conditionForField) => {
    typedInfo.addEventListener('blur', () => {
        if (conditionForField(typedInfo)) {
            typedInfo.classList.add('error');
            errorIcon.style.visibility = 'visible';
            errorInfo.style.visibility = 'visible';
        }else{
            typedInfo.classList.remove('error'); 
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
const conditionForName = typedInfo => typedInfo.value.trim().split(' ').length < 2;

validateInputField(typedName, errorIconName, errorName, conditionForName);

//Email Check
const errorEmail = document.getElementById('hint-2');
const errorIconEmail = document.getElementById('error-icon-2');
const conditionForEmail = typedInfo => validateEmail(typedInfo.value) == false;

validateInputField(typedEmail, errorIconEmail, errorEmail, conditionForEmail);

//Message Check
const errorMessage = document.getElementById('hint-3');
const errorIconMessage = document.getElementById('error-icon-3');
const conditionForMessage = typedInfo => typedInfo.value.replace(/\s/g, "").length < 20;

validateInputField(typedMessage, errorIconMessage, errorMessage, conditionForMessage);