const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Subasta = sequelize.define('Subasta', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    nombre_propiedad: {
        type: DataTypes.STRING,
        allowNull: false
    },

    categorias: {
        type: DataTypes.ENUM('departamento', 'casa_campo', 'casa'),
        allowNull: false
    },

    direccion: {
        type: DataTypes.STRING,
        allowNull: false
    },

    precio_base: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },

    N_baños: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    N_cuartos: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    N_cocina: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    N_cocheras: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    patio: {
        type: DataTypes.ENUM('si', 'no'),
        allowNull: false
    },

    id_admin_vendedor: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    tableName: 'subastas',
    timestamps: false
});

module.exports = Subasta;