"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
// Função para calcular a média das notas
function calcularMedia(notas) {
    var soma = notas.reduce(function (acc, nota) { return acc + nota; }, 0);
    return soma / notas.length;
}
// Cria uma instância da função de prompt-sync
var prompt = promptSync();
// Solicita ao usuário os detalhes do aluno
var nome = prompt('Digite o nome do aluno: ');
var notas = [];
for (var i = 1; i <= 4; i++) {
    var nota = parseFloat(prompt('Digite a nota ${i} (0 a 10): '));
    while (isNaN(nota) || nota < 0 || nota > 10) {
        console.log('Nota inválida. Por favor, digite uma nota entre 0 e 10.');
        nota = parseFloat(prompt('Digite a nota ${i} (0 a 10): '));
    }
    notas.push(nota);
    console.log(notas);
}
// Cria o objeto aluno
var aluno = {
    nome: nome,
    notas: notas,
};
// Calcula a média das notas
var media = calcularMedia(aluno.notas);
// Exibe o objeto aluno e a média final
console.log('Detalhes do Aluno:');
console.log('Nome:', aluno.nome);
console.log('Notas:', aluno.notas);
console.log('Média Final:', media.toFixed(2));
