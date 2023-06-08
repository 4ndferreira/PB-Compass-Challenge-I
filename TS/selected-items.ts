//Function to style checkbox after its selection
const checkboxes = document.querySelectorAll<HTMLInputElement>('.option-input');

const selectedItems: string[] = [];

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    checkbox.checked 
    ? selectedItems.push(checkbox.nextSibling!.textContent!.trim()) 
    : (index => index !== -1 && selectedItems.splice(index, 1))
      (selectedItems.indexOf(checkbox.nextSibling!.textContent!.trim()));
    
    console.log(selectedItems);
  });
}); 