let num1 = 9.56268;

// Arredondando para baixo
let num2 = Math.floor(num1);

// Arredondando para cima
let num3 = Math.ceil(num1);

// Arredondando para o mais próximo (cima ou baixo)
let num4 = Math.round(num1);

// Retorna o maior número de uma sequência
console.log(Math.max(1,3,10,1400));

// Retorna o menor número de uma sequência
console.log(Math.min(1,3,10,1400));

// Gerando números aleatórios
// Entre 0 e 1, mas o 1 não é incluído
const aleatorio = Math.round(Math.random() * (10 - 5) + 5);
console.log(aleatorio);

// Valor de PI
console.log(Math.PI);

// Elevando número
console.log(Math.pow(2, 10));
console.log(2 ** 10);

// Raiz quadrada através de cálculo
num = 9;
console.log(`1° Método ${num ** (1/2)}`);
console.log(`2° Método ${num ** 0.5}`);

// Dividindo por zero, retorna true
// Retorna tantos 0 que não armazena na memória e retorna Infinity

console.log(100 / 0); 