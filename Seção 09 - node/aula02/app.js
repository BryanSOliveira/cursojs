const Cachorro = require('./B/C/D/mod');
const dog = new Cachorro('Dog');
dog.latir();
// const multiplicacao = require('./mod');

// console.log(multiplicacao(2, 2));

const Cachorro2 = require('./Z/mod2');
const c1 = new Cachorro2('Dog');
c1.latir();

console.log(__filename);
console.log(__dirname);

const path = require('path');
console.log(path.resolve(__dirname, '.', '.', 'arquivos', 'imagens'));