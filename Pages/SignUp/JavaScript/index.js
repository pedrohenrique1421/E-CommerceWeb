const element = document.getElementsByClassName("container")[0];

const AnimationIn = () => {
    element.classList.add("fade-in");
    setTimeout(() => {
        element.classList.remove("fade-in");
        element.style.opacity = "1";
    }, 1000);
};

const AnimationOutBack = (funcao) => {
    document.getElementsByClassName("container")[0].classList.add("fade-out");
    setTimeout(() => {
        element.style.opacity = "0";
        typeof funcao === "function" ? funcao() : false;
    }, 1000);
};

AnimationIn();
document.addEventListener("DOMContentLoaded", function () {
    const inputContainer = document.getElementsByClassName("abc");
    const arrayElements = Object.entries(inputContainer);
    arrayElements.forEach((element) => {
        element[1].addEventListener("click", () => {
            let elemento = document.getElementById(String(element[1].id));
            elemento.style.transform = "none";
        });
    });
});
