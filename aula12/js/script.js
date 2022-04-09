// objeto.método(função)

window.alert('Com a nossa mensagem.');

window.confirm('Deseja realmente apagar?'); // return true or false
const confirma = confirm('Realmente deseja apagar?');
if (confirma) {
    console.log('Confirmado');
}

window.prompt('Digite o seu nome:');
let num1 = Number(prompt('Digite um número'));
console.log(num1);

// document.write('Um texto');