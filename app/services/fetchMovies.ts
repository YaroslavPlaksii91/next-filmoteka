import type { Movie } from '../components/MovieCard/types';
import { API_ENDPOINTS, FETCH_OPTIONS } from '../utils/constants';
import type { FetchMoviesResponse } from './types';

export const fetchNowPlayingMovies = async (): Promise<FetchMoviesResponse> => {
  const response = await fetch(API_ENDPOINTS.NOW_PLAYING_MOVIES, FETCH_OPTIONS);

  return response.json();
};

export const fetchPopularMovies = async (): Promise<FetchMoviesResponse> => {
  const response = await fetch(API_ENDPOINTS.POPULAR_MOVIES, FETCH_OPTIONS);

  return response.json();
};

export const fetchMovie = async (id: string): Promise<Movie> => {
  const response = await fetch(
    `${API_ENDPOINTS.MOVIE_BY_ID}/${id}`,
    FETCH_OPTIONS,
  );

  return response.json();
};
