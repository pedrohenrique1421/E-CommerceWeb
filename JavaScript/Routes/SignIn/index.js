const color1 = "#f1f1f1";
const color2 = "#242424";
const email = document.getElementById("email").value;
const senha = document.getElementById("senha").value;

const GetSignInWithEmailAndPassword = async () => {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    GetSignIn(email, senha);
};

const GetSignIn = async (email, senha) => {
    try {
        event.preventDefault();
    } catch (e) {} // Evita o recarregamento da página
    const btn = document.getElementById("pressable");
    btn.innerHTML = `<img src="Media/loading-svg.png" id="loadingElement" />`;

    try {
        const response = await axios.get(
            `https://e-commerce-theta-drab.vercel.app/fornecedor/sign`, // URL da API
            {
                params: {
                    email: email,
                    senha: senha,
                },
            }
        );

        localStorage.setItem("email", email);
        localStorage.setItem("senha", senha);
        localStorage.setItem("userData", JSON.stringify(response.data));

        btn.innerHTML = `<button class="btn" name="entrar" id="entrar" onclick="GetSignIn()">Entrar</button>`;
        AnimationOut("/Pages/Home/index.html");
    } catch (error) {
        console.log("new Error");
        console.log(error.message);
        Swal.fire({
            title: "Algo deu errado!",
            text: "Seu email e/ou sua senha estão incorretos.",
            icon: "error",
            confirmButtonText: "ok",
            iconColor: color1,
            background: color2,
            grow: "row",
            color: color1,
            heightAuto: false,
        });
        console.log(Swal.getContainer());
        btn.innerHTML = `<button class="btn" name="entrar" id="entrar" onclick="GetSignIn()">Entrar</button>`;
    }
    console.log("- recebido -");
};
