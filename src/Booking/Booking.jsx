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

    /*Wasn't possible to call this from script*/
    const seededRandom = (seed) => {
        var m = 2 ** 35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
          return (s = s * a % m) / m;
        };
      }
    
      const fetchAPI = (date) => {
        let result = [];
        let random = seededRandom(date.getDate());
    
        for (let i = 17; i <= 23; i++) {
          if (random() < 0.5) {
            result.push(i + ':00');
          }
          if (random() < 0.5) {
            result.push(i + ':30');
          }
        }
        return result;
      };
      const submitAPI = (formData) => {
        return true;
      };

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
        const dates = fetchAPI(new Date(date))
        dispatchAvailableTimes({type: TYPES.REPLACE_LIST_ITEMS, list:dates})
    }, [date]);

    const [formResult, setFormResult] = useState(null);

    useEffect(()=>{
        if(formResult != null){
            if(submitAPI(formResult)){
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