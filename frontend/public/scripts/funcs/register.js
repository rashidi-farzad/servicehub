const baseUrl = "localhost:3000";
const registerName = document.querySelector("#register-name");
const registerPhone = document.querySelector("#register-phone");
const registerEmail = document.querySelector("#register-email");
const registerCity = document.querySelector("#register-city");
const registerPassword = document.querySelector("#register-password");
const registerPasswordConfirm = document.querySelector(
  "#register-password-confirm",
);
const registerTerms = document.querySelector("#register-terms");
const registerPhoneHint = document.querySelector("#register-phone-hint");

const registerCustomer = async () => {
  const newCustomerInfos = {
    fullName: registerName.value,
    email: registerEmail.value,
    phone: registerPhone.value,
    password: registerPassword.value,
    confirmPassword: registerPasswordConfirm.value,
  };
  const response = await fetch(`http://localhost:3000/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newCustomerInfos),
  });
  const data = await response.json();

  console.log("Status:", response.status);
  console.log("Response Data:", data);
};

export { registerCustomer };
