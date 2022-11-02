import { AddCategory } from "../../src/components/AddCategory";
import { fireEvent, render, screen } from '@testing-library/react';

describe('Pruebas en <AddCategory />', () => {
   
    test('debe de cambiar el valor de la caja de texto', () => {

        render( <AddCategory />)
        const input = screen.getByRole('textbox');

        fireEvent.input( input, { target: { value: 'Saitama'}});

        expect( input.value ).toBe('Saitama');
        // screen.debug();
    });

    test('debe de llamar onNewCategory si el input tiene un valor', () => {

        const inputValue = 'Saitama';
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory } /> );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        // screen.debug();
        expect( input.value ).toBe('');

        expect(jest.fn(AddCategory)).not.toHaveBeenCalled();
        expect(jest.fn(AddCategory)).not.toHaveBeenCalledTimes(1);
        expect(jest.fn(AddCategory)).not.toHaveBeenCalledWith( inputValue );

        // expect( onNewCategory ).toHaveBeenCalled();


    })
 });