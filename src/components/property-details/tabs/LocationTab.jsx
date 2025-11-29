import React from "react";

export default function LocationTab({location = null, latitude = null, longitude = null}) {
    return (
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center px-4 gap-8">
            {/* Left Content */}
            <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-midnight_text dark:text-white">
                    Explore the Location
                </h2>

                <p className="my-6 text-gray text-lg leading-relaxed">
                    Located in the heart of New York, Vista Residence offers easy access
                    to major attractions, parks, restaurants, and shopping centers. With
                    great connectivity, it's an ideal location for modern urban living.
                </p>
                <div className="flex sm:flex-row flex-col items-start sm:gap-8 gap-4">
                    <div className="bg-primary/20 w-3.75 h-3.75 flex items-center justify-center rounded-full">
                        <i className="bg-no-repeat bg-contain w-9 h-9 inline-block" style={{ 'background-image': 'url(/assets/images/contact-page/Career.svg)' }}></i>
                    </div>
                    <div className="flex md:flex-col sm:flex-row flex-col md:items-start sm:items-center items-start h-full justify-between">
                        <div>
                            <span className="text-midnight_text dark:text-white text-xl font-bold">
                                Address
                            </span>
                            <p className="text-midnight_text/70 font-normal text-xl max-w-80 pt-3 pb-7 dark:text-gray">
                                {location}
                            </p>
                        </div>
                    </div>
                </div>


            </div>

            {/* Right Map Section */}
            <div className="lg:w-1/2 w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
                <iframe
                    title="Vista Residence Location"
                    src={`https://www.google.com/maps?q=${latitude},${longitude}&hl=en&z=15&output=embed`}
                    width="100%"
                    height="450px"
                    allowFullScreen=""
                    loading="lazy"
                    className="rounded-lg border-0"
                ></iframe>
            </div>
        </div>
    );
}
