const validator = {

  isValid: function (cardNumber){

      // save to array
      let array1 = []
      // el split convierte un string en array
      array1= cardNumber.split('').map(Number).reverse();
      // invertir los número ingresados
      //let arrayReverse = array1.reverse();
      // console.log(cardNumber);
      
      // console.log(cardNumber)
      
      // Crear un nuevo array
      
      //
      console.log(array1)

      // for each para que recorra el arreglo
      // array1.forEach(element => console.log(element));
      array1.forEach((element, index)=>{

        if(index % 2 != 1){
          element = element * 2
        }

        if(element >= 10){
          element = element.toString().split('');
          element = parseInt(element[0]) + parseInt(element[1]);
        }
        

        array1[index] = parseInt(element);
          console.log(array1)

        // funtion sumar todo el Array: PENDIENTE DE CORREGIR ESTA FUNCIÓN
        function sumOfAll(suma){
          let total = 0;
          for(let i of suma)
              total += i;
          return total;
        }

      }); 
      
      return(cardNumber)
  }

  
};



export default validator;
