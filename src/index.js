import validator from './validator.js';


const btnValidar = document.getElementById('btn-pago');
function validarTarjeta() {
  const numerosDeLaTar = document.getElementById('numero-tarjeta-input').value;
  const resultado = validator.isValid(numerosDeLaTar)

  if (resultado == true) { alert('La tarjeta' + validator.maskify(numerosDeLaTar) + "es válida") }
  else { alert('La tarjeta' + validator.maskify(numerosDeLaTar) + 'no es válida. Ingrese un número válido') }
}
btnValidar.addEventListener('click', validarTarjeta)


//Ocultar páginas
document.getElementById('tab2').addEventListener('click', hidepagesQuienes)

function hidepagesQuienes() {
  document.getElementsByClassName('tab2')[0].style.display = 'block';
}

document.getElementById('tab3').addEventListener('click', hidepagesTienda)

function hidepagesTienda() {

  document.getElementsByClassName('tab3')[0].style.display = 'block';
}

document.getElementById('tab4').addEventListener('click', hidepagesSucursales)

function hidepagesSucursales() {

  document.getElementsByClassName('tab4')[0].style.display = 'block';
}