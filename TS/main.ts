//Declaration of global variables
const typedName = document.getElementById("name") as HTMLInputElement;
const typedEmail = document.getElementById("email") as HTMLInputElement;
const typedMessage = document.getElementById("message") as HTMLInputElement;
const submitButton = document.getElementById('submit-button') as HTMLButtonElement;
const formOptions = document.getElementById("options") as HTMLInputElement;

interface validateInput {
  (typedData: HTMLInputElement): boolean;
}

//Function for Individual Validation of Filling Fields
const validateInputField = (typedData: HTMLInputElement, n: number, isValidData: validateInput) => {
  const errorIcon = document.getElementById('hint-' +n) as HTMLParagraphElement;
  const errorHint = document.getElementById('error-icon-' +n) as HTMLImageElement;
  typedData.addEventListener('blur', () => 
    isValidData(typedData) 
    ? typedData.classList.remove('error') 
    : (typedData.classList.add('error')
    , errorIcon.style.visibility = 'visible'
    , errorHint.style.visibility = 'visible') 
  )                          
  typedData.addEventListener('focus', () => {
    errorIcon.style.visibility = 'hidden';
    errorHint.style.visibility = 'hidden';
  });   
};

//Name Check
const isValidName = (typedData: HTMLInputElement) => typedData.value.trim().split(' ').length >= 2;
validateInputField(typedName, 1, isValidName);

//Email Check
const isValidEmail = (typedData: HTMLInputElement) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(typedData.value);
validateInputField(typedEmail, 2, isValidEmail);

//Message Check
const isValidMessage = (typedData: HTMLInputElement) => typedData.value.replace(/\s/g, "").length >= 20;
validateInputField(typedMessage, 3, isValidMessage);

//Function to activate the form submit button
const validateForm = () => {
  submitButton.disabled = !(
    selectedItems.length >= 1 && 
    isValidName(typedName) && 
    isValidEmail(typedEmail) && 
    isValidMessage(typedMessage)
  );
};

//Add event listeners for real-time button activation
typedName.addEventListener('input', validateForm);
typedEmail.addEventListener('input', validateForm);
typedMessage.addEventListener('input', validateForm);
formOptions.addEventListener('change', validateForm);

interface FormDataType {
  name: string,
  email: string,
  message: string,
  interests: string[]
}
//Function to save form data to localstorage
const saveFormData = () => {
  //There is data in local storage?
  const currentDataJson: string | null = localStorage.getItem('formData');
  let currentData: FormDataType[] = (currentDataJson ? JSON.parse(currentDataJson) : []);
  //Creates an object with form data
  const formData: FormDataType = {
    name: typedName.value,
    email: typedEmail.value,
    message: typedMessage.value,
    interests: selectedItems
  };
  //Add the created object to the existing data array
  currentData = [formData, ...currentData];
  //Save the updated array to localStorage
  localStorage.setItem('formData', JSON.stringify(currentData));
  
  alert('Form data sucessfully saved!');
  
  window.open("data-display.html", "_blank");
  window.location.reload();
};

//Add event listener to save form after clicking submit button
submitButton.addEventListener('click', event => {
  event.preventDefault();
  saveFormData();
});