const express = require('express');
const app = express();
const filmesRoutes = require("./routes/filmesRoutes")

const port = 3004;

app.use(express.json());
app.use(filmesRoutes);

app.listen(port, () => {
    console.log(`Servidor rodadno na porta ${port}`);
})