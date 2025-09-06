function calcularImc(peso, altura){
    const imc = peso/ (altura * altura)
    return imc
}

const variavel = calcularImc(75, 1.71)
console.log(variavel.toFixed(2))

console.log(calcularImc(85, 1.67).toFixed(2))