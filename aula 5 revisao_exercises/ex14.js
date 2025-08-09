// 06 - Crie um algoritmo em que o usuário informe três números (n1, n2 e n3). Após, exiba na tela (terminal) a ordem decrescente desses números.

let numero1 = 100
let numero2 = 152
let numero3 = 20

let maior = 0
let medio = 0
let menor = 0

if (numero1 > numero2 && numero1 > numero3) {
    maior = numero1
    if (numero2 > numero3) {
        medio = numero2
        menor = numero3
    }else{
        medio = numero3
        menor = numero2
    }
}else if(numero2 > numero3){
    maior = numero2
    if(numero1 > numero3){
        medio = numero3
        menor = numero1
    }else{
        medio = numero1
        menor = numero3
    }
}else {
    maior = numero3
    if(numero1 > numero2){
        medio = numero1
        menor = numero2
    } else {
        medio = numero2
        menor = numero1
    }
}

console.log('Maior', maior)
console.log('Medio', medio)
console.log('Menor', menor)