import validator from './validator.js';

console.log(validator); 


//paso 1 obtener el boton y guardarlo en una variable
const buttonAdd = document.getElementById("buttonAdd")
//paso 2 escuchar el evento click del  boton
buttonAdd.addEventListener("click",()=> {
    console.log("ingrese un click")
})