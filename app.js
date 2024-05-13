const express = require('express');
const path = require('path');
const morgan = require('morgan');


const app = express();

//configuracion
app.set("PORT", process.env.PORT || 3000);
app.set('view engine', "ejs")
app.set('views', path.join(__dirname, 'src/views'))
app.use(express.static('public'));
app.use(morgan('dev'));


app.listen(app.get('PORT'), () => {
    console.log("Server on port 3000");
})