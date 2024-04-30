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
  TRENDING: `${BASE_API_URL}trending`,
  NOW_PLAYING_MOVIES: `${BASE_API_URL}movie/now_playing`,
  POPULAR_MOVIES: `${BASE_API_URL}movie/popular`,
  TOP_RATED_MOVIES: `${BASE_API_URL}movie/top_rated`,
  UPCOMING_MOVIES: `${BASE_API_URL}movie/upcoming`,
  MOVIE_BY_ID: `${BASE_API_URL}movie`,
  MOVIE_GENRES: `${BASE_API_URL}genre/movie/list`,
  TV_GENRES: `${BASE_API_URL}genre/tv/list`,
});
