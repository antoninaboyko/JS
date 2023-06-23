import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Posts from "../components/Posts.js";

describe( 'TEST POSTS', () => {
   
    test('Posts has links', async () => {
        render(<MemoryRouter> <Posts /> </MemoryRouter>);
        const link = await screen.findAllByTestId('link');
        expect(link.length > 1);
    });
})
