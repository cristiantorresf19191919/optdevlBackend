const express = require('express');
const app = express();
const connectDB = require('./config/db');
const bodyparser = require('body-parser');
const cors = require('cors');

// conectar a la base de datos OptimusDev
connectDB();

// middleware bodyparser
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
// Cors
app.use(cors());

const PORT = process.env.PORT || 5000;
// middleware
const middleware = (req, res, next) => {

        console.log(`URL is ${req.url} \n\n`);
        console.log(`External IP is ${req.headers['x-forwarded-for'] || req.connection.remoteAddress}`);
        next();
    }
    // corriendo la funcion
app.use(middleware);

// definiendo rutas
app.use('/optimusdev/customer', require('./routes/customer'));
// colecciones 
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
    console.log(`Servidor corriendo en el puerto ${PORT}`);
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});