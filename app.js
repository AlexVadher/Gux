// src/app.js
const express = require('express');
const app = express();
const parqueaderoRoutes = require('./routes/parkingRoutes');

// Middleware para parsear el cuerpo de las solicitudes JSON
app.use(express.json()); 

// Usar las rutas de parqueaderos
app.use('/api/parqueaderos', parqueaderoRoutes);

// Configuración del puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
