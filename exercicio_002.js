let total = parseInt(prompt("Olá Professor, por favor insira a quantidade de alunos da turma:"));

let soma = 0
let maiorN = -1
let menorN = 10

let aluno = 1
while(aluno <= total){
    let nota = parseFloat(prompt("Agora por favor, insira as notas do aluno" + aluno + ":"));

    soma += nota;

    if (nota > maiorN){
        maiorN = nota;
    }
    if (nota < menorN){
        menorN = nota;
    }
    aluno++;
}

let media = soma / total;

console.log("Media:", media.toFixed(2), "Maior nota:", maiorN.toFixed(2), "Menor nota:", menorN.toFixed(2));

