use db;

//Seleciona os animais do cliente de id 2
db.pet.find({ client: {$exists: true, $all: [2]} }).pretty();

// Seleciona os animais que não receberam nenhuma dose de vacina
db.pet.find({ Vacinas: { $size: 0 } }).pretty();

// Listar nome e valor dos produtos que começam com nome "ração" (case-insensitive) ordenados por preço ascendente
db.product.aggregate([ { $match: { Nome: /^ração/i } }, { $sort: { "Valor": 1} }, { $project: { _id: 0, Nome: 1, Valor: 1 } } ])

//Seleciona as consultas cujo valor é superior ou igual a 100 reais
db.consultas.find({"valor":{$gte:100}}).pretty()

// Listar Nome, Total de consultas, valor total e médio das consultas dos veterinários da clínica
db.consultas.aggregate([
    {
        $lookup: {
            from: 'vet',
            localField: 'veterinario',
            foreignField: '_id',
            as: 'veterinario_info'
        }
    },
    {
        $unwind : "$veterinario_info"
    },
    {
        $group: {
            _id: '$veterinario_info.Nome',
            total_consultas: { $count: {} },
            valor_total: { $sum: '$valor' },
            valor_medio: { $avg: '$valor' }
        }
    },
    {
        $project: {  
            _id: 0,
            nome: "$_id",
            total_consultas: 1,
            valor_total: 1,
            valor_medio: 1
     }
  }
]).pretty()

//Listar a quantidade de cachorros cadastrados no sistema
db.pet.aggregate([
    {
        $match: {
            Especie: "cachorro"
        }
    },
    { 
        $group: {
            _id: null,
            count: { 
                $count: {}
            }
        }
    },
    {
        $project: {
            _id: 0
        }
    }
])

// Listar CPF e nome do cliente de CPF "90129933007"
db.client.findOne({ CPF: '90129933007' }, { _id: 0, Nome: 1, CPF: 1 })