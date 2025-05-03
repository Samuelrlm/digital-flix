const filmesModel = require("../models/filmesModels")

async function insertFilme(req, res) {
    const filme = req.body;

    try {
        const insertedFilme = await filmesModel.insertFilme(filme);

        return res.status(201).send(insertedFilme);
    } catch (error) {
        console.error("Erro ao inserir filme:", error);
        return res.status(500).send("Erro ao inserir filme");
    }
}

module.exports = {
    insertFilme
}