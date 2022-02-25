import validator from './validator.js';

document.getElementById('screen_form').style.display= 'none';

//Seccion ocultar pantalla
const comprar = document.getElementById('btn_2');
  comprar.addEventListener('click', ()=>{
  document.getElementById('screen_form').style.display= 'flex';
  document.querySelector('.screen_cards').style.display= 'none';
})

//----SECTION BUTTON DISABLED -----

const comprarInactivo = document.getElementById('btn_1');
comprarInactivo.addEventListener('click', ()=>{
  alert('Hola 👋 actualmente no tenemos agenda, por favor intenta más tarde 😕')
});


//------SECCION DE PAGO ------

// * Input numero de tarjeta
        const form = document.querySelector('#formulario')
        form.numberTc.addEventListener('keyup', (e)=>{
          let input = e.target.value;
          form.numberTc.value = input

          .replace(/\s/g, '')  // Eliminamos espacios en blanco
          .replace(/\D/g, '')  //  Eliminar las letras
          .replace(/([0-9]{4})/g, '$1')   // Ponemos espacio cada cuatro numeros
          .trim();      // Elimina el ultimo espaciado

         
      /* MASKIFY*/
          var numberTcValue = document.getElementById('numberTc').value;
          const numberCard = document.getElementById('numberCard');
          const numerMask = validator.maskify(numberTcValue);
          numberCard.value = numerMask
          numberCard.placeholder = numerMask

      })

// * Input nombre

        form.accountCard.addEventListener('keyup',(e)=>{
          let input = e.target.value;
          form.accountCard.value = input.replace(/[0-9]/g, '');
          document.getElementById('nameCard').value = input
        })

// * Input CVV
        form.CVV.addEventListener('keyup',(e)=>{

          let input = e.target.value;
          form.CVV.value = input
          .replace(/\s/g, '')// Eliminar los espacios
          .replace(/\D/g, '');// Eliminar las letras
        })

// *************************isValid*******************************

const inputNumberTc = document.getElementById('numberTc')         //Escuchador Ingreso número tarjeta
inputNumberTc.addEventListener('keyup', (e) => {
  let cardNumber = e.target.value;

  const btnPagar = document.getElementById('pagar');
  btnPagar.addEventListener('click', ()=>{
    
    if(validator.isValid(cardNumber)){
      document.getElementById('mensaje').innerHTML = ` <b style='color:green'>Tarjeta válida! Pago procesado 👌</b><br>`
    }else{
      document.getElementById('mensaje').innerHTML = ` <b style='color:red'>Lo siento tarjeta Inválida! 🚨</b><br>`
    }
  })

})




