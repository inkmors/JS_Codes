let name=prompt("Informe seu nome por favor: ")

let altura=prompt("Informe sua altura(metros) por favor: ")

let peso=prompt("Informe seu peso por favor: ")

altura_metros = altura/100

imc = peso/(altura_metros*altura_metros)

let imc_M = imc.toFixed(2);

let altura_M = altura_metros.toFixed(2);

switch(true){
    case imc < 16:
        result = "Baixo peso muito grave";
        break;

    case imc >= 16 && imc <= 16.99:
        result = "Baixo peso grave";
        break;

    case imc >= 16 && imc <= 16.99:
        result = "Baixo peso";
        break;
        
    case imc >= 18.5 && imc <= 24.99:
        result = "Peso normal";
        break;
        
    case imc >= 25 && imc <= 29.99:
        result = "Sobrepeso";
        break;
        
    case imc >= 30 && imc <= 34.99:
        result = "Obesidade grau I";
        break;  

    case imc >= 35 && imc <= 39.99:
        result = "Obesidade grau II";
        break;

    case imc >= 40:
        result = "Maior ou igual a 40: Obesidade grau III";
        break;

    default:
        result = "Invalido";         
}
console.log(name, imc_M, result)
