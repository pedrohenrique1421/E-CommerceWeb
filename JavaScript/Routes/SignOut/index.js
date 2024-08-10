const SignOut = () => {
  localStorage.removeItem("email");
  localStorage.removeItem("senha");
  localStorage.removeItem("userData");

  window.location.href = "../../index.html";
};
