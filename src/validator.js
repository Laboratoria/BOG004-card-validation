const validator = {

  isValid: function (numerosDeLaTar) {
    numerosDeLaTar = numerosDeLaTar.split('').reverse();

    //Proceso del algoritmo de luhn
    let numPair = 0;
    let numOdd = 0;

    for (let i = 0; i < numerosDeLaTar.length; i++) {
      // verificación de la posición par
      if (i % 2 !== 0) {

        if (numerosDeLaTar[i] * 2 >= 10) {
          numPair += ((numerosDeLaTar[i] * 2) - 9);
        } else {
          numPair += numerosDeLaTar[i] * 2;
        }
      }
      else {
        numOdd += parseInt(numerosDeLaTar[i]);

      }
    }

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
