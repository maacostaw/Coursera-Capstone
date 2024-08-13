import React from "react";
import PersonIcon from '@mui/icons-material/Person';

const Card = ({ stars, text, userName }) => {
    return (
        <div className="card">
            <p>{"⭐".repeat(stars)}</p>
            <p>{text}</p>
            <div>
                <PersonIcon />
                <p>{userName}</p>
            </div>
        </div>
    );
}

const mockData = [
    {
        stars: 5,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        userName: "George Test",
    },
    {
        stars: 4,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        userName: "George Test",
    },
    {
        stars: 5,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        userName: "George Test",
    },
]

const MainTestimonials = () => {
    return (
        <div className="testimonials">
            <div className="testimonialsC">
                <h2 className="mainH2">Testimonials</h2>
                <div>
                    {mockData.map(mock =>
                        <Card
                            stars={mock.stars}
                            text={mock.text}
                            userName={mock.userName}
                        />
                    )}
                </div>
            </div>
        </div>
    )
};

export default MainTestimonials;