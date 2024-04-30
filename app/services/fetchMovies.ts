import type { Movie } from '../components/MovieCard/types';
import { API_ENDPOINTS, FETCH_OPTIONS } from '../utils/constants';
import {
  FetchGenresResponse,
  FetchMoviesResponse,
  FetchTrendingProps,
  MediaType,
  TrendingTime,
} from './types';

export const fetchTrending = async ({
  mediaType = MediaType.All,
  time = TrendingTime.Day,
}: FetchTrendingProps): Promise<FetchMoviesResponse> => {
  const response = await fetch(
    `${API_ENDPOINTS.TRENDING}/${mediaType}/${time}`,
    FETCH_OPTIONS,
  );

  return response.json();
};

export const fetchNowPlayingMovies = async (): Promise<FetchMoviesResponse> => {
  const response = await fetch(API_ENDPOINTS.NOW_PLAYING_MOVIES, FETCH_OPTIONS);

  return response.json();
};

export const fetchPopularMovies = async (): Promise<FetchMoviesResponse> => {
  const response = await fetch(API_ENDPOINTS.POPULAR_MOVIES, FETCH_OPTIONS);

  return response.json();
};

export const fetchTopRatedMovies = async (): Promise<FetchMoviesResponse> => {
  const response = await fetch(API_ENDPOINTS.TOP_RATED_MOVIES, FETCH_OPTIONS);

  return response.json();
};

export const fetchUpcomingMovies = async (): Promise<FetchMoviesResponse> => {
  const response = await fetch(API_ENDPOINTS.UPCOMING_MOVIES, FETCH_OPTIONS);

  return response.json();
};

export const fetchMovieDetails = async (id: string): Promise<Movie> => {
  const response = await fetch(
    `${API_ENDPOINTS.MOVIE_BY_ID}/${id}`,
    FETCH_OPTIONS,
  );

  return response.json();
};

export const fetchMovieCredits = async (id: string): Promise<Movie> => {
  const response = await fetch(
    `${API_ENDPOINTS.MOVIE_BY_ID}/${id}/credits`,
    FETCH_OPTIONS,
  );

  return response.json();
};

export const fetchMovieImages = async (id: string): Promise<Movie> => {
  const response = await fetch(
    `${API_ENDPOINTS.MOVIE_BY_ID}/${id}/images`,
    FETCH_OPTIONS,
  );

  return response.json();
};

export const fetchMovieVideos = async (id: string): Promise<Movie> => {
  const response = await fetch(
    `${API_ENDPOINTS.MOVIE_BY_ID}/${id}/videos`,
    FETCH_OPTIONS,
  );

  return response.json();
};

export const fetchMovieReviews = async (id: string): Promise<Movie> => {
  const response = await fetch(
    `${API_ENDPOINTS.MOVIE_BY_ID}/${id}/reviews`,
    FETCH_OPTIONS,
  );

  return response.json();
};

export const fetchMovieGenres = async (): Promise<FetchGenresResponse> => {
  const response = await fetch(API_ENDPOINTS.MOVIE_GENRES, FETCH_OPTIONS);

  return response.json();
};

export const fetchTVGenres = async (): Promise<FetchGenresResponse> => {
  const response = await fetch(API_ENDPOINTS.TV_GENRES, FETCH_OPTIONS);

  return response.json();
};
