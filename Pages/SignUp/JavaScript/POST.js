
const GetSignUp = async (obj) => {
    event.preventDefault(); // Evita o recarregamento da página
    try {
        const response = await axios.post(
            `https://e-commerce-theta-drab.vercel.app/fornecedor/sign`, // URL da API
            {
                nome: obj.nome,
                telefone: obj.telefone,
                estado: obj.estado,
                cidade: obj.cidade,
                bairro: obj.bairro,
                numero: parseInt(obj.numero),
                cnpj: obj.cnpj,
            },
            {
                params: {
                    email: obj.email,
                    senha: obj.senha,
                },
            }
        );
        return {
            data: response.data,
            status: response.status
        }
    } catch (error) {
        console.log(error);
    }
    console.log("- recebido -");
};

const GetSignIn = async (email, senha) => {
    try {
        event.preventDefault();
    } catch (e) {} // Evita o recarregamento da página
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
    } catch (error) {
        console.log("new Error");
        console.log(error.message);
    }
};


const PostFornecedor = async () => {
    const color1 = "#f1f1f1";
    const color2 = "#242424";

    const obj = {};
    const getValues = document.getElementsByClassName("abc");
    const btnContinuar = document.getElementById("submit")
    btnContinuar.style.pointerEvents = "none"
    btnContinuar.innerHTML = `<img src="../../Media/loading-svg.png" id="loading" alt="">`
    Object.entries(getValues).forEach((e) => {
        if (e[1].type === "checkbox") {
            if (e[1].checked == true) {
                obj[e[1].name] = e[1].checked;
            }
        } else {
            if (e[1].value) {
                obj[e[1].name] = e[1].value;
            }
        }
    });

    if (Object.keys(obj).length == 10) {
        // Funcao de post
        const response = await GetSignUp(obj);
        
        console.log("response data: ", response.data);
        console.log(`status(${response.status})`)

        if(response.status == 201){
            console.log(obj.email, obj.senha)
            await GetSignIn(obj.email, obj.senha)
            AnimationOutBack((window.location.href = "/Pages/Home/index.html"))
        }

        btnContinuar.style.pointerEvents = "initial"
        btnContinuar.innerHTML = `Continuar`
    } else {
        Swal.fire({
            title: "Algo de errado!",
            text: "Preencha todos os campos.",
            icon: "error",
            confirmButtonText: "ok",
            iconColor: color1,
            background: color2,
            grow: "row",
            color: color1,
            heightAuto: false,
        });
        btnContinuar.style.pointerEvents = "initial"
        btnContinuar.innerHTML = `Continuar`
    }

    // Fim da funcao
};
