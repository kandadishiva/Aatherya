import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Slider from "../../components/Slider/Slider";
import About from "../../components/About/About";
import Count from "../../components/Count/Count";
import Testimonial from "../../components/Testimonials/Testimonial";
import Gallery from "../../components/Gallery/Gallery";
import Apply from "../../components/Apply/Apply";
import Programs from "../../components/Programs/Programs";
import Footer from "../../components/contact/ContactUs";
import './Home.css';

const Home = () => {
    return (
        <div className="Home">
            <Navbar/>
            <Slider />
            <About />
            <Count />
            <Testimonial />
            <Programs />
            <Gallery />
            <Apply />
            <Footer />
        </div>
    );
}

export default Home;