import React from "react";
import "./footer.css"

const Footer = () => {
    return(
        <footer>
            <div className="footerC">
                <div>
                    <div className="footerImageC"></div>
                </div>
                <div>
                    <p className="mainP">Doormat Navigation</p>
                    <p className="mainP">Home</p>
                    <p className="mainP">About</p>
                    <p className="mainP">Menu</p>
                    <p className="mainP">Reservations</p>
                    <p className="mainP">Order Online</p>
                    <p className="mainP">Login</p>
                </div>
                <div>
                    <p className="mainP">Contact</p>
                    <p className="mainP">11 Wall St, New York, NY 10005</p>
                    <p className="mainP">+1 212-656-3000</p>
                    <p className="mainP">littlelemon@gmail.com</p>
                </div>
                <div>
                    <p className="mainP">Social Media</p>
                    <p className="mainP">Facebook</p>
                    <p className="mainP">Instagram</p>
                    <p className="mainP">Twitter</p>
                </div>
            </div>
        </footer>
    )
};

export default Footer;