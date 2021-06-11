import React from 'react';

const Featured = () => {
    return (
        <section id="featured" className="my-8">
            <div className="container mx-auto grid grid-cols-2 place-items-center">
                <div className="featured-left my-5 px-5">
                    <h3 className="capitalize">remember every moment,</h3>
                    <h3 className="capitalize">take great picture</h3>
                    <p className="my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum asperiores sed dolorem excepturi temporibus dolores laudantium blanditiis at consectetur qui.</p>
                    <p className="my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum asperiores sed dolorem excepturi temporibus dolores laudantium blanditiis at consectetur qui.</p>
                    <button className="default-button block mx-auto">Take A Tour <span className="fas fa-arrow-right"></span> </button>
                </div>
                <div className="featured-right">
                    <div className="box bg-red-900 block m-auto w-96 h-96">

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Featured;