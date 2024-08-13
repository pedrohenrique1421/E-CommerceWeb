const imgPass = document.getElementById("passEye");

const MostrarSenha = () => {
    const passinput = document.getElementsByName("senha")[0];

    imgPass.classList.add("fade-in");
    if (passinput.type === "password") {
        passinput.type = "text";
        imgPass.src = "../../Media/iconmonstr-eye-off-lined.svg";
    } else {
        passinput.type = "password";
        imgPass.src = "../../Media/iconmonstr-eye-lined.svg";
    }
    setTimeout(() => {
        imgPass.classList.remove("fade-in");
    }, 1000);
};
