/*
Valores Primitivos (imutáveis) - string, number, boolean, undefined, 
null (bigint, symbol) - Valores copiados
*/

// Não muda, é imutável
let nome = 'Bryan';
nome[0] = 'R';
console.log(nome[0], nome);

let a = 'A';
let b = a; // Cópia quando for primitivo
console.log(a, b);

a = 'Outra coisa';
console.log(a, b);

/* 
Valores por referência (mutável) - array, object, function
Valores apontam para o mesmo endereço de memória
*/

let A = [1, 2, 3];
let B = A; // Aponta para o mesmo local na memória
console.log(A, B);

A.push(4);
console.log(A, B);

A.pop();
console.log(A, B);

let C = [...A]; // Spread, valor puxado, valor independente
console.log(C);

A.pop();
console.log(C);

const pessoa1 = {
    nome: 'Bryan',
    sobrenome: 'Santos'
};

const pessoa2 = {...pessoa1}; // mesma forma para o valor virar independente
pessoa1.nome = 'João';

console.log(pessoa1);
console.log(pessoa2);