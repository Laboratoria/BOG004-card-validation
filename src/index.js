import validator from './validator.js';

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
}
// let sumaTotal = []
// let sumaDefinitiva = sumaTotal.push(revertirNum);
// console.log(sumaTotal)

// //const sumaFinal = sumaDefinitiva;
// const reducer = revertirNum.reduce( (accumulator, curr) => accumulator + +curr, 0);//no sabemos cómo hacer que sume, con - da el resultado en negativo.
// console.log(reducer);
// console.log(reducer % 10);
);
 valReducer= reducer;

//nos arroja alert si es válida o inválida, pero no nos imprime en la consola si es boolean o number.

if(valReducer % 10 == 0) {
  alert("Tarjeta válida")}
else {
  alert("Tarjeta inválida")
//console.log(valReducer);
}

//Función para maskify
/*function cardHide(numeros) {
  let numerosOriginales = numeros.split("");
  console.log(numerosOriginales);
  let hideNum = [];
	for(let i = 0; i < numeros.length; i++){
    if(i < numeros.length-4){
      hideNum.push("*");
    }else{
      hideNum.push(hideNum[i]);
    }
  }
  let numeroOculto = hideNum.join("");
  console.log(numeroOculto);
  return numeroOculto;
}*/
const maskify = (numeros) => {
  return numeros.slice(0, -4).replace(/[0-9]/g, '#').concat(numeros.slice(-4, numeros.len));
}
console.log(maskify(numeros)) //desired output should be: ##### #orld

 


  const botonValidar=document.getElementById("btnValidar");
  botonValidar.addEventListener("click",obtenerNumero);

const maskifyFinal=document.getElementById("numerosIngresados");
  maskifyFinal.addEventListener("write",obtenerNumero);
