//Exibir quantas vezes um botão foi clicado

const clique = document.getElementById("clique");
const contador = document.getElementById("contador");
let contagem=0;

clique.addEventListener("click", () =>{
    contagem++
    contador.textContent = (contagem);
})
