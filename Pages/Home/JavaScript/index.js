const email = localStorage.getItem("email");
console.log(email);
const senha = localStorage.getItem("senha");
console.log(senha);
const userData = localStorage.getItem("userData");
let responseObject = {};

if (userData) {
  responseObject = JSON.parse(userData);
  console.log(responseObject.data);
} else {
  console.log("problema meu nobre");
  window.location.href = "../../../index.html";
}

// Funcao para que todo o elemento que tiver "data-nomeDoValor" como classe, receberá um texto com o valor do usuario/fornecedor
let elementsForNome = document.getElementsByClassName("data-nome")
Object.entries(elementsForNome).forEach((e)=>{
  e[1].innerHTML = String(responseObject.data.nome)
})

let elementsForBairro = document.getElementsByClassName("data-bairro")
Object.entries(elementsForBairro).forEach((e)=>{
  e[1].innerHTML = String(responseObject.data.bairro)
})

let elementsForCidade = document.getElementsByClassName("data-cidade")
Object.entries(elementsForCidade).forEach((e)=>{
  e[1].innerHTML = String(responseObject.data.cidade)
})

let elementsForCNPJ = document.getElementsByClassName("data-cnpj")
Object.entries(elementsForCNPJ).forEach((e)=>{
  e[1].innerHTML = String(responseObject.data.cnpj)
})

let elementsForEstado = document.getElementsByClassName("data-estado")
Object.entries(elementsForEstado).forEach((e)=>{
  e[1].innerHTML = String(responseObject.data.estado)
})

let elementsForNumero = document.getElementsByClassName("data-numero")
Object.entries(elementsForNumero).forEach((e)=>{
  e[1].innerHTML = String(responseObject.data.numero)
})

let elementsForTelefone = document.getElementsByClassName("data-telefone")
Object.entries(elementsForTelefone).forEach((e)=>{
  e[1].innerHTML = String(responseObject.data.telefone)
})