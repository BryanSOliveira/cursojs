const { nome, sobrenome, falaNome } = require('./mod1');
console.log(nome, sobrenome);
console.log(falaNome());

const { Pessoa } = require('./mod1');
const p1 = new Pessoa('Bryan');
console.log(p1);

const path = require('path');
const axios = require('axios');
axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
  .then(response => console.log(response.data))
  .catch(e => console.log(e));