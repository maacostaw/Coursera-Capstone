import React from "react";
import Nav from "../utils/Nav";
import Footer from "../utils/Footer";
import "./booking.css";
import BookingForm from "./BookingForm";

const Booking = () => {
    return (
        <>
            <Nav />
            <div className="booking">
                <BookingForm />
            </div>
            <Footer />
        </>
    )
}

export default Booking;