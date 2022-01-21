//import validator from './validator.js';

//console.log(validator);
//Funcion para que se vean las membresias 
let inicioPasteleria = document.getElementById("btn10");
inicioPasteleria.addEventListener("click", inicioUno)


function inicioUno() {
  console.log()
  document.getElementById("inicia").style.display = "none";
  document.getElementById("validación").style.display = "block";
   }

//Funcion para que se vea la validación de la tarjeta
let validacionTarjeta= document.getElementById("btn25");
validacionTarjeta.addEventListener("click", segundaPantalla)

function segundaPantalla(){
  document.getElementById("inicia").style.display = "none";
  document.getElementById("validación").style.display = "block";
} 


   //hasta aqui todo funcionaba bien 

//declarar variable 

 //Funcion para que los datos ingresados se guarden

 function obtenerNumero(){
    const numeros= document.getElementById("numerosIngresados").value;
  
    const numerosSplit= numeros.split("");
    console.log(numerosSplit);
    const revertirNum= numerosSplit.reverse();
  console.log(revertirNum)

  let myArray= numerosSplit.length;
  console.log(myArray)



 for(let i=0;i<numerosSplit.length; i++){
  if(i%2==0) {
    numerosSplit[i]= numerosSplit[i] * 2
    console.log("el Numero",numerosSplit[i] + "en la posición", i + "es par" )
    if(numerosSplit[i] > 9) {
      console.log("el numero es mayor que 9")

    }
  }
}
  }
  
  const botonValidar=document.getElementById("btnValidar");
  botonValidar.addEventListener("click",obtenerNumero);

