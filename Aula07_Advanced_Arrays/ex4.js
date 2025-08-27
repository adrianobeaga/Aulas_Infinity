// 4 - Faça um programa que tenha um array com 10 numeros (negativos e positivos), utilize o filter para criar um array somente com os numeros positivos.

const numeros = [1, 2, 5, -7, -8, -9];

const numerosFiltrados = numeros.filter((numeros) => numeros >= 0);
console.log(numerosFiltrados)