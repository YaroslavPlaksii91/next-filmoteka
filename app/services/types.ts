import type { Movie } from '../components/MovieCard/types';

export enum MediaType {
  All = 'all',
  Movie = 'movie',
  TV = 'tv',
}

export enum TrendingTime {
  Day = 'day',
  Week = 'week',
}

export interface Genre {
  id: number;
  name: string;
}

export interface FetchTrendingProps {
  mediaType: MediaType;
  time: TrendingTime;
}
export interface FetchMoviesResponse {
  page: number;
  results: Movie[];
}
export interface FetchGenresResponse {
  genres: Genre[];
}
