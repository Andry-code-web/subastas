const express = require('express');
const router = express.Router();
const ofertaController = require('../controller/ofertaController');

router.get('/', ofertaController.obtenerOferta);
router.post('/', ofertaController.crearOferta);
router.get('/:id', ofertaController.obtenerOfertaPorId);


module.exports = router;