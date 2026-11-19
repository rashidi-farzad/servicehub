const registerName = document.querySelector("#register-name");
const registerPhone = document.querySelector("#register-phone");
const registerEmail = document.querySelector("#register-email");
const registerCity = document.querySelector("#register-city");
const registerPassword = document.querySelector("#register-password");
const registerPasswordConfirm = document.querySelector(
  "#register-password-confirm",
);
const registerTerms = document.querySelector("#register-terms");

const registerCustomer = () => {
  const newCustomerInfos = {
    fullName: registerName.value,
    email: registerEmail.value,
    phone: registerPhone.value,
    password: registerPassword.value,
  };
};

export { registerCustomer };
