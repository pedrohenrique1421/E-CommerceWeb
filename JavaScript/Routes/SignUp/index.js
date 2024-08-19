const GetSignUp = async (obj) => {
    event.preventDefault(); // Evita o recarregamento da página
    console.log("mandado");

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

        console.log("res data: ", response.data);
        console.log("res status: ", response.status);
    } catch (error) {
        console.log(error);
    }
    console.log("- recebido -");
};
