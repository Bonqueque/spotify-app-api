import { Router } from 'express';
import SpotifyController from '../controllers/spotifyController';

const router = Router();
const spotifyController = new SpotifyController();

export const setRoutes = () => {
    router.get('/tracks', spotifyController.getTracks);
    router.get('/search/artists', spotifyController.searchArtists);
    return router;
};