import React from 'react';
import About from '../About/About';
import Featured from '../Featured/Featured';
import Header from '../Header/Header';
import Navigatin from '../Navigation/Navigatin';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <section>
            <Navigatin/>
            <Header/>
            <Services/>
            <About/>
            <Featured/>
            <Testimonial/>
        </section>
    );
};

export default Home;