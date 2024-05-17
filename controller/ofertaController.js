const Ofertas = require('../model/ofertas');

/* CREAR */
exports.crearOferta = async (req, res) => {
    try {
        const oferta = await Ofertas.create();
        res.status(201).json(oferta);
    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
};

/* REECUPERAR */
exports.obtenerOferta = async (req, res) => {
    try {
        const oferta = await Ofertas.findAll();
        res.status(200).json(oferta);
    } catch (error) {
        res.status(404).json({
            error: error.message
        });
    }
};

exports.obtenerOfertaPorId = async (req, res) =>{
    try {
        const oferta = await Ofertas.findByPk(req.params.id);
        if (oferta) {
            res.status(200).json(oferta)
        } else {
            res.status(404).json({
                error: 'Oferta no encontrado'
            });
        }
    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
};