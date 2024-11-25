import Favorites from '../model/favoritesModel.js';

export class FavoriteController {
    // Método para agregar un parqueadero a favorito
    static async addFavorite(req, res) {
        try {
            const {id_usuario, id_parqueadero} = req.body;

            if (!id_usuario || !id_parqueadero) {
                return res.status(400).json({
                    message: 'Faltan datos obligatorios',
                    data: req.body,
                });
            }
            console.log(req.body);

            const favorite = {
                id_usuario,
                id_parqueadero,
            };

            const result = await Favorites.create(favorite);
            res.json(result);
        } catch (error) {
            console.error(error);
        }
    }
    // Método para eliminar un parqueadero de favoritos
    static async deleteFavorite(req, res) {
        try {
            const {id_usuario, id_parqueadero} = req.body;

            if (!id_usuario || !id_parqueadero) {
                return res.status(400).json({
                    message: 'Faltan datos obligatorios',
                    data: req.body,
                });
            }

            const favorite = {
                id_usuario,
                id_parqueadero,
            };

            const result = await fovoritesModel.delete(favorite);
            res.json(result);
        } catch (error) {
            console.error(error);
        }
    }
}
