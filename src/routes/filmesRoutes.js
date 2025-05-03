const express = require('express');
const router = express.Router();
const filmesController = require('../controllers/filmesContrtrollers')

router.post("/filmes", filmesController.insertFilme);

module.exports = router;