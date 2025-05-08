const express = require('express');
const router = express.Router();
const ingredientesMaisUsadosController = require('../controllers/ingredientesMaisUsados');

router.get('/', ingredientesMaisUsadosController.getIngredientesMaisUsados);

module.exports = router;
