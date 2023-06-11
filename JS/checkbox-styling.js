"use strict";
const optionLabels = document.querySelectorAll('.option-label');
optionLabels.forEach(optionLabel => {
    const input = optionLabel.querySelector('.option-input');
    (input) &&
        input.addEventListener('change', () => {
            input.checked
                ? optionLabel.classList.add('selected')
                : optionLabel.classList.remove('selected');
        });
});
