import { render } from '@testing-library/react';

import NavLink from './NavLink';

const mockHref = '/example';
const mockText = 'Example';

describe('NavLink component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<NavLink href={mockHref} text={mockText} />);

    const linkElement = getByText(mockText);
    expect(linkElement).toBeInTheDocument();
  });

  it('has correct link', () => {
    const { getByText } = render(<NavLink href={mockHref} text={mockText} />);

    const linkElement = getByText(mockText);
    expect(linkElement).toHaveAttribute('href', mockHref);
  });
});
