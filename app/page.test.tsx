import { render, screen } from '@testing-library/react';

import Home from './page';

describe('Home component', () => {
  it('renders "Hello world!" text', () => {
    render(<Home />);

    const helloWorldText = screen.getByText('Hello world!');

    expect(helloWorldText).toBeInTheDocument();
  });
});
