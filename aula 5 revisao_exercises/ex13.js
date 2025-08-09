// 03 - Crie um algoritmo em que o usuário informe três números (n1, n2 e n3). Após, exiba na tela (terminal) qual deles é o maior

n1 = 231
n2 = 121
n3 = 221

if (n1 > n2 && n1 > n3) {
    console.log(`O número ${n1} é maior que ${n2} e que ${n3}`)
} else if (n2 > n1 && n2 > n3){
    console.log(`O número ${n2} é maior que ${n3} e que ${n1}`)
} else {
    console.log(`O número ${n3} é maior que ${n2} e que ${n1}`)
}
