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

const filtrar_e = () => {
    for (const item of produtos) 
        if (item.toLocaleLowerCase().includes('e')) {
            console.log(`${item} contem a letra e`)
        }
}

filtrar_e()

