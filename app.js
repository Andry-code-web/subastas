const express = require('express');
const path = require('path');
const morgan = require('morgan');
const sequelize = require('./config/database');
const { error } = require('console');


const app = express();

//configuracion
app.set("PORT", process.env.PORT || 3000);
app.set('view engine', "ejs")
app.set('views', path.join(__dirname, 'src/views'))
app.use(express.static('public'));
app.use(morgan('dev'));

//Sincronizar la base de datos
sequelize.sync()
    .then(() => {
        console.log('Base de datos y tablas cradas');
    })
    .catch(error => {
        console.log("Error al sincronizar la base de datos" + error)
    });


app.listen(app.get('PORT'), () => {
    console.log("Server on port 3000");
});