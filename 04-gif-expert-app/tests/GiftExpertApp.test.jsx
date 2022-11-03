import { render, screen } from "@testing-library/react";
import { GiftExpertApp } from "../src/GiftExpertApp";




    describe('Pruebas en <GifExpertApp />', () => {

        test('testeo', () => {

            render( <GiftExpertApp />);
            screen.debug();
            
         });
     });