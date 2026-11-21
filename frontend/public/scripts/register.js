import { registerCustomer } from "./funcs/register.js";
window.addEventListener("load", () => {
  const registerRole = document.querySelector("#register-role");
  const providerFields = document.querySelector("#register-provider-fields");
  const registerSubmit = document.querySelector("#register-submit");
  registerRole.addEventListener("change", (event) => {
    if (event.target.id === "role-customer") {
      providerFields.classList.add("hidden");
    } else {
      providerFields.classList.remove("hidden");
    }
  });
  registerSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    registerCustomer();
  });
});
