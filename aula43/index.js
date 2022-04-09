const fizzBuzz = (numero) => {
    if(typeof numero !== 'number') return numero;
    out = '';
    if(numero % 3 === 0) out+= 'Fizz';
    if(numero % 5 === 0) out+= 'Buzz';
    return out || numero;
}

for(let i = 0; i <= 100; i++) {
    console.log(fizzBuzz(i));
}