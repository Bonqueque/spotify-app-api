export interface Track {
    id: string;
    name: string;
    artists: Artist[];
    album: string;
    releaseDate: string;
    durationMs: number;
    href: string;
}

export interface Artist {
    id: string;
    name: string;
    genres: string[];
    href: string;
}