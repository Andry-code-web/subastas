const Subasta = require('../model/subastas');

/* CREAR */
exports.crearSubasta = async (req, res) =>{
    try {
        const subasta = await Subasta.create(req.body);
        res.status(201).json(subasta);
    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
};


/* RECUPERAR */
exports.obtenerSubasta = async (req, res) => {
    try {
        const subastas = await Subasta.findAll();
        res.status(200).json(subastas);
    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
};

exports.obtenerSubastaPorId = async ( req, res) => {
    try {
        const subasta = await Subasta.findByPk(req.params.id);
        if (subasta) {
            res.status(200).json(subasta);
        } else {
            res.status(404).json({
                error: 'Subasta no encontrada'
            });
        }
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}

/* ACTUALIAR */
exports.actualizarSubasta = async (req, res) => {
    try {
        const subasta = await Subasta.findByPk(req.params.id);
        if (subasta) {
            await subasta.update(req.body);
            res.status(200).json(subasta);
        } else {
            res.status(404).json({
                error: 'Subasta no encontrada'
            })
        }
    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
};

/* ELIMINAR */
exports.eliminarSubasta = async (req, res) => {
    try {
        const subasta = await Subasta.findByPk(req.params.id);
        if (subasta) {
            await subasta.destroy();
            res.status(204).send();
        } else {
            res.status(404).json({
                error: 'Subasta no encontrada'
            });
        }
    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
};