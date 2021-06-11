import React from 'react';
import camera1 from '../../images/canera-icon.png';
import camera2 from '../../images/camera-icon-2.png';
import videoIcon from '../../images/video-icon.png'

const Services = () => {
    return (
        <div className="container grid grid-cols-3 gap-4 py-8 mx-auto">
            <div className="service-block text-center">
                <img src={camera1} alt="camera" className="inline"/>
                <h3 className="py-4">Take Awesome Pictures</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id blanditiis alias, velit et perspiciatis nobis non obcaecati hic dolorem dolor!</p>
                
            </div>
            <div className="service-block text-center">
                <img src={videoIcon} alt="camera" className="inline"/>
                <h3 className="py-4">Take Awesome Pictures</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id blanditiis alias, velit et perspiciatis nobis non obcaecati hic dolorem dolor!</p>
            </div>
            <div className="service-block text-center">
                <img src={camera2} alt="camera" className="inline"/>
                <h3 className="py-4">Take Awesome Pictures</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id blanditiis alias, velit et perspiciatis nobis non obcaecati hic dolorem dolor!</p>
            </div>
        </div>
    );
};

export default Services;