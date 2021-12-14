import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from '@testing-library/user-event'
describe('Greeting Component',()=>{
    test("renders Hello World", async () => {
        //Arrange
        render(<Greeting/>);
        //Act nothing
    
        //Assert
        const helloWorldElement=  await screen.findByText(/Hello world!/)
        expect(helloWorldElement).toBeInTheDocument()
    });
    test('renders "good to see you " if button was not clicked',
    async ()=>{
        render(<Greeting/>)
        const outputElement=  await screen.findByText(/good to see you!/)
        expect(outputElement).toBeInTheDocument()
    });
    test('renders "Changed!" if button was clicked',
    async ()=>{
        render(<Greeting/>)
        //Action
        const buttonElement= screen.getByRole('button');
        userEvent.click(buttonElement);
        //Assert
        const outputElement=  await screen.findByText(/Change!/)
        expect(outputElement).toBeInTheDocument()
    })
    test('no render "good to see you" when click the cutton"',async ()=>{
        render(<Greeting/>);
        //action
        const changeButton=screen.getByRole('button');
        userEvent.click(changeButton);
        //assert
        const outElement= screen.queryByText(/good to see you/);
        expect(outElement).toBeNull();
    })
})


