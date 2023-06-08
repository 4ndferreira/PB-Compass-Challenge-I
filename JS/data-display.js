//Retrieve data from localstorage and display it in a new page
document.addEventListener('DOMContentLoaded', function () {
    var showSavedData = function () {
        var formDataJson = localStorage.getItem('formData');
        if (formDataJson) {
            var formData = JSON.parse(formDataJson);
            document.getElementById('name').textContent = formData.name;
            document.getElementById('email').textContent = formData.email;
            document.getElementById('message').textContent = formData.message;
            document.getElementById('interests').textContent = formData.interests.join(', ');
        }
    };
    showSavedData();
});
