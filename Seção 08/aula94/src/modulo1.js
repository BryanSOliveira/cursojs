export const nome = 'Bryan';
export const sobrenome = 'Santos';
export const idade = 20;

export function soma(x, y) {
  return x + y;
}

export default class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}