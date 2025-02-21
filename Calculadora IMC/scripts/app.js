let input_height = document.getElementById('inpt-height')
let input_weight = document.getElementById('inpt-weight')
let span_imc = document.getElementById('span-imc')
let span_category = document.getElementById('span-category')
let span_error = document.getElementById('span-error')
const btnCalculator = document.getElementById('btn-calculator')
const btnReset = document.getElementById('btn-reset')

btnCalculator.addEventListener('click', calculator)
btnReset.addEventListener('click', resetPage)

const error = () =>{
  if(input_height.value <= 0 || 0 < input_weight.value <= 0){
    span_error.style.display = "block";
    span_error.textContent = "*Preencha todos os campos*";
  } 
}

const removeError = () => {
  span_error.style.display = "none";
}

function calculator(){

  let height = input_height.value / 100;

  let imc = input_weight.value / height ** 2;
  
  if(input_height.value <= 0 || input_weight.value <= 0){
    error()
  }else{
    removeError()
    if (imc <= 18.5) {
        span_imc.textContent = `${imc.toFixed(2)}`;
        span_category.textContent = "Abaixo do Peso";
    
      } else if (imc >= 18.6 && imc <= 24.9) {
        span_imc.textContent = `${imc.toFixed(2)}`;
        span_category.textContent = "Normal";
    
      } else if (imc >= 25 && imc <= 29.9) {
        span_imc.textContent = `${imc.toFixed(2)}`;
        span_category.textContent = "Sobrepeso";
    
      } else if (imc >= 30 && imc <= 34.9) {
        span_imc.textContent = `${imc.toFixed(2)}`;
        span_category.textContent = "Obesidade grau I";
        //span_category.style.fontSize = '13px'
    
      } else if (imc >= 35 && imc <= 39.9) {
        span_imc.textContent = `${imc.toFixed(2)}`;
        span_category.textContent = "Obesidade grau II";
        //span_category.style.fontSize = '13px'
      } else if (imc >= 40) {
        span_imc.textContent = `${imc.toFixed(2)}`;
        span_category.textContent = "Obesidade grau III";
        span_category.style.fontSize = '13px'
      } else {
        span_imc.textContent = `${imc.toFixed(2)}`;
        span_category.textContent = "Erro";
      }
  }
}



function resetPage(){
    window.location.href = './index.html'
}
