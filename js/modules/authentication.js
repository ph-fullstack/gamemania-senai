export function createUser(user) {
  if (!user?.username || !user?.password || !user?.email) return false;
  
  let users = JSON.parse(localStorage.getItem("users")) || [];
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
  return true;
}

export function authUser(login) {
  let users = JSON.parse(localStorage.getItem("users"));
  if (!users) return false;
  
  let success = users.some(user => {
    if (user.username !== login?.username) return false;
    if (user.password !== login?.password) return false;
    return true;
  });

  if (!success) return false;
  
  localStorage.setItem("auth", JSON.stringify(login));
  return true;
}

export function isAuthenticatedUser() {
  let user = JSON.parse(localStorage.getItem("auth"));

  if (!(user?.username && user?.password)) return false;
  return true;
}

export function logout() {
  localStorage.removeItem("auth");
}
