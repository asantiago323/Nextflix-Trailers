export interface Genre {
    id: number;
    name: string;
}

export interface Movie {
    title: string;
    backdrop_path: string;
    media_type?: string;
    release_date?: string;
    first_air_date: string;
    genre_ids: number[];
    id: number;
    name: string;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    vote_average: number;
    vote_counte: number;
}

export interface Element {
    type:
        | 'Bloopers'
        | 'Featurette'
        | 'Behind the Scenes'
        | 'Clip'
        | 'Trailer'
        | 'Teaser'
}

export interface Netflix {
    netflixOriginals: Movie[];
}
export interface Trending {
    trendingNow: Movie[];
}
export interface TopRated {
    topRated: Movie[];
}
export interface Action {
    actionMovies: Movie[];
}
export interface Comedy {
    comedyMovies: Movie[];
}
export interface Horror {
    horrorMovies: Movie[];
}
export interface Romance {
    romanceMovies: Movie[];
}
export interface Documentaries {
    documentaries: Movie[];
}

export interface Props {
    netflixOriginals: Movie[];
    trendingNow: Movie[];
    topRated: Movie[];
    actionMovies: Movie[];
    comedyMovies: Movie[];
    horrorMovies: Movie[];
    romanceMovies: Movie[];
    documentaries: Movie[];
}

export interface Row {
    title: string;
    movies: Movie[];
}