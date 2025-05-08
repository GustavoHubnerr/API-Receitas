const express = require('express');
const router = express.Router();
const controller = require('../controllers/relCustoReceita');

router.get('/:id', controller.custoReceita);

module.exports = router;
