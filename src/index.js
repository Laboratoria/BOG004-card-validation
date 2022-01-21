import validator from './validator.js';
function comprar() {
  document.getElementById("pag1").style.display = 'none';
  document.getElementById("pag2").style.display = 'block';
}
const comprar1 = document.getElementById("btnimg1");
const comprar2 = document.getElementById("btnimg2");
const comprar3 = document.getElementById("btnimg3");
comprar1.addEventListener("click", () => comprar1())
comprar2.addEventListener("click", () => comprar2())
comprar3.addEventListener("click", () => comprar3())


let btnntc = document.getElementById("btn-ntc");
btnntc.addEventListener('click', () => {
  let numbertc = document.getElementById("cardNumber").value;
  validator.isValid(numbertc)
  validator.maskify(numbertc)

  
  
  return console.log(numbertc);
})

