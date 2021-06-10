import React from 'react';
import Header from '../Header/Header';
import Navigatin from '../Navigation/Navigatin';
import Services from '../Services/Services';

const Home = () => {
    return (
        <section>
            <Navigatin/>
            <Header/>
            <Services/>
        </section>
    );
};

export default Home;