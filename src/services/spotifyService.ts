import axios from 'axios';

const SPOTIFY_API_BASE_URL = 'https://api.spotify.com/v1';

export class SpotifyService {
    private accessToken: string;

    constructor(accessToken: string) {
        this.accessToken = accessToken;
    }

    private async fetchFromSpotify(endpoint: string) {
        const response = await axios.get(`${SPOTIFY_API_BASE_URL}${endpoint}`, {
            headers: {
                Authorization: `Bearer ${this.accessToken}`,
            },
        });
        return response.data;
    }

    public async fetchTracks(trackIds: string[]) {
        const ids = trackIds.join(',');
        return this.fetchFromSpotify(`/tracks?ids=${ids}`);
    }

    public async searchArtists(query: string) {
        return this.fetchFromSpotify(`/search?q=${encodeURIComponent(query)}&type=artist`);
    }
}