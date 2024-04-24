import Link from 'next/link';
import React from 'react';

import MovieCard from '../components/MovieCard/MovieCard';
import { fetchPopularMovies } from '../services/fetchMovies';
import { ROUTES } from '../utils/constants';

const Movies: React.FC = async () => {
  const { results: movies } = await fetchPopularMovies();

  return (
    <ul className="grid grid-cols-5 gap-y-10">
      {movies.map(movie => (
        <li key={movie.id}>
          <Link href={`${ROUTES.MOVIES}/${movie.id}`}>
            <MovieCard movie={movie} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Movies;
