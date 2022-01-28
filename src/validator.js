const validator = {
  // ...
};

export default validator;

//Acá escribirás las funciones necesarias para que el usuario pueda verificar la tarjeta de crédito
//y ocultar los dígitos de su número de tarjeta. Esta función debe ser pura e independiente del DOM.
//Para esto debes implementar el objeto validator, el cual ya se encuentra exportado en el boilerplate.
//Este objeto (validator) contiene dos métodos (isValid y maskify):
//validator.isValid(creditCardNumber): creditCardNumber es un string con el número de tarjeta que se va a verificar.
//Esta función debe retornar un boolean dependiendo si es válida de acuerdo al algoritmo de Luhn.
//validator.maskify(creditCardNumber): creditCardNumber es un string con el número de tarjeta y esta función
//debe retornar un string donde todos menos los últimos cuatro caracteres sean reemplazados por un numeral (#) o 🐱.
//Esta función deberá siempre mantener los últimos cuatro caracteres intactos, aún cuando el string sea de menor longitud.
//Ejemplo de uso
//maskify('4556364607935616') === '############5616'
//maskify(     '64607935616') ===      '#######5616'
//maskify(               '1') ===                '1'
//maskify(               '')  ===                ''


