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
          .replace(/([0-9]{4})/g, '$1 ')
        //   // Elimina el ultimo espaciado
          .trim();
        })

// Input select mes

        form.monthExpire.addEventListener('keyup',(e)=>{

          monthExpire.textContent = e.target.value;
        })


// Input select año

        form.yearExpire.addEventListener('keyup',(e)=>{

        yearExpire.textContent = e.target.value.slice(2);
})






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
        
        



// const btnPagar = document.querySelector('.pagar');
// btnPagar.addEventListener('click', Message);
// function Message(){
//     alert('Muchas gracias por su compra con su Tarjeta de Crédito'); //CONCATENAR AL MENSAJE LOS ULTIMOS 4 DIGITOS CIFRADOS DE TDC.
// }





//YA LO TRAE EL ARCHIVO.
console.log(validator);
