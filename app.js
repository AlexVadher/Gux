// app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const usuarioRoutes = require('./routes/usersRoutes');


const app = express();
app.use(cors());
app.use(bodyParser.json());


// Rutas
app.use('/api/usuarios', usuarioRoutes);

// Inicio del servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
