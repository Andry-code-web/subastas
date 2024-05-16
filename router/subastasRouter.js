const express = require('express');
const router = express.Router();
const subastasController = require('../controller/subastasController');

router.get('/', subastasController.obtenerSubasta); // Obtener todas las subastas
router.post('/', subastasController.crearSubasta); // Crear una nueva subasta
router.get('/:id', subastasController.obtenerSubastaPorId); // Obtener una subasta por ID
router.put('/:id', subastasController.actualizarSubasta); // Actualizar una subasta por ID
router.delete('/:id', subastasController.eliminarSubasta); // Eliminar una subasta por ID

module.exports = router;
