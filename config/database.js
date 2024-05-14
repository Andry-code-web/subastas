const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USER,  
    process.env.DB_PASWORD, 
    {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
}
);

sequelize.authenticate()
    .then(() => console.log("Conectado a la base de datos"))
    .catch(err => console.error("No se pude conectar el error es: " + err));

module.exports = sequelize;