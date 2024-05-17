const path = require('path');
const Usuario = require('../model/usuarios');

/* OBTENER */
exports.obtenerUsuario = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(400).sendFile(path.join(__dirname, '../views/errores_Http/400.html'));
    }
};

/* CREAR */
exports.crearUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.create(req.body);
        res.status(201).json(usuario);
    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
};

/* ACTUALIZAR */
exports.actualizarUsuarios = async (req, res) => {
    try {
        const usuario = await Usuario.findByPk(req.params.id);
        if (usuario) {
            await usuario.update(req.body);
            res.status(200).json(usuario);
        } else {
            res.status(404).json({
                error: 'Usuario no encontrado'
            });
        }
    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
};
