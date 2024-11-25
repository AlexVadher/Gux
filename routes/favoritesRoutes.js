import {FavoriteController} from '../controllers/favoriteController.js';
import {Router} from 'express';

const routerFavorites = Router();

routerFavorites.post('/createFavorites', FavoriteController.addFavorite);

export default routerFavorites;
