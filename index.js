// esto es java, los usamos para progrmar la pagina web

let boton = document.getElementById("boton");
let parrafo = document.getElementById('parrafo');

// agregando evento al boton
boton.addEventListener("click", function() {

let texto = document.getElementById("texto-a-copiar").value;
// copiando el texto al parrafo

    parrafo.innerText = texto;
})