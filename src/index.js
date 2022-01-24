import validator from './validator.js';

document.getElementById('screen_form').style.display= 'none';

// funtion print user name

let name = prompt('Hola bienvenida a Pet Shop, nos encantará conocer tú nombre')

document.getElementById('saludo').innerHTML = `Hola 👋 ${name} Bienvenida a Pet Shop la mejor tienda para tú mascota 🐾`


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

          

          const numberCard = document.getElementById('numberCard');

          numberCard.value = input



          // //   numberCard.textContent = validator.maskify(input);
          // // }

      //document.getElementById('numberCard').value = input
      
          // const inputCc = document.getElementById('numberCard')
          // inputCc.addEventListener('keyup', (e) => {
          // let numberCard = e.target.value;

          
        })







//**SOLUCION POR FANNY**


// Guardar (captuar de datos).numbCard del input.
// Boton addEventListener('EDOM', validator.isValid(cardNumber))



// Input select mes


        // form.monthExpire.addEventListener('keyup',(e)=>{

        //   monthExpire.textContent = e.target.value;
        // })


// Input select año

//         form.yearExpire.addEventListener('keyup',(e)=>{

//         yearExpire.textContent = e.target.value.slice(2);
// })






          // ******* to do ***** SECCION DEL LOGO
        // numberTC.textContent = input;

        // if(input == ''){
        //   numberTC.textContent = '#### #### #### ####';
      
        //   logoMarca.innerHTML = '';
        // }
        // if(input[0] == 4){
        //   logoMark.innerHTML = '';
        //   const imagen = document.createElement('img');
        //   imagen.src = 'visa.png';
        //   logoMark.appendChild(imagen);
        // } else if(input[0] == 5){
        //   logoMark.innerHTML = '';
        //   const imagen = document.createElement('img');
        //   imagen.src = 'mastercard.png';
        //   logoMarca.appendChild(imagen);
        // }



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
//OPTION2
const inputNumberTc = document.getElementById('numberTc')
inputNumberTc.addEventListener('keyup', (e) => {
  let cardNumber = e.target.value;
  // isvalid
  const isValid = validator.isValid(cardNumber);

  const btnPagar = document.getElementById('pagar');
  btnPagar.addEventListener('click' , ()=>{
    if(isValid == cardNumber){
      console.log('Gracias por su compra')
    }
  })

  
// maskify
  const maskify = validator.maskify(cardNumber)
  document.getElementById('numberCard').innerHTML = maskify

  
})

//*******SECCION ENMASCARAMIENTO*********/
// numberCard.textContent = validator.maskify(cardNumber);

// document.getElementById('numberCard').value = form

// const cardNumber = document.getElementById('numberTc');

// document.getElementById('numberCard').textContent = validator.maskify(cardNumber.value)

// numberCard.addEventListener('keyup', (e)=>{
// let numberMaskify = e.numberCard.value;
// numberMaskify = value.replace(/\D/g, '')



// })








// // Guardar (captuar de datos).numbCard del input
// let cardNumber = document.getElementById('numberTc').value;

// let btn = document.getElementById('pagar')
//     btn.addEventListener('click', validator.isValid(cardNumber))
// let cardNumber = form.numberTc.value;
// let btn = document.getElementById('pagar')
// document.addEventListener('click', validator.isValid(cardNumber));


// let cardNumber = form.numberTc.value;
// cardNumber.addEventListener('click', validator.isValid(cardNumber));
// console.log(cardNumber)



//*************************************
//






// function Message(){
//     alert('Muchas gracias por su compra con su Tarjeta de Crédito'); //CONCATENAR AL MENSAJE LOS ULTIMOS 4 DIGITOS CIFRADOS DE TDC.
// }






console.log(validator);
