import validator from './validator.js';

function comprar() {
  document.getElementById("pag1").style.display = 'none';
  document.getElementById("pag2").style.display = 'block';
}

const comprar1 = document.getElementById("btnimg1");
const comprar2 = document.getElementById("btnimg2");
const comprar3 = document.getElementById("btnimg3");
comprar1.addEventListener("click", () => comprar())
comprar2.addEventListener("click", () => comprar())
comprar3.addEventListener("click", () => comprar())


const form = document.querySelector('form');     //impedir que el usuario envie los datos vacios.
const name = document.getElementById('name');
const cardNumber = document.getElementById('cardNumber');
form.addEventListener('submit', e => {
  if (name.value === '' || cardNumber.value === '') {
    alert('Por favor ingresa tu nombre y tu número de Tarjeta de Crédito');
    e.preventDefault();
  }
 
})

let btnntc = document.getElementById("btn-ntc");   //Mostrar mensaje de tarjeta valida o invalida
//let numbertc = document.getElementById("cardNumber");
btnntc.addEventListener('click', () => {
  if (validator.isValid(cardNumber.value)) {
    alert("tu tarjeta terminada en " + validator.maskify(cardNumber.value) + " es Valida");
  } else {
    alert("tu tarjeta terminada en " + validator.maskify(cardNumber.value) + " es Invalida")
  }


  console.log(validator.isValid(cardNumber.value));
  
  return;
})

