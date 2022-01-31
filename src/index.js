import validator from "./validator.js";

//FUNCIÓN PARA QUE SE VEAN LAS OPCIONES DE LAS MEMBRESIAS
let inicioPasteleria = document.getElementById("btn10");
inicioPasteleria.addEventListener("click", inicioUno);
function inicioUno() {
  document.getElementById("inicia").style.display = "none";
  document.getElementById("validación").style.display = "block";
}
//FUNCIÓN PARA QUE SE VEA LA VALIDACIÓN DE TARJETA
let validacionTarjeta = document.getElementById("btn25");
validacionTarjeta.addEventListener("click", segundaPantalla);
function segundaPantalla() {
  document.getElementById("inicia").style.display = "none";
  document.getElementById("validación").style.display = "block";
}

//EVENTOS PARA CAPTURAR LOS DATOS

// CON botonValidar TRAEMOS LOS NÚMEROS QUE ESTAN EN EL BOTÓN
const botonValidar = document.getElementById("btnValidar");
//LLAMAMOS A LAS FUNCIONES QUE VALIDAN LOS DATOS
botonValidar.addEventListener("click", function () {
let numerosTarjeta = document.getElementById("numerosIngresados").value;

  if(numerosTarjeta == '') {
    document.getElementById("resultado").innerHTML =
      "Este campo es Obligatorio";
  } else {
    let validador = validator.isValid(numerosTarjeta);
    if (validador == true) {
      document.getElementById("resultado").innerHTML = "Tarjeta Valida";
    } else {
      document.getElementById("resultado").innerHTML = "Tarjeta No Valida";
    } 
//LLAMADA A LA FUNCION MASKIFY
    document.getElementById("numerosIngresados").value =
      validator.maskify(numerosTarjeta);
  }
});

