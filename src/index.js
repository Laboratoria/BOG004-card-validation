import validator from './validator.js';

function cards(){
    let questions = document.createElement('div');
    questions.innerHTML = `
    <div>
    <div id='questionCosta1' style="display:block"></div>
    <h2>¿Cuál es la Capital del Departamento Atlántico?</h2>
    <button id= "falseCostaAnswer1" class="falseAnswer" type="button"> 1. Soledad.</button>
    <br><br>
    <button id= "trueCostaAnswer1" class="trueAnswer" type="button">2. Barranquilla.</button><br>
   
    <div id='questionCosta2' style="display:block"></div>
    <h2>¿En donde se ubica la Ciudad Amurallada?</h2>
   
    <button id= "falseCostaAnswer2" class="falseAnswer" type="button"> Monteria</button><br><br>
   <button id= "trueCostaAnswer2" class="trueAnswer" type="button">Cartagena</button><br>
  
  </div>`;
  document.body.appendChild(questions);}


console.log(validator);
