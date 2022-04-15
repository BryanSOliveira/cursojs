// Pode mudar os valores do array mesmo sendo const 
// por referência. Só não pode querer atribuir algo à 
// constante com o sinal de =
const array = ['Luiz', 'Maria', 'João', 1, true, null];

const alunos = ['Luiz', 'Maria', 'João'];

// Alterando valor de um elemento do vetor
alunos[0] = 'Bryan';
alunos[3] = 'Luiza';

// Adicionar no fim do vetor
alunos[alunos.length] = 'Raissa';
alunos.push('Santos');

// Adicionar no início do vetor
alunos.unshift('Luiz');

// Remove do fim
const removido1 = alunos.pop();

// Remove do começo
const removido2 = alunos.shift();

// Deletando um elemento sem alterar o indice de todos os elementos
// A posição do elemento deletado fica com um elemento vázio/undefined
delete alunos[0];

console.log(alunos);
console.log(alunos[0]);
console.log(alunos[2]); // Acessar um indice que não existe, retorna undefined

// Cortando o Array
// O último elemento não é incluído
console.log(alunos.slice(0, 4));
console.log(alunos.slice(0, -2));

// Para o JavaScript é um objeto
console.log(typeof alunos);

// Verificando se é um array
console.log(alunos instanceof Array);