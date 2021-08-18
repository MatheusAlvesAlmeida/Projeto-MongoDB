db.client.insertMany([
    {
        _id: 1,
        CPF: '12321321321321',
        Nome: 'Matheus',
        Endereco: {
            Descricao: 'Rua da pedreira',
            Cep: '5680000',
            Cidade: 'Tabira'
        },
        Telefones: ['12321321321', '12321321321321'],
    },
    {
        _id: 2,
        CPF: '12321321321321',
        Nome: 'João',
        Endereco: {
            Descricao: 'Rua do perfume fresco',
            Cep: '5680000',
            Cidade: 'Ingazeira'
        },
        Telefones: ['12321321321', '12321321321321'],
    },
    {
        _id: 3,
        CPF: '12321321321321',
        Nome: 'Bruno',
        Endereco: {
            Descricao: 'Avenida Brasil',
            Cep: '5744522',
            Cidade: 'Jaboatão'
        },
        Telefones: ['12321321321', '12321321321321'],
    },
    {
        _id: 4,
        CPF: '12321321321321',
        Nome: 'Toni',
        Endereco: {
            Descricao: 'Travessa Antonio Maciel',
            Cep: '12321321',
            Cidade: 'Recife'
        },
        Telefones: ['12321321321', '12321321321321'],
    },
    {
        _id: 5,
        CPF: '12321321321321',
        Nome: 'Gabriel',
        Endereco: {
            Descricao: 'Rua da lagoinha',
            Cep: '5680000',
            Cidade: 'Afogados da Ingazeira'
        },
        Telefones: ['12321321321', '12321321321321'],
    },
]);