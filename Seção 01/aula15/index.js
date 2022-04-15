// Padrão IEEE 754-2008
let numUm = 0.7;
let numDois = 0.1;

// Resultado = 0.7999999999999999
// Imprecisão com números pequenos e decimais
console.log(numUm + numDois);

numUm += numDois; // 0.8
numUm += numDois; // 0.9
numUm += numDois; // 1.0
numUm += numDois; // 1.1
numUm += numDois; // 1.2
numUm += numDois; // 1.3
numUm += numDois; // 1.4
numUm += numDois; // 1.5
numUm += numDois; // 1.6
numUm += numDois; // 1.7
numUm += numDois; // 1.8
numUm += numDois; // 1.9
numUm += numDois; // 2.0

// Para resolver o problema - melhor maneira
numUm = parseFloat(numUm.toFixed(2));

console.log(numUm);
console.log(Number.isInteger(numUm));

// Para resolver sem função
let num1 = 1.5;
let num2 = 2.5;

num1 = ((num1 * 100) + (num2 * 100)) / 100; // 3.0
console.log(num1);
console.log(Number.isInteger(num1));

// temporariamente string para concatenar 
console.log(num1.toString() + num2);

// alterando permanente para string
num1 = num1.toString();
console.log(typeof num1);

// representação binária de um número
let num3 = 1500;
console.log(num3.toString(2));

// arredondamento
let num4 = 10.424364564;
console.log(num4.toFixed(2));

// se o valor vier de alguma base de dados 
// precisar saber se é um inteiro)
console.log(Number.isInteger(num3));

// verificar se não é um número
// verdadeiro sempre que for inválida
let temp = num1 * 'Ola';
console.log(Number.isNaN(temp));