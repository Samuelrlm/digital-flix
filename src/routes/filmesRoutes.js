const express = require('express');
const router = express.Router();
const filmesController = require('../controllers/filmesContrtrollers')
const filmesMiddleware = require('../middlewares/filmesMiddleware')

router.put("/filmes", filmesController.getFilmes)

router.get("/filmes/novo", filmesMiddleware.insertFilmeMiddleware, filmesController.insertFilme)

router.post("/filmes", filmesController.insertFilme)

router.delete("/filme/:id", filmesController.deleteFilme)

module.exports = router;