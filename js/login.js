import { authUser, createUser } from "./modules/authentication.js";

const btnLogin = document.getElementById("btnLogin");
const btnCreateRegistration  = document.getElementById("btnCreateRegistration");
const btnRegister = document.getElementById("btnRegister");
const btnBackLogin = document.getElementById("btnBackLogin");
const loginAlertingEmptyFields = document.getElementById("loginEmptyFields");
const loginAlertingIncorrectValues = document.getElementById("loginIncorrectValues");
const registerAlertingEmptyFields = document.getElementById("registerEmptyFields");
const registerAlertingSuccess = document.getElementById("registerSuccess");

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

btnLogin.addEventListener("click", event => {
  loginAlertingEmptyFields.classList.add("d-none");
  loginAlertingIncorrectValues.classList.add("d-none");

  let username = document.getElementById("loginUsername").value;
  let password = document.getElementById("loginPassword").value;

  if (!username || !password) {
    loginAlertingEmptyFields.classList.remove("d-none");
    return;
  }
  
  let user = { username, password };
  if (!authUser(user)) {
    loginAlertingIncorrectValues.classList.remove("d-none");
    return;
  }
  
  let currentUrl = window.location.href;
  let destination = currentUrl.replace("/pages/login.html", "")
  window.location.replace(destination);
});

btnCreateRegistration.addEventListener("click", async event => {
  let formLogin = document.getElementById("formLogin");
  let formRegister = document.getElementById("formRegister");
  
  formLogin.classList.add("disappear");
  await sleep(1000);
  formLogin.classList.add("d-none");
  formLogin.classList.remove("disappear", "appear");
  formRegister.classList.remove("d-none");
  formRegister.classList.add("appear");
});

btnRegister.addEventListener("click", event => {
  registerAlertingEmptyFields.classList.add("d-none");
  registerAlertingSuccess.classList.add("d-none");

  let username = document.getElementById("registerUsername").value;
  let email = document.getElementById("registerEmail").value;
  let password = document.getElementById("registerPassword").value;

  if (!username || !password || !email) {
    registerAlertingEmptyFields.classList.remove("d-none");
    return;
  }
  
  let user = { username, email, password };
  if (!createUser(user)) {
    registerAlertingEmptyFields.classList.remove("d-none");
    return;
  }
  
  registerAlertingSuccess.classList.remove("d-none");
});

btnBackLogin.addEventListener("click", async event => {
  let formLogin = document.getElementById("formLogin");
  let formRegister = document.getElementById("formRegister");
  
  formRegister.classList.add("disappear");
  await sleep(1000);
  formRegister.classList.add("d-none");
  formRegister.classList.remove("disappear", "appear");
  formLogin.classList.remove("d-none");
  formLogin.classList.add("appear");
});
