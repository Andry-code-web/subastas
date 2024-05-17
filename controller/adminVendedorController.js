const AdminVendedor = require('../model/adminVendor');

/* CREAR */
exports.crearAdminVendedor = async (req, res) =>{
    try {
        const adminVendedor = await AdminVendedor.create(req.body);
        res.status(200).json(adminVendedor);
    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
};

/* RECUPERAR */
exports.obtenerAdminVendedor = async ( req, res) =>{
    try {
        const adminVendedor = await AdminVendedor.findAll();
        res.status(200).json(adminVendedor);
    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
};

exports.obtenerAdminVendedorPorId = async (req,res) =>{
    try {
        const adminVendedor = await AdminVendedor.findByPk(req.params.id);
        if (adminVendedor) {
            res.status(200).json(adminVendedor);
        } else {
            res.status(404).json({
                error: 'Admin Vendedor no ncontrado'
            });
        }
    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
};

/* ACTUALIzAR */
exports.actualizarAdminVendedor = async(req, res) => {
    try {
        const adminVendedor = await AdminVendedor.findByPk(req.params.id);
        if (adminVendedor) {
            await adminVendedor.update(req.body);
            res.status(200).json(adminVendedor);
        } else {
            res.status(404).json({
                error: 'Admin vendedor no encontrado'
            });
        }
    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
};

/* ELIMINAR */
exports.eliminarAdminVendedor = async (req, res) => {
    try {
        const adminVendedor = await AdminVendedor.findByPk(req.params.id);
        if (adminVendedor) {
            await adminVendedor.destroy();
            res.status(204).send();
        } else {
            res.status(404).json({
                error: 'Admin vendedor no encontrado'
            });
        }
    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
};