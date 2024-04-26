import { render } from '@testing-library/react';

import { NAV_LINKS } from '../Navigation/constants';
import Header from './Header';

describe('Header component', () => {
  it('renders correctly', () => {
    const { container } = render(<Header />);

    const headerElement = container.firstChild;
    expect(headerElement).toBeInTheDocument();
  });

  it('renders Logo component', () => {
    const { getByRole } = render(<Header />);

    const logoElement = getByRole('link', { name: /Moviec/i });
    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveAttribute('href', '/');
  });

  it('renders Navigation component', () => {
    const { getAllByRole } = render(<Header />);

    const navLinks = getAllByRole('link');
    expect(navLinks).toHaveLength(NAV_LINKS.length + 1);
  });
});
