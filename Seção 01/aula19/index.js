const pessoa1 = {
    nome: 'Bryan',
    sobrenome: 'Santos',
    idade: 19
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);

const pessoa2 = {
    nome: 'Maria',
    sobrenome: 'Oliveira',
    idade: 55,


    falar() {
        // nesse contexto o this significa o próprio objeto
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
        console.log(`A minha idade atual é ${this.idade}`);
    },

    incrementaIdade() {
        // nesse contexto o this significa o próprio objeto
        this.idade++;
    }
};

pessoa2.falar();
pessoa2.incrementaIdade();
pessoa2.falar();

// função chamada de factory = fábrica
// fábrica de objetos
function criaPessoa (nome, sobrenome,idade) {
    return { 
        // Poderia ser tudo em uma linha
        nome, //nome: nome,
        sobrenome, //sobrenome: sobrenome,
        idade //idade: idade
    };
}

const pessoa3 = criaPessoa('Raissa', 'Espindola', 18);
console.log(pessoa3);