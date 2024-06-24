const numeros = [2, 5, 6, 22, 30, 2, 7, 8, 3, 42];
const moda = [];
let input;
let moda1;

console.log("Qual cálculo deseja realizar?");
console.log(
  'Tecle "1" para a média\nTecle "2" para a mediana\nTecle "3" para a moda'
);
process.stdin.on("data", function (data) {
  input = data.toString().trim();
  switch (input) {
    case "1":
      break;
    case "2":
      break;
    case "3":
      for (let i = 0; i < numeros.length; i++) {
        for (let j = i + 1; j < numeros.length; j++) {
          if (numeros[i] > numeros[j]) {
            let aux = numeros[i];
            numeros[i] = numeros[j];
            numeros[j] = aux;
          }
          if (numeros[i] === numeros[j]) {
            moda.push(numeros[i]);
            console.log("A moda é: " + moda);
          }
        }
      }
      console.log(numeros);
      break;
  }
});
