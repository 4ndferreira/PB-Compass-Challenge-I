const checkboxes = document.querySelectorAll('.option-input');

let selectedItems = [];

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        checkbox.checked 
        ? selectedItems.push(checkbox.nextSibling.textContent.trim()) 
        : (index => index !== -1 && selectedItems.splice(index, 1))(selectedItems.indexOf(checkbox.nextSibling.textContent.trim()));
        console.log(selectedItems);
    });
});