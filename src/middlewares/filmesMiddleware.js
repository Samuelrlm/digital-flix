async function insertFilmeMiddleware(req, res, next) {
    if(!req.body || Object.keys(req.body).length === 0){
        return res.status(400).send("Corpo da requisição não pode ser vazio");
    }

    const { titulo, genero, ano, minutos } = req.body;

    if(!titulo || !genero){
        return res.status(400).send("Todos os campos são obrigatórios");
    }

    if(titulo.length < 2){
        return res.status(400).send("Título deve ter no mínimo 2 caracteres");
    }

    if(genero.length > 100){
        return res.status(400).send("Gênero deve ter no máximo 100 caracteres");
    }

    if(ano < 1900 || ano > 2024){
        return res.status(400).send("Ano inválido");
    }

    if(minutos < 0){
        return res.status(400).send("Minutos deve ser positivo");
    }

    req.body.ano = parseInt(ano);
    req.body.minutos = parseInt(minutos);

    next();
}

module.exports = {
    insertFilmeMiddleware
}