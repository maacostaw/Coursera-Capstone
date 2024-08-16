import React, { useState, useEffect, useReducer } from "react";
import Nav from "../utils/Nav";
import Footer from "../utils/Footer";
import "./booking.css";
import BookingForm from "./components/BookingForm";
import BookingSlots from "./components/BookingSlots ";
import { useNavigate } from "react-router-dom";

const dateToDateInputValue = (date) => {
    date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
    return date.toJSON().slice(0, 10);
}

export const TYPES = {
    REPLACE_LIST_ITEMS: "REPLACE_LIST_ITEMS",
}

const Booking = () => {  

    const navigate = useNavigate();

    const updateTimes = (state, actions) => {
        switch (actions.type) {
            case TYPES.REPLACE_LIST_ITEMS:
                const dates = actions.list.map((date, index) => ({
                    id: index, time: date, available: true
                }))
                return dates
            default:
                return state;
        };
    }

    const [date, setDate] = useState(dateToDateInputValue(new Date()));
    const initialAvailableTimes = []
    const [availableTimes, dispatchAvailableTimes] = useReducer(updateTimes, initialAvailableTimes);

    useEffect(() => {
        const dates = window['fetchAPI'](new Date(date))
        dispatchAvailableTimes({type: TYPES.REPLACE_LIST_ITEMS, list:dates})
    }, [date]);

    const [formResult, setFormResult] = useState(null);

    useEffect(()=>{
        if(formResult != null){
            if(window['submitAPI'](formResult)){
                navigate("/confirmedBooking");
            }
        }
    },[formResult])

    return (
        <>
            <Nav />
            <div className="booking">
                <BookingSlots availableTimes={availableTimes} date={date} />
                <BookingForm
                    availableTimes={availableTimes}
                    date={date}
                    setDate={setDate}
                    setFormResult={setFormResult}
                    dispatchAvailableTimes={dispatchAvailableTimes}
                />
            </div>
            <Footer />
        </>
    )
}

export default Booking;