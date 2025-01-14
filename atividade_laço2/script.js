let num = parseInt(prompt('Digite um número inteiro positivo:'));
let result = 1;

if (num < 0 || isNaN(num)) {
    console.log("[ERRO]: Por favor, insira um número inteiro positivo válido.");
} else if (num === 0 || num === 1) {
    console.log("[ERRO]: Erro ao calcular o fatorial, insira um número maior que 1");
} else {
    for (let i = num; i >= 1; i--) {
        result *= i;
    }
}

console.log(`O fatorial de ${num} é ${result}\nSua sequência de Fibonacci:`);

let termo1 = 0
let termo2 = 1
let prox

for (let i = 1; i <= num; i++) {
    console.log(termo1);
    prox = termo1 + termo2;
    termo1 = termo2;
    termo2 = prox;
}


