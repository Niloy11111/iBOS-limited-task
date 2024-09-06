export const userSignup = (email, password) => {
  let users = localStorage.getItem("users") || "[]";
  let isExist = false;
  users = JSON.parse(users);
  isExist = users.find((item) => item.email === email) ? true : false;

  if (isExist) {
    return false;
  }
  users.push({ email, password });
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("user", email);
  return true;
};

export const userLogin = (email, password) => {
  let users = localStorage.getItem("users");
  if (users) {
    users = JSON.parse(users);
    const user = users.find((item) => item.email === email);
    if (user && user.password === password) {
      localStorage.setItem("user", email);
      return user;
    }
    return false;
  } else {
    return false;
  }
};

export const userLogout = () => {
  localStorage.removeItem("user");
};

export const checkLogin = () => {
  return localStorage.getItem("user");
};
