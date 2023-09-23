"use strict";
//Retrieve data from localstorage and display it in a new page
document.addEventListener('DOMContentLoaded', () => {
    const showSavedData = () => {
        const currentDataJson = localStorage.getItem('formData');
        const currentData = (currentDataJson ? JSON.parse(currentDataJson) : []);
        const container = document.getElementById('saved-data');
        currentData.forEach((formData, index) => {
            const { name, email, message, interests } = formData;
            const formDataUl = document.createElement('li');
            const createLineText = (elementType, text) => {
                const element = document.createElement(elementType);
                element.textContent = text;
                formDataUl.appendChild(element);
            };
            createLineText('h2', 'Submitter ' + (index + 1));
            createLineText('p', 'Name: ' + name);
            createLineText('p', 'Email: ' + email);
            createLineText('p', 'Message: ' + message);
            createLineText('p', 'Interests: ' + interests.join(','));
            container.appendChild(formDataUl);
        });
    };
    showSavedData();
});
