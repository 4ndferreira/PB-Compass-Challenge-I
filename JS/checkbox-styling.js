var optionLabels = document.querySelectorAll('.option-label');
optionLabels.forEach(function (optionLabel) {
    var input = optionLabel.querySelector('.option-input');
    input.addEventListener('change', function () {
        input.checked
            ? optionLabel.classList.add('selected')
            : optionLabel.classList.remove('selected');
    });
});
