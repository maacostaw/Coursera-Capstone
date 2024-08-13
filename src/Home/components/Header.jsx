import React from "react";
import "./header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    return (
        <header>
            <div className="headerC">
                <div>
                    <h1 className="mainH1">Little Lemon</h1>
                    <div className="headerImageC"></div>
                </div>
                <div>
                    <h1 className="mainH1">Little Lemon</h1>
                    <div>
                        <h2 className="mainH2">Chicago</h2>
                        <p className="mainP">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                    <button
                        onClick={() => navigate("/booking")}
                        className="main-button"
                    >
                        Reserve a Table
                    </button>
                </div>
            </div>
        </header>
    )
};

export default Header;