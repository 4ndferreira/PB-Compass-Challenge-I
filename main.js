let typedName, typedEmail, typedMessage;

document.getElementById('name').addEventListener('input', validateForm);
document.getElementById('email').addEventListener('input', validateForm);
document.getElementById('message').addEventListener('input', validateForm);
document.getElementById('options').addEventListener('change', validateForm);

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateForm() {
    typedName = document.getElementById("name").value;
    typedEmail = document.getElementById("email").value;
    typedMessage = document.getElementById("message").value;

    const messageWithoutSpaces = typedMessage.replace(/\s/g, "");

    const isValidEmail = validateEmail(typedEmail);

    selectedItems.length >= 1 && 
    typedName.trim().split(' ').length > 1 && 
    isValidEmail && 
    messageWithoutSpaces.length >= 20 
    ? document.getElementById('submit-button').disabled = false 
    : document.getElementById('submit-button').disabled = true;
}

document.getElementById('submit-button').addEventListener('click', function(event) {
    event.preventDefault();
    saveFormData();
});

function saveFormData() {
    typedName = document.getElementById("name").value;
    typedEmail = document.getElementById("email").value;
    typedMessage = document.getElementById("message").value;
    
    const formData = {
        name: typedName,
        email: typedEmail,
        message: typedMessage,
        interests: selectedItems,
    };

    let formDataJson = JSON.stringify(formData);
    localStorage.setItem('formData', formDataJson);

    alert('Form data sucessfully saved!')

    window.open("data-display.html", "_blank");
    window.location.reload();
}