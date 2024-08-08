const GetSignUp = async () => {
  event.preventDefault(); // Evita o recarregamento da página
  console.log("mandado");

  try {
    const response = await axios.post(
      `https://e-commerce-theta-drab.vercel.app/fornecedor/sign`, // URL da API
      {
        nome: "Pedro Store 2",
        telefone: "81984254586",
        estado: "PE",
        cidade: "Recife",
        bairro: "Iputinga",
        numero: 34,
        cnpj: "17.111.600/0001-90",
      },
      {
        params: {
          email: "Phenriquelins1@gmail.com",
          senha: "lino200615ph",
        },
      }
    );

    console.log("res data: ", response.data);
    console.log("res status: ", response.status);
  } catch (error) {
    console.log(error);
  }
  console.log("- recebido -");
};
