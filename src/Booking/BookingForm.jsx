import React, { useState } from "react";
import "./bookingForm.css";

const BookingForm = () => {

    const dateToDateInputValue = (date) => {
        date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
        return date.toJSON().slice(0, 10);
    }

    const availableTimes = [
        { id: 1, time: "17:00" }, { id: 2, time: "18:00" }, { id: 3, time: "19:00" },
        { id: 4, time: "20:00" }, { id: 5, time: "21:00" }, { id: 6, time: "22:00" }
    ]

    const availableOccasions = [
        { id: 1, occasion: "Birthday" }, { id: 2, occasion: "Marriage" }, { id: 3, occasion: "Anniversary" },
        { id: 4, occasion: "Casual Dinner" }
    ]

    const [date, setDate] = useState(dateToDateInputValue(new Date()));
    const [time, setTime] = useState(availableTimes[0].time);
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState(availableOccasions[0].occasion);

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(date)
        console.log(time)
        console.log(guests)
        console.log(occasion)
    }

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
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time " value={time} onChange={(e) => setTime(e.target.value)}>
                    {availableTimes.map(t => <option key={t.id} value={t.time}>{t.time}</option>)}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input
                    type="number"
                    placeholder="1"
                    min="1"
                    max="10"
                    id="guests"
                    onChange={(e) => setGuests(e.target.value)}
                />
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" onChange={(e) => setOccasion(e.target.value)}>
                    {availableOccasions.map(o => <option key={o.id} value={o.occasion}>{o.occasion}</option>)}
                </select>
                <input
                    form="bookingForm"
                    type="submit"
                    value="Make Your reservation"
                    onClick={handleSubmit}
                />
            </form>
        </div>
    )

}

export default BookingForm;