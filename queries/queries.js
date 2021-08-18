//Seleciona os animais que tem como donos o cliente 1
db.pet.find({
    client: {$exists: true, $all:[1]}
}).pretty();



