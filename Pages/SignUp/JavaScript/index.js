const element = document.getElementsByClassName("container")[0];

const AnimationIn = () => {
    element.classList.add("fade-in");
    setTimeout(() => {
        element.classList.remove("fade-in");
        element.style.opacity = "1";
    }, 1000);
};

AnimationIn();
