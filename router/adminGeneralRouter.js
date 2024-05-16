const express = require('express');
const router = express.Router();
const adminGeneralController = require('../controller/andinGeneralController');

router.get('/', adminGeneralController.obtenerAdminGeneral);
router.post('/', adminGeneralController.crearAdminGeneral);
router.get('/:id', adminGeneralController.obtenerAdminGeneralPorId);
router.put('/:id', adminGeneralController.actualizarAdminGeneral);
router.delete('/:id', adminGeneralController.eliminarAdminGeneral);

module.exports = router;