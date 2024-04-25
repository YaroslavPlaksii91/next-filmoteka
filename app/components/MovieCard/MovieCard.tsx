import { BASE_IMG_URL } from '@/app/utils/constants';
import Image from 'next/image';
import React from 'react';

import type { MovieCardProps } from './types';

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg">
      <Image
        src={`${BASE_IMG_URL}${movie.poster_path}`}
        alt={movie.title}
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto"
      />
      <div className="px-6 py-4">
        <h3 className="font-bold text-xl mb-2 text-center">{movie.title}</h3>
        <p className="text-gray-700 text-base mb-8">{movie.overview}</p>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          Release Date: {movie.release_date}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          Rating: {movie.vote_average}
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
