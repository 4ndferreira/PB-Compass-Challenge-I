const optionLabels = document.querySelectorAll('.option-label');

optionLabels.forEach(optionLabel => {
    const input = optionLabel.querySelector('.option-input');

    input.addEventListener('change', () => {
        input.checked ? optionLabel.classList.add('selected') : optionLabel.classList.remove('selected');
    });
});

const checkboxes = document.querySelectorAll('.option-input');

let selectedItems = [];

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        checkbox.checked ? selectedItems.push(checkbox.nextSibling.textContent.trim()) : (index => index !== -1 && selectedItems.splice(index, 1))(selectedItems.indexOf(checkbox.nextSibling.textContent.trim()));
        console.log(selectedItems);
    });
});

function saveFormData(selectedItems) {
    const enteredName = document.getElementById("name").value;
    const enteredEmail = document.getElementById("email").value;
    const enteredMessage = document.getElementById("message").value;

    const formData = {
        name: enteredName,
        email: enteredEmail,
        message: enteredMessage,
        interests: selectedItems,
    }

    let formDataJson = JSON.stringify(formData);
    localStorage.setItem('formData', formDataJson);

    alert('Form data sucessfully saved!')

    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    })

    optionLabels.forEach(optionLabel => {
        optionLabel.classList.remove('selected');
    });

    selectedItems = [];

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
    document.getElementById('submit-button').disabled = true;

    window.open("showData.html", "_blank");
}

function validateForm() {
    const enteredName = document.getElementById('name').value;
    const enteredEmail = document.getElementById('email').value;
    const enteredMessage = document.getElementById('message').value;

    const messageWithoutSpaces = enteredMessage.replace(/\s/g, "");

    const isValidEmail = validateEmail(enteredEmail);

    selectedItems.length >= 1 && enteredName.split(' ').length > 1 && isValidEmail && messageWithoutSpaces.length >= 20 ? document.getElementById('submit-button').disabled = false : document.getElementById('submit-button').disabled = true;
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


document.getElementById('name').addEventListener('input', validateForm);
document.getElementById('email').addEventListener('input', validateForm);
document.getElementById('message').addEventListener('input', validateForm);
document.getElementById('options').addEventListener('input', validateForm);

document.getElementById('submit-button').addEventListener('click', function(event) {
    event.preventDefault();
    saveFormData(selectedItems);
});