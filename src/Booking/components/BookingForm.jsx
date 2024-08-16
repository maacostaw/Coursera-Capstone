import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import "./bookingForm.css";
import { TYPES } from "../Booking";

const BookingForm = ({ availableTimes, date, setDate, setFormResult, dispatchAvailableTimes }) => {

    const availableOccasions = [
        { id: 1, occasion: "Birthday" }, { id: 2, occasion: "Marriage" },
        { id: 3, occasion: "Anniversary" },
        { id: 4, occasion: "Casual Dinner" }
    ]

    const [time, setTime] = useState(availableTimes.lenght > 0 ? availableTimes[0].id : "")
    const [guests, setGuests] = useState(1);
    const [guestsError, setGuestsError] = useState(false)
    const [occasion, setOccasion] = useState(availableOccasions.length > 0 ? [0].occasion : "");

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormResult({ date: date, time: time, guests: guests, occasion: occasion })
    }

    useEffect(() => {
        if (parseInt(guests) == NaN || parseInt(guests) < 1) {
            setGuestsError(true)
        } else {
            setGuestsError(false)
        }
    }, [guests])

    useEffect(() => {
        const dates = window['fetchAPI'](new Date(date))
        dispatchAvailableTimes({ type: TYPES.REPLACE_LIST_ITEMS, list: dates })
    }, [date]);

    return (
        <div className="booking">
            <h1>Book a Table</h1>
            <form id="bookingForm">
                <label htmlFor="res-date">Choose date</label>
                <input
                    value={date}
                    type="date" id="res-date"
                    onChange={(e) => setDate(e.target.value)}
                />
                <span></span>
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time " value={time} onChange={(e) => setTime(e.target.value)}>
                    {availableTimes.filter(t => t.available).map(t =>
                        <option key={t.id} value={t.id}>{t.time}</option>
                    )}
                </select>
                <span></span>
                <label htmlFor="guests">Number of guests</label>
                <input
                    type="number"
                    placeholder="1"
                    min="1"
                    max="10"
                    id="guests"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                />
                <span>
                    {guestsError &&
                        <p>Number of guests is mandatory and must be greater or equal to 1 </p>
                    }
                </span>
                <label htmlFor="occasion">Occasion</label>
                <select value={occasion} id="occasion" onChange={(e) => setOccasion(e.target.value)}>
                    {availableOccasions.map(o =>
                        <option key={o.id} value={o.occasion}>{o.occasion}</option>
                    )}
                </select>
                <span></span>
                <input
                    form="bookingForm"
                    type="submit"
                    value="Make Your reservation"
                    onClick={handleSubmit}
                    aria-label="On Click"
                />
            </form>
        </div>
    )
}

BookingForm.propTypes = {
    availableTimes: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        time: PropTypes.string,
        available: PropTypes.bool,
    })),
    date: PropTypes.string,
    setDate: PropTypes.func,
    setFormResult: PropTypes.func,
    dispatchAvailableTimes: PropTypes.func
}


export default BookingForm;