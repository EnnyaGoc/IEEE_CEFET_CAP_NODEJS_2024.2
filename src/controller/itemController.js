const itemService = require("../service/itemService")


async function readItem(req,res) {
    try {
        const itens = await itemService.readItem();
        res.json({lista_de_compras: itens})
    } catch (e) {
        res.json({erro: e.message})
    }
}

async function readItemById(req,res) {
    try {
        const id = req.params.id;
        const item = await itemService.readItemById(id);

        res.json({lista: item})
    } catch (e) {
        res.json({erro: e.message})
    }
}

async function createItem(req,res) {
    try {
       const { nome, descricao } = req.body;
        const message = await itemService.createItem(nome, descricao);
        
       res.json({message: message}) 
    } catch (e) {
        res.json({erro: e.message})
    }
}

async function updateItem(req,res) {
    try {
        const { nome, descricao } = req.body;
        const id = req.params.id;
        const message = await itemService.updateItem(id, nome, descricao);

        res.json({message: message})
    } catch (e) {
        res.json({erro: e.message})
    }
}

async function deleteItem(req,res) {
    try {
        const id = req.params.id;
        const message = await itemService.deleteItem(id);

        res.json({message: message})
    } catch (e) {
        res.json({erro: e.message})
    }
}

module.exports = {
    readItem,
    readItemById,
    createItem,
    updateItem,
    deleteItem
}