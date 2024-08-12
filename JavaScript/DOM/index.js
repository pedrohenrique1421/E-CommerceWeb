const passinput = document.getElementById("senha");
const imgPass = document.getElementById("passEye");

const MostrarSenha = () => {
    const passinput = document.getElementById("senha");

    imgPass.classList.add("fade-in");
    if (passinput.type === "password") {
        passinput.type = "text";
        imgPass.src = "Media/iconmonstr-eye-off-lined.svg";
    } else {
        passinput.type = "password";
        imgPass.src = "Media/iconmonstr-eye-lined.svg";
    }
    setTimeout(() => {
        imgPass.classList.remove("fade-in");
    }, 1000);
};

const SignIn = () => {
    AnimationOut("./Pages/SignUp/index.html");
};

const AnimationOut = (url) => {
    document.body.classList.add("fade-out");
    setTimeout(() => {
        window.location.href = url;
    }, 1000);
};

const AnimationIn = () => {
    document.body.classList.add("fade-in");
    setTimeout(() => {
        document.body.classList.remove("fade-in");
        document.body.style.opacity = "1";
    }, 1000);
};

AnimationIn();
