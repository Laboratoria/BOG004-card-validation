const validator = {
  
  isValid: function (cardNumber){
    let array1 = []

      // save to array en Variable Global.
      // el split convierte un string en array y el reverse me los invierte
      array1= cardNumber.split('').map(Number).reverse();

      let ifValid 
      // forEach para que recorra el arreglo y lo muestre en console
      array1.forEach((element, index)=>{

        if(index % 2 == 1){
          element = element * 2
        }

        if(element >= 10){
          element = element.toString().split('');
          element = parseInt(element[0]) + parseInt(element[1]);
        }
        
        //bajar los elementos sumados posicionar numeros
        array1[index] = parseInt(element);
        console.log(array1)

        });

        //Suma del Array 
        let sum = 0;
        array1.forEach((element)=>{
          sum += element
        })
        console.log(sum)
        
        //Modulo de la suma
        let result = sum % 10;
        console.log(result);
        
      // Validar tarjeta
        if (result === 0){
          ifValid =  true   
        }else{ 
          ifValid = false        
        }
        return ifValid;
      
    },
    
//*****ENMASCARAMIENTO EN LA TARJETA */          
maskify: function (cardNumber){

    let longitud = cardNumber.length
    let lastDig=cardNumber.slice(-4)
    let masked = lastDig.padStart(longitud,"#");
    return masked;
  }

};
export default validator;