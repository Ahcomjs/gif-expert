const { render, screen } = require("@testing-library/react");
import { useFetchGifs } from '../../src/hooks/useFetchGits';
import { GifGrid } from './../../src/components/GifGrid';

jest.mock('../../src/hooks/useFetchGits');

describe('Test GifGrid', () => {

    const category = 'Saitama';

    test('Should show the loading...', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={category} />);
        expect(screen.getByText('Loading...'));
    });

    test('Should show items when it load images using useFetchGifs', () => {
        const gifs = [
            {
                id: '1',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },

            {
                id: '2',
                title: 'Naruto',
                url: 'https://localhost/naruto.jpg'
            },
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={category} />);
        expect(screen.getAllByRole('img').length).toBe(2);

    })


});
