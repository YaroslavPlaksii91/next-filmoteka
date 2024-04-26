import { render } from '@testing-library/react';

import Navigation from './Navigation';
import { NAV_LINKS } from './constants';

describe('Navigation component', () => {
  it('renders correctly', () => {
    const { getAllByRole } = render(<Navigation />);

    const navLinks = getAllByRole('link');
    expect(navLinks).toHaveLength(NAV_LINKS.length);
  });

  it('renders navigation links with correct href and text', () => {
    const { getAllByRole } = render(<Navigation />);

    const navLinks = getAllByRole('link');

    navLinks.forEach((link, index) => {
      expect(link).toHaveAttribute('href', NAV_LINKS[index].href);
      expect(link).toHaveTextContent(NAV_LINKS[index].text);
    });
  });
});
