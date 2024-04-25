export const BASE_API_URL = process.env.NEXT_PUBLIC_API_URL;

export const BASE_IMG_URL = 'https://image.tmdb.org/t/p/original';

export const FETCH_OPTIONS = Object.freeze({
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
  },
});

export const ROUTES = Object.freeze({
  HOME: '/',
  MOVIES: '/movies',
  SHOWS: '/shows',
});

export const API_ENDPOINTS = Object.freeze({
  NOW_PLAYING_MOVIES: `${BASE_API_URL}movie/now_playing`,
  POPULAR_MOVIES: `${BASE_API_URL}movie/popular`,
  MOVIE_BY_ID: `${BASE_API_URL}movie`,
});
