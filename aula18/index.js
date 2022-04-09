// Nada dentro da função é executado depois do return
            // Parâmetro
function saudar(nome) {
    return `Bom dia ${nome}!`;
}
                    // Argumento
const variavel = saudar('Bryan');
console.log(variavel);

// sempre que não enviar um parâmetro, 
// x e y vão assumir o valor como 1
function soma(x = 1, y = 1) {
    const resultado = x + y;
    return resultado;
}

console.log(soma(2, 2));

// função anônima
const raiz = function (n) {
    return n ** 0.5;
};

console.log(raiz(9));

// arrow function
// remove a palavra function e acrescenta =>
// vieram pra simplificar
const subtrair = (x, y) => {
    return x - y;
};

// quando tem apenas uma linha, podemos simplificar
const subtrair2 = (x, y) => x - y;

// quando tem apenas um parâmetro pode remover os ()
const raiz2 = n => n ** 0.5;

console.log(subtrair(5, 3));
console.log(subtrair2(5, 3));
console.log(raiz2(9));