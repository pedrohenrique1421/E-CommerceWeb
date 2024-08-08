const color1 = "#f1f1f1";
const color2 = "#242424";

const GetSignIn = async () => {
  event.preventDefault(); // Evita o recarregamento da página
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
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

    console.log("res data: ", response.data);
    console.log("res status: ", response.status);
    btn.innerHTML = `<button class="btn" name="entrar" id="entrar" onclick="GetSignIn()">Entrar</button>`;
    // window.location.href = "/Pages/Home/index.html";
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
