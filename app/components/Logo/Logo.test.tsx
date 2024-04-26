import { render } from '@testing-library/react';

import Logo from './Logo';

describe('Logo component', () => {
  it('renders logo with correct text', () => {
    const { getByText } = render(<Logo />);

    const logoText = getByText(/Moviec/i);
    expect(logoText).toBeInTheDocument();
  });

  it('renders logo image with correct alt text', () => {
    const { getByAltText } = render(<Logo />);

    const logoImage = getByAltText('Logo');
    expect(logoImage).toBeInTheDocument();
  });
});
