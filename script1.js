// Botão que muda o título da página
const titulo = document.getElementById("titulo");
const botao = document.getElementById("botao");

botao.addEventListener("click", () =>{
    titulo.textContent = "Você mudou o título do site!";
})

