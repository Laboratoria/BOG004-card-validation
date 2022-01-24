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
  console.log(revertirNum);

  let myArray= revertirNum.length;
  console.log(myArray)

//crear un array que sea vacío

//For para identificar las posiciones pares 
 for(let i=0;i<revertirNum.length; i++){
  if(i%2==0) {
    revertirNum[i]= revertirNum[i] * 2
    console.log("el Numero",revertirNum[i] + "en la posición", i + "es par" )
    if(revertirNum[i] > 9) {
      console.log(revertirNum[i])
      revertirNum[i]= revertirNum[i] - 9
      console.log(revertirNum[i])
      
    }
  }
}
let sumaTotal = []
let sumaDefinitiva = sumaTotal.push(revertirNum);
console.log(sumaTotal)

const sumaFinal = sumaDefinitiva;
const reducer = sumaDefinitiva ((accumulator, curr) => accumulator + curr);
console.log(reducer);
  }
  









  const botonValidar=document.getElementById("btnValidar");
  botonValidar.addEventListener("click",obtenerNumero);
 
