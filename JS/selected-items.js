//Function to style checkbox after its selection
var checkboxes = document.querySelectorAll('.option-input');
var selectedItems = [];
checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
        checkbox.checked
            ? selectedItems.push(checkbox.nextSibling.textContent.trim())
            : (function (index) { return index !== -1 && selectedItems.splice(index, 1); })(selectedItems.indexOf(checkbox.nextSibling.textContent.trim()));
        console.log(selectedItems);
    });
});
