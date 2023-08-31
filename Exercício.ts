import * as promptSync from 'prompt-sync';

// Define a interface para os detalhes do objeto aluno
interface Aluno {
  nome: string;
  notas: number[];
}

// Função para calcular a média das notas
function calcularMedia(notas: number[]): number {
  const soma = notas.reduce((acc, nota) => acc + nota, 0);


  return soma / notas.length;
}

// Cria uma instância da função de prompt-sync
const prompt = promptSync();

// Solicita ao usuário os detalhes do aluno
const nome = prompt('Digite o nome do aluno: ');

const notas: number[] = [];
for (let i = 1; i <= 4; i++) {
  let nota = parseFloat(prompt('Digite a nota ${i} (0 a 10): '));
  while (isNaN(nota) || nota < 0 || nota > 10) {
    console.log('Nota inválida. Por favor, digite uma nota entre 0 e 10.');
    nota = parseFloat(prompt('Digite a nota ${i} (0 a 10): '));
    
  }
  notas.push(nota);
  console.log(notas);
 

}

// Cria o objeto aluno
const aluno: Aluno = {
  nome,
  notas,
};



// Calcula a média das notas
const media = calcularMedia(aluno.notas);

// Exibe o objeto aluno e a média final
console.log('Detalhes do Aluno:');
console.log('Nome:', aluno.nome);
console.log('Notas:', aluno.notas);
console.log('Média Final:', media.toFixed(2));