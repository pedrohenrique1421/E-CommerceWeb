const email = localStorage.getItem("email");
console.log(email);
const senha = localStorage.getItem("senha");
console.log(senha);
const userData = localStorage.getItem("userData");

if (userData) {
  const responseObject = JSON.parse(userData);
  console.log(responseObject);
} else {
  console.log("problema meu nobre");
}
