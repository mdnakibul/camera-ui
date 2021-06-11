import React from 'react';
import About from '../About/About';
import Header from '../Header/Header';
import Navigatin from '../Navigation/Navigatin';
import Services from '../Services/Services';

const Home = () => {
    return (
        <section>
            <Navigatin/>
            <Header/>
            <Services/>
            <About/>
        </section>
    );
};

export default Home;