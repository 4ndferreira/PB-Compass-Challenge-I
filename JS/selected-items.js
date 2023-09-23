"use strict";
//Function to style checkbox after its selection
const checkboxes = document.querySelectorAll('.option-input');
const selectedItems = [];
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const checkboxItem = checkbox.nextSibling;
        const checkboxContent = checkboxItem && checkboxItem.textContent;
        checkbox.checked
            ? checkboxContent && selectedItems.push(checkboxContent.trim())
            : ((index) => index !== -1 && selectedItems.splice(index, 1)),
            checkboxContent && (selectedItems.indexOf(checkboxContent.trim()));
        console.log(selectedItems);
    });
});
