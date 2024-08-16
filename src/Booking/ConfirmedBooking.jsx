import React from "react";
import Nav from "../utils/Nav";
import Footer from "../utils/Footer";
import './confirmedBooking.css'

const ConfirmedBooking = () => {
    return (
        <>
            <Nav />
            <div className="confirmedBooking">
                <h1>Booking has been confirmed!</h1>
            </div>
            <Footer />
        </>
    )
}

export default ConfirmedBooking;