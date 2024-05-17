const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const AdminGeneral = require('./adminGeneral');

const AdminVendedor = sequelize.define('AdminVendedor', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_admin_general: {
        type: DataTypes.INTEGER,
        references: {
            model: AdminGeneral,
            key: 'id'
        }
    },
    nombre_usuario: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contraseña: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    tableName: 'adminvendedor',
    timestamps: false
});

module.exports = AdminVendedor;