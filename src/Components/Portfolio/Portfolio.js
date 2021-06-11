import React from 'react';

const Portfolio = () => {
    return (
        <section id="portfolio" className="bg-gray-200">
            <div className="container mx-auto px-10 py-12">
                <div class="grid grid-cols-3 gap-4" style={{ gridTemplateRows: '320px 310px' }}>

                    <div class="col-span-2 bg-red-900 p-10 rounded">1</div>
                    <div class="row-span-2 bg-red-900 p-10 rounded">2</div>
                    <div class="bg-red-900 p-10 rounded">2</div>
                    <div class="bg-red-900 p-10 rounded">2</div>
                    <div class="row-span-2 bg-red-900 p-10 rounded">2</div>
                    <div class=" bg-red-900 p-10 rounded">2</div>
                    <div class="  bg-red-900 p-10 rounded">2</div>
                    <div class="col-span-2 bg-red-900 p-10 rounded">2</div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;