const AdminGeneral = require('../model/adminGeneral');

/* CREAR */
exports.crearAdminGeneral = async (req, res) => {
    try {
        const adminGeneral = await AdminGeneral.create(req.body);
        res.status(201).json(adminGeneral);
    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
};

/* RECUPERAR */
exports.obtenerAdminGeneral = async (req, res) => {
    try {
        const adminGeneral = await AdminGeneral.findAll();
        res.status(200).json(adminGeneral);
    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
};

exports.obtenerAdminGeneralPorId = async (req, res) => {
    try {
        const adminGeneral = await AdminGeneral.findByPk(req.params.id);
        if (adminGeneral) {
            res.status(200).json(adminGeneral);
        } else {
            res.status(404).json({
                error: 'Admin no encontrado'
            });
        }
    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
};

/* ACTUALIzAR */
exports.actualizarAdminGeneral = async (req, res) => {
    try {
        const adminGeneral = await AdminGeneral.findByPk(req.params.id);
        if (adminGeneral) {
            await adminGeneral.update(req.body);
            res.status(200).json(adminGeneral);
        } else {
            res.status(404).json({
                error: 'Admin no encontrado'
            })
        }
    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
};


/* ELIMINAR */
exports.eliminarAdminGeneral = async (req, res) => {
    try {
        const adminGeneral = await AdminGeneral.findByPk(req.params.id);
        if (adminGeneral) {
            await adminGeneral.destroy();
            res.status(204).send();
        } else {
            res.status(404).json({
                error: 'Admin genral no encontrado'
            });
        }
    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
};