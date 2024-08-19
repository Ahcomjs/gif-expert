import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Test GifItem', () => {

    const title = "Saitama";
    const url = "https://example.com/";


    test('Should match with the Snapshot', () => {

        const { container } = render(<GifItem title={title} url={url} />)
        expect(container).toMatchSnapshot();

    });

    test('Should show the image with the URL and the ATL', () => {

        render(<GifItem title={title} url={url} />);

        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(alt);

    });

    test('Should validate if the title exists', ()=>{
        render(<GifItem title={title} url={url} />)

        expect(screen.getByText(title)).toBeTruthy();
    });

});