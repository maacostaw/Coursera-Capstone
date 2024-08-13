import React, { useState, useEffect } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import useWindowSize from "../hooks/useWindowSize";
import './nav.css';
import { useNavigate } from "react-router-dom";

const Headers = () => {
    return (
        <>
            <meta name="description" content="your text goes here" />
            <meta name="og:title" content="" />
            <meta name="og:description" content="" />
            <meta name="og:image" content="" />
        </>
    )
}

const NavItems = () => {
    return (
        <>
            <div className="item">Home</div>
            <div className="item">About</div>
            <div className="item">Menu</div>
            <div className="item">Reservations</div>
            <div className="item">Order Online</div>
            <div className="item">Login</div>
        </>
    )
}

const Nav = () => {

    const navigate = useNavigate();

    const [visibleNav, setVisibleNav] = useState(false);

    const toggleVisibleNav = () => {
        setVisibleNav(!visibleNav);
    }

    const windowSize = useWindowSize();

    useEffect(() => {
        if (windowSize && windowSize.width > 992) {
            setVisibleNav(false);
        }
    }, [windowSize]);

    return (
        <>
            <Headers />
            <nav>
                <div className="navC">
                    <div className="navMainBar">
                        <div className="navImageC">
                            <img
                                onClick={() => navigate("/")}
                                alt="logo"
                                src="/Asset 16@4x.png"
                            />
                        </div>
                        <div className="navItemsDesktopC">
                            <NavItems />
                        </div>
                        <div className="navIconC">
                            <MenuIcon onClick={() => toggleVisibleNav()} />
                        </div>
                    </div>
                    <div
                        className="navItemsMobileC"
                        style={{ "maxHeight": visibleNav ? "unset" : "0" }}
                    >
                        <NavItems />
                    </div>
                </div>

            </nav>
        </>

    )
};

export default Nav;