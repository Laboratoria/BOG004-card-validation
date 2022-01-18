import validator from './validator.js';

document.getElementById('screen_form').style.display= 'none';

// funtion print user name

let name = prompt('Hola bienvenida a Pet Shop, nos encantará conocer tú nombre')

document.getElementById('saludo').innerHTML = `Hola 👋 ${name} Bienvenida a Pet Shop la mejor tienda para tú mascota 🐾`


//Seccion de captura de datos.
const comprar = document.getElementById('btn_2');//Activo
comprar.addEventListener('click', ()=>{
  document.getElementById('screen_form').style.display= 'flex';
  document.querySelector('.screen_cards').style.display= 'none';
})

//----SECCION DE BOTONES DISABLED -----


const comprarInactivo = document.getElementById('btn_1');
comprarInactivo.addEventListener('click', ()=>{
  alert('Hola 👋 actualmente no tenemos agenda, por favor intenta más tarde 😕')
})
//

// comprarInactivo.addEventListener('click', prodDisabled()=>{
//   prodDisabled(){
//     console.log('Lo siento producto/servicio no disponible');
// )}}





//------SECCION DE PAGO ------
const btnPagar = document.querySelector('.pagar');
btnPagar.addEventListener('click', Message);
function Message(){
    alert('Muchas gracias por su compra con su Tarjeta de Crédito'); //CONCATENAR AL MENSAJE LOS ULTIMOS 4 DIGITOS CIFRADOS DE TDC.
}


// Validación del formulario de ingreso de los datos de la tarjeta de crédito.
// function validateForm(){

//     let numCard = document.forms["myForm"]["numCard"].value;
//     if (isNaN(numCard)||numCard.length<16||!(/^\d{16}$/.test(numCard))) {
//         alert("Número de tarjeta incompleto/invalido, verifica nuevamente");
//         return false;
//         }
//     let Nombre = document.getElementById('nameCard').value;
//     if(Nombre == " " || Nombre.length <= 6){
//         alert("Por favor ingresar nombre y apellido del titular");
//         return false;
    
// }}
function cards(){
    let questions = document.createElement('div');
    questions.innerHTML = `
    <div>
    <div id='questionCosta1' style="display:block"></div>
    <h2>¿Cuál es la Capital del Departamento Atlántico?</h2>
    <button id= "falseCostaAnswer1" class="falseAnswer" type="button"> 1. Soledad.</button>
    <br><br>
    <button id= "trueCostaAnswer1" class="trueAnswer" type="button">2. Barranquilla.</button><br>
   
    <div id='questionCosta2' style="display:block"></div>
    <h2>¿En donde se ubica la Ciudad Amurallada?</h2>
   
    <button id= "falseCostaAnswer2" class="falseAnswer" type="button"> Monteria</button><br><br>
   <button id= "trueCostaAnswer2" class="trueAnswer" type="button">Cartagena</button><br>
  
  </div>`;
  document.body.appendChild(questions);}

//YA LO TRAE EL ARCHIVO.
console.log(validator);
