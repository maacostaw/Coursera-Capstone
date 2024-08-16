import React from "react";
import PropTypes from 'prop-types';
import "./bookingSlots.css";

const BookingSlots = ({ availableTimes, date }) => {
    return (
        <div className="bookingSlots">
            <h2>Available Times {date}</h2>
            {availableTimes.map(time =>
                <div key={time.id} className="bookingSlot">
                    {time.time}
                </div>
            )}
        </div>
    )
}

BookingSlots.propTypes = {
    availableTimes: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        time: PropTypes.string,
        available: PropTypes.bool,
    })),
    date: PropTypes.string
}

export default BookingSlots;