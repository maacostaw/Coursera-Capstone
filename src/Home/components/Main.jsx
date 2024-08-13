import React from "react";
import "./main.css";
import MainSpecials from "./MainSpecials";
import MainTestimonials from "./MainTestimonials";
import MainAboutUs from "./MainAboutUs";

const Main = () => {
    return (
        <main>
            <MainSpecials />
            <MainTestimonials />
            <MainAboutUs />
        </main>
    )
}

export default Main;