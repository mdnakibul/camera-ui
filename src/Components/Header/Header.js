import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <section className="bg-gray-800 flex items-center justify-center relative" style={{minHeight:"80vh"}}>
            <div className="header-content font-semibold text-5xl text-center text-white leading-relaxed">
                <h2>High Definition Picture</h2>
                <h2>No Compromise</h2>
                <div className="flex text-base font-normal justify-center mt-3">
                    <button className="default-button">Take The Tour</button>
                    <button className="default-button">Learn More</button>
                </div>
            </div>
            <div className="absolute -bottom-0">
                <span className="fas fa-angle-down text-white text-5xl "></span>
            </div>
        </section>

    );
};

export default Header;