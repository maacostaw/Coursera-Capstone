import React from "react";
import Header from "./components/Header";
import Nav from "../utils/Nav";
import Main from "./components/Main";
import Footer from "../utils/Footer";
import "./components/main.css";

const Home = () => {
    return (
        <>
            <Nav />
            <Header />
            <Main />
            <Footer />
        </>
    )
}

export default Home;