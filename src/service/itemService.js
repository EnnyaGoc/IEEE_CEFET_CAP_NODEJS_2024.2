const database = require("../database/index")

async function readItem() {
    const item = await database("lista_de_compras").select("*");

    if(item.length===0){
        throw new Error("Lista vazia!");
    }

    return item
}

async function readItemById(id) {
    const item = await database("lista_de_compras").select("*").where({id:id}).first();

    if(!item){
        throw new Error("Item nao encontrado!");
    }

    return item
}

async function createItem(nome, descricao) {
    const item = {
        nome: nome,
        descricao: descricao
    }

    await database("lista_de_compras").insert(item);

    return "Item inserido na lista com sucesso!"
}

async function updateItem(id, nome, descricao) {
    const busca = await database("lista_de_compras").select("*").where({id:id}).first();

    if(!busca){
        throw new Error("Item nao encontrado!")
    }
    
    const novo_item = {
        nome: nome, 
        descricao: descricao
    }

    await database("lista_de_compras").update(novo_item).where({id:id})

    return "Item atualizado!"

}

async function deleteItem(id) {
    const item = await database("lista_de_compras").select("*").where({id:id}).first();

    if(!item){
        throw new Error("Item nao encontrado!")
    }

    await database("lista_de_compras").delete().where({id:id})
    
    return "Item deletado!"
}


module.exports = {
    readItem,
    readItemById,
    createItem,
    updateItem,
    deleteItem
}