// 2 - Crie um algoritmo que lê uma palavra e imprime as letras separadamente e cada letra em caixa alta (maiúscula)

let palavra = 'Izabela'
for (let i = 0; i < palavra.length; i ++ ){
    console.log(palavra[i])
}


for (let letra of palavra){
    console.log(letra)
}