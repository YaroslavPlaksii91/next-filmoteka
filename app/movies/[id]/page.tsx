import MovieCard from '@/app/components/MovieCard/MovieCard';
import { fetchMovieDetails } from '@/app/services/fetchMovies';
import { BASE_IMG_URL } from '@/app/utils/constants';
import React from 'react';

import type { MoviePageProps } from './types';

const MoviePage: React.FC<MoviePageProps> = async ({ params: { id } }) => {
  const movie = await fetchMovieDetails(id);

  return (
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: `url('${BASE_IMG_URL}/${movie.backdrop_path}')`,
      }}
    >
      <MovieCard movie={movie} />
    </div>
  );
};

export default MoviePage;
