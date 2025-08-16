const produtos = [
    'Café',
    'Arroz',
    'Feijão',
    'Azeite de oliva',
    'Pão',
    'Leite',
    'Queijo',
    'Manteiga',
    'Chocolate'
];

// for (let i = 0; i < produtos.length; i++) {
//     if (produtos[i].startsWith('A'))
//         produtosA.push(produtos[i]);
// }
// console.log(produtosA)

const produtosA= () => {
    for (const item of produtos) 
        if (item.toLocaleLowerCase().includes('a')) {
            console.log(`${item} contem a letra a`)
        }
}
produtosA()

// const filtrar_e = () => {
//     for (const item of produtos) 
//         if (item.toLocaleLowerCase().includes('e')) {
//             console.log(`${item} contem a letra e`)
//         }
// }