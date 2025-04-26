const connection = require("./connection")

function insertFilme(filme) {
    const filme = connection.query(`
        INSERT INTO filmes (titulo, genero, ano, minutos)
        VALUES ($1, $2, $3, $4)
    `, [filme.titulo, filme.genero, filme.ano, filme.minutos])
}