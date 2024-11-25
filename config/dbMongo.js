import mongoose from 'mongoose';

// creamos la conexion de la base de datos con mongoose
const dbMongo = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Conexión exitosa con la base de datos');
    } catch (error) {
        console.error('Error al conectar con la base de datos', error);
    }
};

export default dbMongo;
