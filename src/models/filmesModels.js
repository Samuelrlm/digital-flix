const connection = require("./connection")

async function insertFilme(filme) {
    const filmeInserted = await connection.query(`
        INSERT INTO filmes (titulo, genero, ano, minutos)
        VALUES ($1, $2, $3, $4)
        RETURNING *
    `, [filme.titulo, filme.genero, filme.ano, filme.minutos])

    return filmeInserted.rows[0];
}

module.exports = {
    insertFilme
}