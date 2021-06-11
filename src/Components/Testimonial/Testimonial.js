import React from 'react';
import man from '../../images/man.png'
const Testimonial = () => {
    return (
        <section id="testimonial">
            <div className="w-screen grid grid-cols-12 ">
                <div className="testimonial-left col-span-5 text-center bg-gray-400 pt-12">
                    <img src={man} alt="man" className="m-auto" />
                </div>
                <div className="col-span-7 bg-gray-500 flex justify-center flex-col pl-10 pr-20 text-white text-2xl">
                    <p className="text-justify mr-10 leading-loose">
                    Honestly this guys are the best people around to work with.They are super commited, delivering exceptional work always.They are super commited, delivering exceptional work always.
                    </p>
                    <div>
                        <h4>Ali Sayed</h4>
                        <p><small>Creative Artist</small></p>
                        <p><small>StandArt company</small></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;