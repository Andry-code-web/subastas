const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Usuario = sequelize.define('Usuarios', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },

    apellidos: {
        type: DataTypes.STRING,
        allowNull: false
    },

    dni: {
        type: DataTypes.STRING,
        allowNull: false
    },

    celular: {
        type: DataTypes.STRING,
        allowNull: false
    },

    correo_electronico: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },

    contraseña: {
        type: DataTypes.STRING,
        allowNull: false
    },

    boleta: {
        type: DataTypes.STRING,
        defaultValue: false
    },

    factura: {
        type: DataTypes.STRING,
        defaultValue: false
    },

    numero_factura: {
        type: DataTypes.STRING
    },

    terminos_y_condiciones: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    
    uso_datos_personales: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
},{
    tableName: 'usuarios',
    timestamps: false
});

module.exports = Usuario