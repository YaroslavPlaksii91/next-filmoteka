import Link from 'next/link';
import React from 'react';

import MovieCard from './components/MovieCard/MovieCard';
import { fetchNowPlayingMovies } from './services/fetchMovies';
import { ROUTES } from './utils/constants';

const Home: React.FC = async () => {
  const { results: movies } = await fetchNowPlayingMovies();

  return (
    <div>
      <Link href={ROUTES.MOVIES}>Movies</Link>
      <Link href={ROUTES.SHOWS}>TV shows</Link>

      <h2>Currently in Cinemas</h2>

      <ul className="grid grid-cols-4 gap-y-10">
        {movies.map(movie => (
          <li key={movie.id}>
            <Link href={`${ROUTES.MOVIES}/${movie.id}`}>
              <MovieCard movie={movie} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
