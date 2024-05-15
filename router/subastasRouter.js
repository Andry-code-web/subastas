const express = require('express');
const router = express.Router();
const subastasController = require('../controller/subastasController');

router.post('/', subastasController.crearSubasta);
router.get('/', subastasController.obtenerSubasta);
router.get('/:id', subastasController.obtenerSubastaPorId);
router.put('/:id', subastasController.actualizarSubasta);
router.delete('/:id', subastasController.eliminarSubasta);

module.exports = router;