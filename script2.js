//Botões que alteram a cor do background
const vermelho = document.getElementById("vermelho");
const azul = document.getElementById("azul");
const verde = document.getElementById("verde");

vermelho.addEventListener("click", () =>{
    document.body.style.backgroundColor = "#8B0000";
})
azul.addEventListener("click", () =>{
    document.body.style.backgroundColor = "#00008B";
})
verde.addEventListener("click", () =>{
    document.body.style.backgroundColor = "#006400";
})







