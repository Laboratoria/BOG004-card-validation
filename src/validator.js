//AQUÍ TENEMOS EL OBJETO validator QUE CONTIENE LOS METODOS isValid y Maskify
const validator = {
  isValid: function (creditCardNumber) {
    const numerosSplit = creditCardNumber.split("");
    
    const revertirNum = numerosSplit.reverse();
    
//CICLO FOR PARA IDENTIFICAR LAS POSICIONES PARES
    for (let i = 0; i < revertirNum.length; i++) {
      if (i % 2 !== 0) {
        revertirNum[i] = revertirNum[i] * 2;
        if (revertirNum[i] > 9) {
          revertirNum[i] = revertirNum[i] - 9;
        }
      }
    }
//EN ESTA VARIABLE SUMAMOS LAS POSICIONES PARES E IMPARES
//acumulator es el acumulador y curr es el valor actual que se va a sumar 
    const reducer = revertirNum.reduce(
      (accumulator, curr) => accumulator + +curr,
      0
    );

    let valReducer = reducer;

    if (valReducer % 10 == 0) {
      return true;
    } else {
      return false;
    }
  },
  maskify: function (creditCardNumber) {
    console.log('ver: ', creditCardNumber)
    return creditCardNumber
      .slice(0, -4)
      .replace(/[0-9/a-z]/g, "#")
      .concat(creditCardNumber.slice(-4, creditCardNumber.length));
  },
};

export default validator;
