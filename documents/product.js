db.product.insertMany([
    {
        _id: 1,
        Nome: 'Shampoo Pet Clean 5 em 1',
        Valor: 15,
        CodBarras: 3113617,
        Descricao: 'Indicado para a partir de 3 meses de idade',
        Especie: ['cachorro', 'gato']
    },
    {
        _id: 2,
        Nome: 'Ração Úmida Pedigree Sachê Cordeiro',
        Valor: 3,
        CodBarras: 3106425,
        Descricao: 'Para cachorros pequenos',
        Especie: ['cachorro']
    },
    {
        _id: 3,
        Nome: 'Ração Úmida Whiskas Sachê Frango',
        Valor: 3,
        CodBarras: 2032037,
        Descricao: 'Para gatos',
        Especie: ['gato']
    },
    {
        _id: 4,
        Nome: 'Ração Zootekna',
        Valor: 17,
        CodBarras: 3102258,
        Descricao: 'Com probiotico. Fortalece de dentro para fora',
        Especie: ['Jabuti']
    },
    {
        _id: 5,
        Nome: 'Ração Megazoo Super Premium',
        Valor: 225,
        CodBarras: 2545346,
        Descricao: 'Para primatas com tendencias herbivoras',
        Especie: ['primatas']
    }
]);