// 6 - Dado o array de numeros abaixo, faça um programa onde você deve criar 2 novos arrays:

// a) Crie um array somente com os numeros pares
// b) Crie um array somente com os numeros ìmpares
const numeros = [12, 87, 45, 3, 66, 29, 74, 58, 91, 10, 34, 22, 18, 99, 5, 67, 39, 81, 23, 44];

const numerosPares = numeros.filter((numeros) => (numeros % 2) === 0)
console.log(numerosPares)

const numerosImpares = numeros.filter((numeros) => (numeros % 2) !== 0)
console.log(numerosImpares)