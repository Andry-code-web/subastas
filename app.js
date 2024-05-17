const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const subastasRoutes = require('./router/subastasRouter');
const usuariosRoutes = require('./router/usuarioRouter');
const adminGeneralRoutes = require('./router/adminGeneralRouter');
const adminVendedorRoutes = require('./router/adminVendorRouter');
const ofertaRoutes = require('./router/ofertaRouter');
const sequelize = require('./config/database');

const app = express();

// Configuración
app.set("PORT", process.env.PORT || 3000);
app.set('view engine', "ejs");
app.set('views', path.join(__dirname, 'src/views'));
app.use(express.static('src/public'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta principal
app.get('/', (req, res) => {
    res.render('home'); // Renderizará la vista home.ejs
});
app.get('/subasta', (req, res) => {
    res.render('subastas'); // Renderizará la vista subastas.ejs
});
app.get('/AGeneral', (req, res) =>{
    res.render('adminGeneral'); // Renderizará la vista adminGeneral.ejs
})
app.get('/AVendedor', (req, res) => {
    res.render('adminVendedor'); // Renderizará la vista adminVendedor.ejs
})

/* Rutas depeticiones a la RUTAS */

// Rutas de usuario
app.use('/usuarios', usuariosRoutes);
// Rutas de subasta
app.use('/subasta', subastasRoutes);
//Rutas de admin General
app.use('/adminGeneral', adminGeneralRoutes);
//Rutas de admin Vendedor
app.use('/adminVendedor', adminVendedorRoutes);
//Rutas de ofrtas
app.use('/ofertas', ofertaRoutes);


// Sincronizar la base de datos
sequelize.sync()
    .then(() => {
        console.log('Base de datos y tablas creadas');
    })
    .catch(error => {
        console.error("Error al sincronizar la base de datos:", error);
    });

app.listen(app.get('PORT'), () => {
    console.log(`Server on port ${app.get('PORT')}`);
});
