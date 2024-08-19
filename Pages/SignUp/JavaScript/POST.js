const PostFornecedor = async () => {
    const color1 = "#f1f1f1";
    const color2 = "#242424";

    const obj = {};
    const getValues = document.getElementsByClassName("abc");
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
        await GetSignUp(obj);
        // AnimationOutBack((window.location.href = "/Pages/Home/index.html"));
        console.log("aprovado");
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
    }

    // Fim da funcao
};
