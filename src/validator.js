const validator = {
  
  isValid: function (cardNumber){
    let array1 = []

      // save to array en Variable Global.
      // el split convierte un string en array y el reverse me los invierte
      array1= cardNumber.split('').map(Number).reverse();

      // console.log(array1)
    
      // forEach para que recorra el arreglo y lo muestre en console
      array1.forEach((element, index)=>{

        if(index % 2 == 1){
          element = element * 2
        }

        if(element >= 10){
          element = element.toString().split('');
          element = parseInt(element[0]) + parseInt(element[1]);
        }
        
        //bajar ellos elementos sumados posicionar numeros
        array1[index] = parseInt(element);
        console.log(array1)

          //Suma del Array 
          let sum = 0;
          array1.forEach((element)=>{
            sum += element
          })
          console.log(sum)
          
          
          //Modulo de la suma
          let result = sum % 10;
          console.log(result);

          if (result === 0){console.log('Tarjeta válida')
          }else{ console.log('Trajeta Inválida')}
        
      });
      
      return(cardNumber)
    },
    
//*****ENMASCARAMIENTO EN LA TARJETA */          
maskify: function (cardNumber){
  let number = []

  for(let i = 0; i< cardNumber.length; i ++){
    if(i < cardNumber.length-4){
      number.push("#");
    }else{
      number.push(cardNumber[i])
      console.log(number.join(""));
    }
  }

return (cardNumber)

}

  // for (let i = 0; i < cardScreen.length - 4 ; i++){
  //   cardScreen = cardNumber.replace(/\w/g,'#'); // \w=  Matches any word character (alphanumeric & underscore)
  // }    
  // return(cardNumber)
  // //console.log(cardNumber);
  // }

  

};
export default validator;