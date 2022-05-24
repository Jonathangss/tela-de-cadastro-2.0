var buttonAcessar = document.querySelector("#acessar");
var buttonCadastro = document.querySelector("#cadastro");
var body = document.querySelector("body");

buttonAcessar.addEventListener("click", function () {
    body.className = "acesso-js";
});

buttonCadastro.addEventListener("click", function () {
    body.className = "cadastro-js";
});