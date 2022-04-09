const nome = 'Bryan'; // string 
const nome1 = "Bryan"; // string
const nome2 = `Bryan`; //string

const num1 = 10; // number
const num2 = 10.52; // number

let nomeAluno; // undefined -> não aponta pra local nenhum na memória

const sobrenomeAluno = null; // Nulo -> não aponta pra local nenhum na memória

const aprovado = true; // Boolean = true, false (lógico)

let a = 2;
const b = a;
console.log(a, b); // 2, 2

a = 3;
console.log(a, b); // 3, 2

// Isso não aconteceria se o valor da variável não fosse um tipo primitivo