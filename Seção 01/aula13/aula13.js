let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

// let aux = varB;
// varB = varC;
// varC = varA;
// varA = aux;

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);