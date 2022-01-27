import validator from './validator.js';

document.getElementById('screen_form').style.display= 'none';

// funtion print user name

// let name = prompt('Hola bienvenida a Pet Shop, nos encantará conocer tú nombre')

// document.getElementById('saludo').innerHTML = `Hola 👋 ${name} Bienvenida a Pet Shop la mejor tienda para tú mascota 🐾`


//Seccion ocultar pantalla
const comprar = document.getElementById('btn_2');//Activo
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

        // Eliminamos espacios en blanco
          .replace(/\s/g, '')
        //   // Eliminar las letras
          .replace(/\D/g, '')
        //   // Ponemos espacio cada cuatro numeros
          .replace(/([0-9]{4})/g, '$1')
        //   // Elimina el ultimo espaciado
          .trim();

// Reflejar de un input a otro la información y Obtener el valor del credit card input 
// con el atributo value
          
          // var numberTcValue = numberTc.value;
          var numberTcValue = document.getElementById('numberTc').value
          // console.log(numberTcValue)
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

          // Eliminar los espacios
          .replace(/\s/g, '')
          // Eliminar las letras
          .replace(/\D/g, '');
        })



// ********************************************************
//Escuchador Ingreso número tarjeta
const inputNumberTc = document.getElementById('numberTc')
inputNumberTc.addEventListener('keyup', (e) => {
  let cardNumber = e.target.value;

  // btn Pagar

  const btnPagar = document.getElementById('pagar');
  btnPagar.addEventListener('click', ()=>{
    console.log(validator.isValid(cardNumber))
    if(validator.isValid(cardNumber)){
      // alert('Pago satisfactorio')
      document.getElementById('mensaje').innerHTML = ` <b style='color:green'>Tarjeta válida! Pago procesado 👌</b><br>`
    }else{
      // alert('Lo siento su tarjeta es inválida')
      document.getElementById('mensaje').innerHTML = ` <b style='color:red'>Lo siento tarjeta Inválida! 🚨</b><br>`
    }
  })

})



console.log(validator);
