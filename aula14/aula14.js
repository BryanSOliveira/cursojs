// jeito de conseguir usar aspas dentro de aspas. não usual
let umaString = "Um \"texto\""; 

console.log(umaString);

// para conseguir usar uma barra invertida 
umaString = "Um \\texto";

console.log(umaString);

umaString = "Um texto";

// pegando carácter da string
// se sair do range, o retorno é undefined
console.log(umaString[4]); 

// se sair do range, o retorno é vázio
console.log(umaString.charAt(6)); 

// concat - faz a mesma coisa que concatenar normalmente
console.log(umaString.concat(' em um lindo dia'));

// em qual indice começa a palavra texto
// se retornar -1, não encontrou
console.log (umaString.indexOf('texto')); 

// se tem a letra 'o', depois do indice 3
console.log (umaString.indexOf('o', 3));

// começa do final pro início da string
// posição não é alterada
console.log (umaString.lastIndexOf('m', 3));

// Expressão Regular
console.log(umaString.match(/[a-z]/g));

// retorna a posição caso encontre
console.log(umaString.search(/x/)); 

// substitui uma palavra por outra
console.log(umaString.replace('Um', 'Outra'));

// com expressão regular
console.log(umaString.replace(/Um/, 'Outra')); 

let outraString = "O rato roeu a roupa do rei de roma.";

// pegar todas as palavras da string separadas por espaço e
// agrupar em um array
// pode limitar quantas vezes/tamanho do array
console.log(outraString.split(' ', 2));

// cortando a string, o segundo valor precisa ser um a mais
// pode usar números negativos. posição = length - num
console.log(outraString.slice(2, 6)); 

// faz a mesma coisa que o slice
// mais trabalhoso
console.log(outraString.substring(outraString.length -5, outraString.length -1));

// substitui o primeiro r por #
console.log(outraString.replace(/r/, '#')); 

// substitui todos os r
console.log(outraString.replace(/r/g, '#')); 

// obtém o tamanho da string
console.log(outraString.length);

// colocando tudo em maíusculo
console.log(outraString.toUpperCase());
console.log(outraString.toLocaleLowerCase());