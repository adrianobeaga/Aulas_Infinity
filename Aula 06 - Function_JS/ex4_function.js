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
const produtosA= () => {
    for (const item of produtos) {
        if (item.toLocaleLowerCase().includes('a')) {
            console.log(`${item} contem a letra a`)
        }
    }
}
produtosA()

