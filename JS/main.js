"use strict";
//Declaration of global variables
const typedName = document.getElementById("name");
const typedEmail = document.getElementById("email");
const typedMessage = document.getElementById("message");
const submitButton = document.getElementById('submit-button');
const formOptions = document.getElementById("options");
//Function for Individual Validation of Filling Fields
const validateInputField = (typedData, n, isValidData) => {
    const errorIcon = document.getElementById('hint-' + n);
    const errorHint = document.getElementById('error-icon-' + n);
    typedData.addEventListener('blur', () => isValidData(typedData)
        ? typedData.classList.remove('error')
        : (typedData.classList.add('error')
            , errorIcon.style.visibility = 'visible'
            , errorHint.style.visibility = 'visible'));
    typedData.addEventListener('focus', () => {
        errorIcon.style.visibility = 'hidden';
        errorHint.style.visibility = 'hidden';
    });
};
//Name Check
const isValidName = (typedData) => typedData.value.trim().split(' ').length >= 2;
validateInputField(typedName, 1, isValidName);
//Email Check
const isValidEmail = (typedData) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(typedData.value);
validateInputField(typedEmail, 2, isValidEmail);
//Message Check
const isValidMessage = (typedData) => typedData.value.replace(/\s/g, "").length >= 20;
validateInputField(typedMessage, 3, isValidMessage);
//Function to activate the form submit button
const validateForm = () => {
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
const saveFormData = () => {
    //There is data in local storage?
    const currentDataJson = localStorage.getItem('formData');
    let currentData = (currentDataJson ? JSON.parse(currentDataJson) : []);
    //Creates an object with form data
    const formData = {
        name: typedName.value,
        email: typedEmail.value,
        message: typedMessage.value,
        interests: selectedItems
    };
    //Add the created object to the existing data array
    currentData = [formData, ...currentData];
    //Save the updated array to localStorage
    localStorage.setItem('formData', JSON.stringify(currentData));
    alert('Form data sucessfully saved!');
    window.open("data-display.html", "_blank");
    window.location.reload();
};
//Add event listener to save form after clicking submit button
submitButton.addEventListener('click', event => {
    event.preventDefault();
    saveFormData();
});
