class customSelect {
    constructor(originalSelect) {
        this.originalSelect = originalSelect;
        this.customSelect = document.createElement("div");
        this.customSelect.classList.add("select");

        this.originalSelect.querySelectorAll("option").forEach(optionElement => {
            const itemElement = document.createElement("div");

            itemElement.classList.add("select__item");
            itemElement.textContent = optionElement.textContent;
            this.customSelect.appendChild(itemElement);

                if(optionElement.selected) {
                    this._select(itemElement);
                } else {
                    this._deselect(itemElement);
                }

            itemElement.addEventListener("click", () => {
                if (itemElement.classList.contains("select__item--selected")) {
                    this._deselect(itemElement);
                } else {
                    this._select(itemElement);
                }

                this.validateField();
            });
        });

        this.originalSelect.insertAdjacentElement("afterend", this.customSelect);
        this.originalSelect.style.display = "none";

        this.validateField(); 
    }

    _select(itemElement) {
        const index = Array.from(this.customSelect.children).indexOf(itemElement);

        this.originalSelect.querySelectorAll("option")[index].selected = true;
        itemElement.classList.add("select__item--selected");
    }

    _deselect(itemElement) {
        const index = Array.from(this.customSelect.children).indexOf(itemElement);

        this.originalSelect.querySelectorAll("option")[index].selected = false;
        itemElement.classList.remove("select__item--selected");
    }

    validateField() {
        const enteredName = document.getElementById("name").value;
        const enteredEmail = document.getElementById("email").value;
        const enteredMessage = document.getElementById("message").value;
        const selectedOptions = this.getSelectedOptions();
    
        if (
          enteredName.split(" ").length >= 2 &&
          enteredEmail !== "" &&
          enteredMessage.length >= 20 &&
          selectedOptions.length > 0
        ) {
          document.getElementById("submit-button").disabled = false;
        } else {
          document.getElementById("submit-button").disabled = true;
        }
      }

    getSelectedOptions() {
        const selectedOptions = Array.from(this.originalSelect.options)
            .filter(option => option.selected)
            .map(option => option.value);

        return selectedOptions;
    }
}

function saveFormData() {
    const enteredName = document.getElementById("name").value;
    const enteredEmail = document.getElementById("email").value;
    const enteredMessage = document.getElementById("message").value;
    const selectElement = document.querySelector(".custom-select");
    const customSelectInstance = selectElement.customSelectInstance;
    const selectedOptions = customSelectInstance.getSelectedOptions();

    let formData = {
    name: enteredName,
    email: enteredEmail,
    message: enteredMessage,
    interests: selectedOptions,
    };

    let formDataJson = JSON.stringify(formData);
    localStorage.setItem("formData", formDataJson);

    alert("Dados do formulário salvos com sucesso!");

    document.getElementById("name").value = '';
    document.getElementById("email").value = '';
    document.getElementById("message").value = '';
    document.getElementById("submit-button").disabled = true;

    customSelectInstance.customSelect
        .querySelectorAll(".select__item--selected")
        .forEach(itemElement => {
            customSelectInstance._deselect(itemElement);
        });
    window.location.href = "showData.html";
}

function validateForm() {
    const enteredName = document.getElementById("name").value;
    const enteredEmail = document.getElementById("email").value;
    const enteredMessage = document.getElementById("message").value;
    const selectElement = document.querySelector(".custom-select");
    const customSelectInstance = selectElement.customSelectInstance;
    const selectedOptions = customSelectInstance.getSelectedOptions();

    const isValidEmail = validateEmail(enteredEmail);

    if (enteredName.split(" ").length >= 2 && isValidEmail && enteredMessage.length >= 20 && selectedOptions.length > 0) {
    document.getElementById("submit-button").disabled = false;
    } else {
    document.getElementById("submit-button").disabled = true;
    }
} 
    
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

document.getElementById("submit-button").addEventListener("click", function (event) {
    event.preventDefault();
    saveFormData();
});

document.querySelectorAll(".custom-select").forEach((selectElement) => {
    const customSelectInstance = new customSelect(selectElement);
    selectElement.customSelectInstance = customSelectInstance;
});

document.getElementById("name").addEventListener("input", validateForm);
document.getElementById("email").addEventListener("input", validateForm);
document.getElementById("message").addEventListener("input", validateForm);
