// src/app.js
import express from 'express';
import connectMongo from './config/dbMongo.js';
import userRouter from './routes/usersRoutes.js';
import routerParking from './routes/parkingRoutes.js';
import vehiculoRoutes from './routes/vehiculoRoutes.js';
import reservaRoutes from './routes/reservaRoutes.js';
import routerFavorites from './routes/favoritesRoutes.js';

const app = express();
connectMongo(); // Conexión a la base de datos MongoDB

// Middleware para parsear el cuerpo de las solicitudes JSON
app.use(express.json());

// Usar las rutas de parqueaderos
app.use('/api/Users', userRouter); // Usuarios
app.use('/api/parking', routerParking); //Parqueaderos
app.use('/api/vehiculos', vehiculoRoutes); // Vehículos
app.use('/api/reservas', reservaRoutes); // Reservas
app.use('/api/favorites', routerFavorites); // Favoritos

// Configuración del puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
