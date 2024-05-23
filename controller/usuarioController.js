const path = require('path');
const Usuario = require('../model/usuarios');
const bcrypt = require('bcrypt');

// OBTENER
exports.obtenerUsuario = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(400).sendFile(path.join(__dirname, '../views/errores_Http/400.html'));
    }
};

// CREAR
exports.crearUsuario = async (req, res) => {
    const { nombre, apellidos, dni, celular, correo_electronico, contraseña } = req.body;

    // Validar que todos los campos requeridos estén presentes
    if (!nombre || !apellidos || !dni || !celular || !correo_electronico || !contraseña) {
        return res.status(400).json({
            error: 'Todos los campos son obligatorios'
        });
    }

    try {
        // Hashear la contraseña antes de guardarla
        const hashedPassword = await bcrypt.hash(contraseña, 10);

        const usuario = await Usuario.create({
            nombre,
            apellidos,
            dni,
            celular,
            correo_electronico,
            contraseña: hashedPassword
        });

        res.status(201).json(usuario);
    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
};

// ACTUALIZAR
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

// LOGIN
exports.loginUsuarios = async (req, res) => {
    try {
        const { usuario, contraseña } = req.body;
        const usuarios = await Usuario.findOne({ where: { usuario } });

        if (!usuarios) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        const isMatch = await bcrypt.compare(contraseña, usuario.contraseña);
        if (!isMatch) {
            return res.status(400).json({ error: 'Contraseña incorrecta' });
        }

        req.session.userId = usuarios.id;
        res.redirect('/subasta');
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
