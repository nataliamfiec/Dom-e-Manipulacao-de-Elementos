//CRIAR UM BOTÃO QUE MOSTRA/ESCONDE UMA IMAGEM
//Use style.display (alternar entre "none" e "block").

const botaoFoto = document.getElementById("botaoFoto");
const foto = document.getElementById("foto");

foto.style.display = "none";


botaoFoto.addEventListener("click", () => {
    foto.style.display = "block";
    document.body.style.backgroundColor = "#000000";
    document.body.style.color = "#FFFFFF";
})