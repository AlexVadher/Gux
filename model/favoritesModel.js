import mongoose from 'mongoose';

// esquema para la colección de favoritos
const favoritesSchema = new mongoose.Schema({
    id_usuario: {
        type: String,
        required: true,
    },
    id_parqueadero: {
        type: String,
        required: true,
    },
});

// modelo para la colección de favoritos
const Favorites = mongoose.model('Favorites', favoritesSchema);

export default Favorites;
