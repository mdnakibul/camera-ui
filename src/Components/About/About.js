import React from 'react';
import './About.css'

const About = () => {
    return (
        <section id="about-us text-white">
            <div className="w-screen grid grid-cols-12 mx-auto">
                <div className="about-left px-4 py-8 col-span-5">
                    <div className="w-5/6 ml-auto py-5 text-white">
                        <h4 className="leading-loose">Capture Every Moment</h4>
                        <h4 className="capitalize leading-loose">where ever you are</h4>
                        <p className="py-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis repellendus nulla eaque tempore a id eius vitae maxime delectus ad.</p>
                        <div className="flex">
                            <div className="shop">
                                <h3>Shops</h3>
                                <p>2300</p>
                            </div>
                            <div className="branches">
                                <h3>Braches</h3>
                                <p>12000</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-right col-span-7 bg-red-900">

                </div>
            </div>
        </section>
    );
};

export default About;