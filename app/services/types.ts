import type { Movie } from '../components/MovieCard/types';

export interface FetchMoviesResponse {
  page: number;
  results: Movie[];
}
