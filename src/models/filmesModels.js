const connection = require("./connection")

async function insertFilme(filme) {
    const filmeInserted = await connection.query(`
        INSERT INTO filmes (titulo, genero, ano, minutos, nota, diretor, descricao, poster)
        VALUES ('${filme.titulo}', '${filme.genero}', ${filme.ano}, ${filme.minutos}, ${filme.nota}, '${filme.diretor}', '${filme.descicao}', '${filme.poster}')
        RETURNING *
    `)

    return filmeInserted;
}

async function getFilmes(){
    const filmes = await connection.query(`
        SELECT titulo, genero FROM filmes WHERE 1=1
    `)

    return filmes;
}

async function getFilme(){
    return [];
}

module.exports = {
    insertFilme,
    getFilmes,
    getFilme
}