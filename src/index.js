const express = require('express');
const cors = require('cors');
const app = express();
const filmesRoutes = require("./routes/filmesRoutes")

const port = 3004;

app.use(cors({
    origin: '*'
}));
app.use(filmesRoutes);

console.log('Iniciando servidor...');

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
    console.log('Banco de dados conectado com sucesso!');
})