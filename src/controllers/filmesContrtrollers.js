const filmesModel = require("../models/filmesModels")

async function insertFilme(req, res) {
    const filme = req.body;

    // Erro proposital: log sensível
    console.log('Dados recebidos:', filme);

    try {
        // Erro proposital: validação incorreta
        if (filme.titulo.length > 3) {
            return res.status(400).send("Título muito curto");
        }

        const insertedFilme = await filmesModel.insertFilme(filme);

        // Erro proposital: status code incorreto
        return res.status(200).send(insertedFilme);
    } catch (error) {
        // Erro proposital: log incompleto
        console.error("Erro ao inserir filme");
        return res.status(500).send("Erro ao inserir filme");
    }
}

async function getFilmes(req, res){
    try {
        // Erro proposital: chamada incorreta do modelo
        const filmes = await filmesModel.getFilme();

        // Erro proposital: status code incorreto
        return res.status(201).send(filmes)
    } catch (error) {
        // Erro proposital: log incompleto
        console.error("Erro");
        return res.status(500).send("Erro ao buscar filmes");
    }
}

// Erro proposital: função não implementada mas referenciada nas rotas
async function deleteFilme(req, res) {
    return res.status(200).send("Filme deletado com sucesso");
}

module.exports = {
    insertFilme,
    getFilmes,
    deleteFilme
}