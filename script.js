document.addEventListener("DOMContentLoaded", function(event) {
    //código a ejecutar cuando existe la certeza 
    //de que el DOM está listo para recibir acciones
});

/*window.addEventListener("scroll", function() {
    let btnTop = document.getElementsByClassName("go-to-top");
    console.log("btnTop classlist: "+btnTop.classList);
    if(document.documentElement.scrollTop >= (window.innerHeight * 0.3)){
        if(!btnTop.classList.contains("active")){
            btnTop.classList.add("active");
        }
    }
    else
    {
        btnTop.classList.remove("active");
    }
});*/

//Clase 8 - Javascript
//alert("Hola este es mi Javascript");



// VARIABLES en Javascript
//Ejercicio 1
let nombre1 = "Juan José";

//Ejercicio 2
console.log("nombre1=" + nombre1);

//CONDICIONALAES en Javascript
let tituloAcerca = document.querySelector("#seccion-about h1").innerText;
console.log("titulo="+tituloAcerca);

let htmlAttr = document.querySelector("html");
if (htmlAttr.hasAttributes()) {
    document.querySelector("#seccion-about h1").innerHTML = "About Me";
    console.log(htmlAttr.attributes[0]);
}

// FUNCIONES
let elemento = "#seccion-about h1";
let nuevoTexto = "Acerca de mí";
setTituloSeccion(elemento, nuevoTexto);

function setTituloSeccion(seccion, texto){
    let elemento = document.querySelector(seccion);
    return elemento.innerText = texto;
}

// MENU
let menu_click = document.querySelector(".checkbtn");
menu_click.onclick = function(){
    document.querySelector(".navbar").classList.toggle("active");
    document.querySelector(".checkbtn").classList.toggle("active");
};

// FORMULARIOS
const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});
