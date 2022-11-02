import { render, screen } from '@testing-library/react';    
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en <GitItem />', () => { 

        const title = 'saitama';
        const url = 'https://one-punch.com/saitama.jpg'

        test('debe hacer match con el snapshot', () => { 
            const { container } = render( <GifItem title=' title ' url=' url ' />)
            expect ( container ).toMatchSnapshot();
         });
 
         
         test('debe de mostrar la imagen con la URL y el aLT indicado', () => {
            
            render( <GifItem title={ title } url={ url } />);
            // screen.debug();
            // expect( screen.getByRole('img').src ).toBe( url );
            const { src, alt } = screen.getByRole('img');
            expect ( src ).toBe( url );
            expect( alt ).toBe( alt );
        });

        test('debe de mostrar el titulo en el componenente', () => {

            render( <GifItem title={ title } url={ url } />);
            expect( screen.getByText( title ) ).toBeTruthy();

        });
});

