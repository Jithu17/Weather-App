import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SearchBar from '../components/SearchBar';
import React from 'react';



it('renders search bar', () => {
    const { getByText } = render(<SearchBar />);
    const search = getByText('Enter Location');
    expect(search).toBeTruthy();
});

it('Shows No option on clicking on search bar', async() => {
    const { getByText, container } = render(<SearchBar />);
    fireEvent.change(container.querySelector('input'), {
        target: { value: 'Melbourne' },
    });
    expect(await waitFor(() => getByText('Melbourne'))).toBeTruthy();
})

