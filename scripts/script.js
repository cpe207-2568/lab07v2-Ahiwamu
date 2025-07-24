// create reference for input fields.
const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const passwordConfirmInput = document.querySelector("#password-confirm-input");
// create reference for buttons.
const submitBtn = document.querySelector("#submit-btn");
const resetBtn = document.querySelector("#reset-btn");
// simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

// add callback function for firstNameInput.onkeyup event
firstNameInput.onkeyup = () => {
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");
};

lastNameInput.onkeyup = () => {
  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");
}

emailInput.onkeyup = () => {
  emailInput.classList.remove("is-valid");
  emailInput.classList.remove("is-invalid");
}

passwordInput.onkeyup = () => {
  passwordInput.classList.remove("is-valid");
  passwordInput.classList.remove("is-invalid");
}

passwordConfirmInput.onkeyup = () => {
  passwordConfirmInput.classList.remove("is-valid");
  passwordConfirmInput.classList.remove("is-invalid");
}
// add callback functions for other input events.
// (lastname, email, password, confirm password)

// add callback function for submit button.
submitBtn.onclick = () => {
  isFirstNameOk = false;
  isLastNameOk = false;
  isEmailOk = false;
  isPasswordOk = false;
  isPasswordConfirmOk = false;
  // validate first name
  if (typeof firstNameInput.value !== typeof "CPE207" || firstNameInput.value === "") {
    firstNameInput.classList.add("is-invalid");
    //isFirstNameOk = false;
  } else {
    firstNameInput.classList.add("is-valid");
    isFirstNameOk = true;
  }

  // validate last name
  if (typeof lastNameInput.value !== typeof "CPE207" || lastNameInput.value === "") {
    lastNameInput.classList.add("is-invalid");
    //isLastNameOk = false;
  } else {
    lastNameInput.classList.add("is-valid");
    isLastNameOk = true;
  }
  // validate email
  if(validateEmail(emailInput.value) === false){
    emailInput.classList.add("is-invalid");
    //isEmailOk = false;
  }
  else{
    emailInput.classList.add("is-valid");
    isEmailOk = true;
  }
  // validate password
  if (typeof passwordInput.value !== typeof "CPE207" || 
    passwordInput.value === "" ||
    passwordInput.value.length < 6) {
    passwordInput.classList.add("is-invalid");
    //isPasswordOk = false;
  } else {
    passwordInput.classList.add("is-valid");
    isPasswordOk = true;
  }
  // validate confirm password
  if (typeof passwordConfirmInput.value !== typeof "CPE207" || 
    passwordConfirmInput.value === "" || 
    passwordConfirmInput.value !== passwordInput.value ||
    passwordConfirmInput.value.length < 6) {
    passwordConfirmInput.classList.add("is-invalid");
    //isPasswordConfirmOk = false;
  } else {
    passwordConfirmInput.classList.add("is-valid");
    isPasswordConfirmOk = true;
  }


  if (isFirstNameOk && isLastNameOk && isEmailOk && isPasswordOk && isPasswordConfirmOk){
    alert("Registered successfully");
    firstNameInput.classList.add("is-valid");
    lastNameInput.classList.add("is-valid");
    emailInput.classList.add("is-valid");
    passwordInput.classList.add("is-valid");
    passwordConfirmInput.classList.add("is-valid");

  }
};

// add callback function for Reset button.
resetBtn.onclick = () => {
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");
  firstNameInput.value = "";
  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");
  lastNameInput.value = "";
  emailInput.classList.remove("is-valid");
  emailInput.classList.remove("is-invalid");
  emailInput.value = "";
  passwordInput.classList.remove("is-valid");
  passwordInput.classList.remove("is-invalid");
  passwordInput.value = "";
  passwordConfirmInput.classList.remove("is-valid");
  passwordConfirmInput.classList.remove("is-invalid");
  passwordConfirmInput.value = "";

};