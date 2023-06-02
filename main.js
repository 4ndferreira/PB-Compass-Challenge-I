//Declaration of global variables
const typedName = document.getElementById("name");
const typedEmail = document.getElementById("email");
const typedMessage = document.getElementById("message");

//Email validation function
const validateEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? true : false;

//Function to activate the form submit button
const validateForm = _ => {
    const isValidEmail = validateEmail(typedEmail.value);

    document.getElementById('submit-button').disabled =!
    (selectedItems.length >= 1 && 
    typedName.value.trim().split(' ').length >= 2 && 
    isValidEmail && 
    typedMessage.value.replace(/\s/g, "").length >= 20) 
};

//Add event listeners for real-time button activation
typedName.addEventListener('input', validateForm);
typedEmail.addEventListener('input', validateForm);
typedMessage.addEventListener('input', validateForm);
document.getElementById("options").addEventListener('change', validateForm);

//Add event listener to save form after clicking submit button
document.getElementById('submit-button').addEventListener('click', event => {
    event.preventDefault();
    saveFormData();
});

//Function to save form data to localstorage
const saveFormData = _ => {
    const formData = {
        name: typedName.value,
        email: typedEmail.value,
        message: typedMessage.value,
        interests: selectedItems,
    };

    let formDataJson = JSON.stringify(formData);
    localStorage.setItem('formData', formDataJson);

    alert('Form data sucessfully saved!');

    window.open("data-display.html", "_blank");
    window.location.reload();
};