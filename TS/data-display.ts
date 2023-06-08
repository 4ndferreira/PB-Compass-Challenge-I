//Retrieve data from localstorage and display it in a new page
document.addEventListener('DOMContentLoaded', () => {
  const showSavedData = () => {
    const formDataJson: string = localStorage.getItem('formData');

    if (formDataJson) {
      const formData: FormDataType = JSON.parse(formDataJson);

      document.getElementById('name')!.textContent = formData.name;
      document.getElementById('email')!.textContent = formData.email;
      document.getElementById('message')!.textContent = formData.message;
      document.getElementById('interests')!.textContent = formData.interests.join(', ');
    }
  };
  showSavedData();
});