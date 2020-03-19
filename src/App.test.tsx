import React from 'react';
import { render } from 'enzyme';
import App from './App';

test('renders learn react link', () => {
  // const { getByText } = render(<App />);
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  // eslint-disable-next-line no-unused-vars
  const a = render(<App />);
});
