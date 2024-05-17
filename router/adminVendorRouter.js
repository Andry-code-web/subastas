const express = require('express');
const router = express.Router();
const adminVendedorController = require('../controller/adminVendedorController');

router.get('/', adminVendedorController.obtenerAdminVendedor);
router.post('/', adminVendedorController.crearAdminVendedor);
router.get('/:id', adminVendedorController.obtenerAdminVendedorPorId);
router.put('/:id', adminVendedorController.actualizarAdminVendedor);
router.delete('/:id', adminVendedorController.eliminarAdminVendedor);

module.exports = router;