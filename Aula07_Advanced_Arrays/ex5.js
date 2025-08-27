// 5 - Dado o array de preços abaixo, faça um programa que crie um novo array utilizando o filter, onde ele deve trazer somente os preços maiores que 50.
const precos = [12, 45, 76, 34, 65, 87, 88, 12, 344, 200, 445]

const precosUp50 = precos.filter((preco) => preco > 50)
console.log(precosUp50)