const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('./usuarios');
const Subasta = require('./subastas');

const Ofertas = sequelize.define('Ofertas', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    id_usuario: {
        type: DataTypes.INTEGER,
        references: {
            model: Usuario,
            key: 'id'
        }
    },

    id_subastas: {
        type: DataTypes.INTEGER,
        references: {
            model: Subasta,
            key: 'id'
        }
    },

    monto_oferta: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },

    fecha_oferta: {
        type: DataTypes.DATE,
        defaultValue: sequelize.NOW
    }
},{
    tableName: 'ofertas',
    timestamps: false
});

module.exports = Ofertas;