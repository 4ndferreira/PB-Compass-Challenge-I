const optionLabels = document.querySelectorAll<HTMLInputElement>('.option-label');

optionLabels.forEach(optionLabel => {
  const input = optionLabel.querySelector<HTMLInputElement>('.option-input');

  (input) &&
  input.addEventListener('change', () => {
    input.checked 
    ? optionLabel.classList.add('selected') 
    : optionLabel.classList.remove('selected');
  });
});
