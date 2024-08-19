import { render, screen } from "@testing-library/react";
import { GifExpert } from "../src/GifExpert";

describe('Test GifExpert', () => {
    test('Should match the Snapshops', () => {
        const { container } = render(<GifExpert />);
        screen.debug();
        expect(container).toMatchSnapshot();
    });
    

})
