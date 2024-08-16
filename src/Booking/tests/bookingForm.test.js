import { fireEvent, render, screen } from "@testing-library/react";
import Booking from "../Booking";
import { BrowserRouter } from 'react-router-dom';


test('Renders the BookingForm heading', () => {
    render(<BrowserRouter><Booking/></BrowserRouter>);
    const headingElement = screen.getByText(/Book a Table/i);
    expect(headingElement).toBeInTheDocument();
})

test('Verify the init of available dates', () => {

    const { container } = render(<BrowserRouter><Booking/></BrowserRouter>);
    
    expect(container.getElementsByClassName('bookingSlot').length).toBeGreaterThan(0);
})

test('Verify submit works', () => {
    render(<BrowserRouter><Booking/></BrowserRouter>);
    
    const btn = screen.getByText("Make Your reservation"); 

    fireEvent.click(btn);
    
    expect(global.window.location.pathname).toContain('/new-url');

})
