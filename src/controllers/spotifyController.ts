export class SpotifyController {
    private spotifyService: any;

    constructor(spotifyService: any) {
        this.spotifyService = spotifyService;
    }

    async getTracks(req: any, res: any) {
        try {
            const tracks = await this.spotifyService.fetchTracks();
            res.status(200).json(tracks);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch tracks' });
        }
    }

    async searchArtists(req: any, res: any) {
        const { query } = req.params;
        try {
            const artists = await this.spotifyService.searchArtists(query);
            res.status(200).json(artists);
        } catch (error) {
            res.status(500).json({ error: 'Failed to search artists' });
        }
    }
}