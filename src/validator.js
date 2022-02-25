const validator = {
  
isValid: function (cardNumber){
    let arrayCardNumber = []     
      arrayCardNumber= cardNumber.split('').map(Number).reverse();  // el split convierte un string en array y el reverse me los invierte
      let ifValid;
      // forEach para que recorra el arreglo.
      arrayCardNumber.forEach((element, index)=>{
        if(index % 2 == 1){
          element = element * 2
        }
        if(element >= 10){
          element = element.toString().split('');
          element = parseInt(element[0]) + parseInt(element[1]);
        }      
        arrayCardNumber[index] = parseInt(element); //bajar los elementos sumados posicionar numeros
        });
        
        let sum = 0; //Suma del Array 
        arrayCardNumber.forEach((element)=>{
          sum += element
        })     
        let result = sum % 10; //Modulo de la suma
                
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