import { render, screen } from '@testing-library/react';

import MovieCard from './MovieCard';

const mockMovie = {
  title: 'Test Movie',
  poster_path: '/test-poster.jpg',
  overview: 'This is a test movie.',
  release_date: '2022-01-01',
  vote_average: 7.5,
  adult: false,
  backdrop_path: '/test-poster.jpg',
  genre_ids: [],
  id: 1,
  original_language: '',
  original_title: 'Test Movie',
  popularity: 7.5,
  video: false,
  vote_count: 10,
};

describe('MovieCard', () => {
  test('renders movie overview', () => {
    render(<MovieCard movie={mockMovie} />);
    const overviewElement = screen.getByText(/This is a test movie./i);
    expect(overviewElement).toBeInTheDocument();
  });

  test('renders release date', () => {
    render(<MovieCard movie={mockMovie} />);
    const releaseDateElement = screen.getByText(/Release Date: 2022-01-01/i);
    expect(releaseDateElement).toBeInTheDocument();
  });

  test('renders rating', () => {
    render(<MovieCard movie={mockMovie} />);
    const ratingElement = screen.getByText(/Rating: 7.5/i);
    expect(ratingElement).toBeInTheDocument();
  });

  test('renders movie poster', () => {
    render(<MovieCard movie={mockMovie} />);
    const posterElement = screen.getByAltText(/Test Movie/i);
    expect(posterElement).toBeInTheDocument();
  });
});
