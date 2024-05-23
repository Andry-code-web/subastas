const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');
const subastasRoutes = require('./router/subastasRouter');
const usuariosRoutes = require('./router/usuarioRouter');
const adminGeneralRoutes = require('./router/adminGeneralRouter');
const adminVendedorRoutes = require('./router/adminVendorRouter');
const ofertaRoutes = require('./router/ofertaRouter');
const sequelize = require('./config/database');
const authMiddleware = require('./middleware/auth');

const app = express();
const http = require('http'); //importamos http 
const { Server } = require('socket.io'); //importamos socket.io
const server = http.createServer(app); //creamos el servidor http
const io = new Server(server); //crear una instancia de socket.io

// Configuración de la sesión
app.use(session({
    secret: 'sessionKey',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

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
app.get('/AGeneral', (req, res) => {
    res.render('adminGeneral'); // Renderizará la vista adminGeneral.ejs
});
app.get('/AVendedor', (req, res) => {
    res.render('adminVendedor'); // Renderizará la vista adminVendedor.ejs
});
app.get('/login', (req, res) => {
    res.render('login'); // Renderizará la vista login.ejs
});

// Rutas de login
app.use('/login', usuariosRoutes);

// Rutas de peticiones a la RUTAS
// Rutas de usuario
app.use('/usuarios', usuariosRoutes);
// Rutas de subasta
app.use('/subasta', subastasRoutes);
// Rutas de admin General
app.use('/adminGeneral', adminGeneralRoutes);
// Rutas de admin Vendedor
app.use('/adminVendedor', adminVendedorRoutes);
// Rutas de ofertas
app.use('/ofertas', ofertaRoutes);

// Sincronizar la base de datos
sequelize.sync()
    .then(() => {
        console.log('Base de datos y tablas creadas');
    })
    .catch(error => {
        console.error("Error al sincronizar la base de datos:", error);
    });

// Configuración de socket.io
io.on('connection', (socket) => {
    console.log('Nuevo cliente');
    socket.on('disconnect', () => {
        console.log('Cliente desconectado');
    });

    // Emitir otros eventos de socket.io
    socket.on('message', (data) => {
        console.log('Mensaje recibido', data);
        io.emit('message', data); // Emitir a todos los clientes
    });
});

server.listen(app.get('PORT'), () => {
    console.log(`Server on port ${app.get('PORT')}`);
});
