//Declaration of global variables
var typedName = document.getElementById("name");
var typedEmail = document.getElementById("email");
var typedMessage = document.getElementById("message");
var submitButton = document.getElementById('submit-button');
var formOptions = document.getElementById("options");
//Function for Individual Validation of Filling Fields
var validateInputField = function (typedData, errorIcon, errorHint, isValidData) {
    typedData.addEventListener('blur', function () {
        return isValidData(typedData)
            ? typedData.classList.remove('error')
            : (typedData.classList.add('error')
                , errorIcon.style.visibility = 'visible'
                , errorHint.style.visibility = 'visible');
    });
    typedData.addEventListener('focus', function () {
        errorIcon.style.visibility = 'hidden';
        errorHint.style.visibility = 'hidden';
    });
};
//Name Check
var errorName = document.getElementById('hint-1');
var errorIconName = document.getElementById('error-icon-1');
var isValidName = function (typedData) { return typedData.value.trim().split(' ').length >= 2; };
validateInputField(typedName, errorIconName, errorName, isValidName);
//Email Check
var errorEmail = document.getElementById('hint-2');
var errorIconEmail = document.getElementById('error-icon-2');
var isValidEmail = function (typedData) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(typedData.value); };
validateInputField(typedEmail, errorIconEmail, errorEmail, isValidEmail);
//Message Check
var errorMessage = document.getElementById('hint-3');
var errorIconMessage = document.getElementById('error-icon-3');
var isValidMessage = function (typedData) { return typedData.value.replace(/\s/g, "").length >= 20; };
validateInputField(typedMessage, errorIconMessage, errorMessage, isValidMessage);
//Function to activate the form submit button
var validateForm = function () {
    submitButton.disabled = !(selectedItems.length >= 1 &&
        isValidName(typedName) &&
        isValidEmail(typedEmail) &&
        isValidMessage(typedMessage));
};
//Add event listeners for real-time button activation
typedName.addEventListener('input', validateForm);
typedEmail.addEventListener('input', validateForm);
typedMessage.addEventListener('input', validateForm);
formOptions.addEventListener('change', validateForm);
//Function to save form data to localstorage
var saveFormData = function () {
    //Creates an object with form data
    var formData = {
        name: typedName.value,
        email: typedEmail.value,
        message: typedMessage.value,
        interests: selectedItems
    };
    localStorage.setItem('formData', JSON.stringify(formData));
    alert('Form data sucessfully saved!');
    window.open("data-display.html", "_blank");
    window.location.reload();
};
//Add event listener to save form after clicking submit button
submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    saveFormData();
});
/*
//Function to save form data to localstorage
const saveFormData = () => {
  //There is data in local storage?
  const currentDataJson: string = localStorage.getItem('formData');
  const currentData: object[] = (currentDataJson ? [JSON.parse(currentDataJson)] : []);
  //Creates an object with form data
  const newFormData = {
    name: typedName.value,
    email: typedEmail.value,
    message: typedMessage.value,
    interests: selectedItems
  };
  //Add the created object to the existing data array
  currentData.push(newFormData);
  //Save the updated array to localStorage
  localStorage.setItem('formData', JSON.stringify(currentData));
  
  alert('Form data sucessfully saved!');
  
  window.open("data-display.html", "_blank");
  //window.location.reload();
};

//Add event listener to save form after clicking submit button
submitButton.addEventListener('click', event => {
  event.preventDefault();
  saveFormData();
});*/ 
