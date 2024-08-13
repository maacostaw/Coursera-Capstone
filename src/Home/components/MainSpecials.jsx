import React from "react";

const Card = ({ imgUrl, title, price, text }) => {
    return (
        <div className="card">
            <div style={{ "backgroundImage": `url("${imgUrl}")` }}></div>
            <div>
                <p>{title}</p>
                <p>{price}</p>
            </div>
            <p>{text}</p>
            <p>Order a delivery 🏍</p>
        </div>
    );
}


const mockData = [
    {
        id:1,
        imgUrl: "/lemon dessert.jpg",
        title: "Greek Salad",
        price: "$12.99",
        text: "Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id:2,
        imgUrl: "/fish.jpg",
        title: "Greek Salad",
        price: "$12.99",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id:3,
        imgUrl: "/greek salad.jpg",
        title: "Greek Salad",
        price: "$12.99",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
]

const MainSpecials = () => {
    return (
        <div className="specials">
            <div className="specialsC">
                <div>
                    <h2>Specials</h2>
                    <button className="main-button">Online Menu</button>
                </div>
                <div>
                    {mockData.map(mock =>
                        <Card key = {mock.id}
                            imgUrl={mock.imgUrl}
                            title={mock.title}
                            price={mock.price}
                            text={mock.text}
                        />
                    )}
                </div>
                <div>
                    <button className="main-button">Online Menu</button>
                </div>
            </div>

        </div>
    )
};

export default MainSpecials;