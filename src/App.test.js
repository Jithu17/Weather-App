import { render, screen } from '@testing-library/react';
import App from './App';

it('renders App header', () => {
  const { getByText } = render(<App />);
  const headerText = getByText('Weather App')
  expect(headerText).toBeTruthy();
});
