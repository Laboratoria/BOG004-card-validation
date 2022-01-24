const validator = {
  isValid: (cardNumber) => {
    let numPair = 0;
    let numOdd = 0;
    cardNumber = cardNumber.split("").reverse();
    for (let i = 0; i < cardNumber.length; i++) {
      if (i % 2 === 1) {        //verificamos si la posicion es par 
        if (cardNumber[i] * 2 >= 10) {
          numPair += ((cardNumber[i] * 2) - 9);
        } else {
          numPair += cardNumber[i] * 2;
        }

      } else {
        numOdd += parseInt(cardNumber[i]);
      }

    }
    return (numPair + numOdd) % 10 === 0;

  },


maskify: (cardNumber) => {
  let response=""
    if (cardNumber.length > 4) {
      let result = cardNumber.length - 4;
      console.log("#".repeat(result) + cardNumber.substr(-4));
     response=  "#".repeat(result) + cardNumber.substr(-4);
      
    }
    console.log(response)
    return response ;
  }
  
}
export default validator;


