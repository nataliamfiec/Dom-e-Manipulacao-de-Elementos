//ADICIONA ITENS NUMA LISTA EXISTENTE

let input = document.getElementById("item");
let adicionar = document.getElementById("adicionar");
let lista = document.getElementById("lista");



adicionar.addEventListener("click", () => {

    if (input.value.trim() != ""){ //verificar se o input não está vazio (trim elimina espaços)
        const li = document.createElement('li'); //cria um elemento do tipo <li>
        li.textContent = input.value; // atribui o valor digitado no input ao elemento li
        lista.appendChild(li);//adiciona o novo ítem à lista
        input.value = "";//limpa o input
    }
})