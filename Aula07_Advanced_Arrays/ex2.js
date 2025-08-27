// 2 - Faça um programa onde você declare um array com 6 precos, depois utilize a função "map" para criar um novo array de precos onde deve ser aplicado um desconto de 20% em todos eles.

const precos = [15.50, 17.85, 9.99, 8.45, 5.50];

const precos_desconto = precos.map((preco) => (preco * 0.8).toFixed(2));

console.log(precos_desconto);
