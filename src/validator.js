const validator = {

  isValid: function (numerosDeLaTar) {
    numerosDeLaTar = numerosDeLaTar.split('').reverse();
    
    //Proceso del algoritmo de luhn
   console.log(numerosDeLaTar)

    let numPair = 0;
    let numOdd = 0;


    for(let i = 0; i < numerosDeLaTar.length; i++) {
      // verificación de la posición par
      if (i % 2 !== 0) {
        console.log('i es impar ', i);
        if (numerosDeLaTar[i] * 2 >= 10) {
          numPair += ((numerosDeLaTar[i] * 2) - 9);
          console.log('numaPir ', numPair);
        } else {
          numPair += numerosDeLaTar[i] * 2;
          console.log('num pair cuando no es mayor a 10 ', numPair);
        }
      }
      else {
        console.log('es i par ', i);
        numOdd += parseInt(numerosDeLaTar[i]);
        console.log('num odd ', numOdd);
      }
    }
    console.log(numPair, numOdd)

    return (numPair + numOdd) % 10 == 0;
  },

  maskify(numerosDeLaTar) {
    let tc = numerosDeLaTar.split('')
    for (let i = 0; i < tc.length - 4; i++) {
      tc[i] = "#"
    }
    tc = tc.join('')

    return tc
  }
};

export default validator;
