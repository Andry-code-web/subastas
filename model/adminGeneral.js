const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const AdminGeneral = sequelize.define('AdminGeneral', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    contraseña: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    tableName: 'admingeneral',
    timestamps: flase
});

module.exports = AdminGeneral;