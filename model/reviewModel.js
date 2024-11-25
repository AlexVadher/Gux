import mongoose from 'mongoose';

// esquema para la colección de reviews

const reviewSchema = new mongoose.Schema({
    id_usuario: {
        type: String,
        required: true,
    },
    id_parqueadero: {
        type: String,
        required: true,
    },
    calificacion: {
        type: Number,
        required: true,
    },
    comentario: {
        type: String,
        required: true,
    },
});

// modelo para la colección de reviews
const Review = mongoose.model('Review', reviewSchema);

export default Review;
