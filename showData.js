document.addEventListener("DOMContentLoaded", function() {
    function showSavedData() {
      let formDataJson = localStorage.getItem("formData");
  
      if (formDataJson) {
        let formData = JSON.parse(formDataJson);
  
        let name = formData.name;
        let email = formData.email;
        let message = formData.message;
        let interests = formData.interests;
  
        document.getElementById("name").textContent = name;
        document.getElementById("email").textContent = email;
        document.getElementById("message").textContent = message;
        document.getElementById("interests").textContent = interests.join(", ");
      }
    }
  
    showSavedData();
  });
  
  