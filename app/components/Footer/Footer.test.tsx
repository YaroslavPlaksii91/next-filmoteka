import { render } from '@testing-library/react';

import Footer from './Footer';

describe('Footer component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Footer />);

    const copyrightText = getByText(/© 2024 Moviec. All rights reserved./i);
    expect(copyrightText).toBeInTheDocument();
  });
});
