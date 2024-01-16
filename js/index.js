import { isAuthenticatedUser, logout } from "./modules/authentication.js";

function redirectLogin() {
  const currentUrl = window.location.href;
  const destination = `${currentUrl}/pages/login.html`;
  window.location.replace(destination);
}


if (!isAuthenticatedUser()) {
  redirectLogin();
}

const btnLogout = document.getElementById("btnLogout");

btnLogout.addEventListener("click", event => {
  logout();
  redirectLogin();
})
