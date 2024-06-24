numeros = [2, 5, 6, 22, 30, 2, 7, 8, 3, 42];
soma = 0;

for (let i = 0; i < numeros.length; i++) {
    soma = soma + numeros[i];
}

console.log('A média dos números é ', (soma / numeros.length), '!');