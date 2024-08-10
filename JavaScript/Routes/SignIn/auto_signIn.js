const emailStorage = localStorage.getItem("email");
const senhaStorage = localStorage.getItem("senha");

console.log(emailStorage, senhaStorage);
if (emailStorage && senhaStorage) {
  GetSignIn(emailStorage, senhaStorage);
}
