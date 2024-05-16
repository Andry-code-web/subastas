const express = require('express');
const router = express.Router();
const usuarioController = require('../controller/usuarioController');

router.get('/', usuarioController.obtenerUsuario);
router.post('/', usuarioController.crearUsuario);
router.put('/:id', usuarioController.actualizarUsuarios);

module.exports = router;
