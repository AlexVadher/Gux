// src/app.js
import express from 'express';
// import parqueaderoRoutes from './routes/parkingRoutes.js';
import userRouter from './routes/usersRoutes.js';
import routerParking from './routes/parkingRoutes.js';

const app = express();

// Middleware para parsear el cuerpo de las solicitudes JSON
app.use(express.json());

// Usar las rutas de parqueaderos
// app.use('/api/parqueaderos', parqueaderoRoutes);

app.use(userRouter);
app.use('/api', routerParking);

// Configuración del puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
