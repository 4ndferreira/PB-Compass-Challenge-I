//Declaration of global variables
const typedName: HTMLInputElement = document.getElementById("name") as HTMLInputElement;
const typedEmail: HTMLInputElement = document.getElementById("email") as HTMLInputElement;
const typedMessage: HTMLInputElement = document.getElementById("message") as HTMLInputElement;
const submitButton: HTMLButtonElement = document.getElementById('submit-button') as HTMLButtonElement;
const formOptions: HTMLInputElement = document.getElementById("options") as HTMLInputElement;

//Function for Individual Validation of Filling Fields
const validateInputField = (
    typedData: HTMLInputElement, 
    errorIcon: HTMLImageElement, 
    errorHint: HTMLParagraphElement, 
    isValidData: (typedData: HTMLInputElement) => boolean) => {
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
const errorName: HTMLParagraphElement = document.getElementById('hint-1') as HTMLParagraphElement;
const errorIconName: HTMLImageElement = document.getElementById('error-icon-1') as HTMLImageElement;
const isValidName = (typedData: HTMLInputElement) => typedData.value.trim().split(' ').length >= 2;

validateInputField(typedName, errorIconName, errorName, isValidName);

//Email Check
const errorEmail: HTMLParagraphElement = document.getElementById('hint-2') as HTMLParagraphElement;
const errorIconEmail: HTMLImageElement = document.getElementById('error-icon-2') as HTMLImageElement;
const isValidEmail = (typedData: HTMLInputElement) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(typedData.value);

validateInputField(typedEmail, errorIconEmail, errorEmail, isValidEmail);

//Message Check
const errorMessage: HTMLParagraphElement = document.getElementById('hint-3') as HTMLParagraphElement;
const errorIconMessage: HTMLImageElement = document.getElementById('error-icon-3') as HTMLImageElement;
const isValidMessage = (typedData: HTMLInputElement) => typedData.value.replace(/\s/g, "").length >= 20;

validateInputField(typedMessage, errorIconMessage, errorMessage, isValidMessage);

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
};
//Function to save form data to localstorage
const saveFormData = () => {
  //Creates an object with form data
  const formData: FormDataType = {
    name: typedName.value,
    email: typedEmail.value,
    message: typedMessage.value,
    interests: selectedItems
  };

  localStorage.setItem('formData', JSON.stringify(formData));
  
  alert('Form data sucessfully saved!');
  
  window.open("data-display.html", "_blank");
  window.location.reload();
};

//Add event listener to save form after clicking submit button
submitButton.addEventListener('click', event => {
  event.preventDefault();
  saveFormData();
});










/*
//Function to save form data to localstorage
const saveFormData = () => {
  //There is data in local storage?
  const currentDataJson: string = localStorage.getItem('formData');
  const currentData: object[] = (currentDataJson ? [JSON.parse(currentDataJson)] : []);
  //Creates an object with form data
  const newFormData = {
    name: typedName.value,
    email: typedEmail.value,
    message: typedMessage.value,
    interests: selectedItems
  };
  //Add the created object to the existing data array
  currentData.push(newFormData);
  //Save the updated array to localStorage
  localStorage.setItem('formData', JSON.stringify(currentData));
  
  alert('Form data sucessfully saved!');
  
  window.open("data-display.html", "_blank");
  //window.location.reload();
};

//Add event listener to save form after clicking submit button
submitButton.addEventListener('click', event => {
  event.preventDefault();
  saveFormData();
});*/