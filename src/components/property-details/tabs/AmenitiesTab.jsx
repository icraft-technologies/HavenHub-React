import React from "react";


const chunkArray = (array, size) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
        chunks.push(array.slice(i, i + size));
    }
    return chunks;
};

export default function AmenitiesTab({amenities}) {
    const features = amenities;
    return (
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center">
            {/* Left Content */}
            <div className="lg:w-1/2 px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-midnight_text dark:text-white">
                    Values of smart living in Vista Residence, NY
                </h2>
                <p className="my-6 text-gray text-lg leading-relaxed">
                    Sometimes by accident, sometimes chunks as necessary making this the first true generator
                    on the Internet.
                </p>

                <table className="w-full text-base text-gray">
                    <tbody>
                        {chunkArray(features, 3).map((row, i) => (
                            <tr key={i}>
                                {row.map((feature, j) => (
                                    <td key={j} className="pr-4 py-2">
                                        <div className="flex items-center">
                                            <svg
                                                className="w-4 h-4 mr-2"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M9 5l7 7-7 7"
                                                ></path>
                                            </svg>
                                            {feature.name}
                                        </div>
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Right Image */}
            <div className="lg:w-1/2 h-[450px] px-4 mt-8 lg:mt-0">
                <img
                    src="/assets/images/tabbar/tab-1.jpg"
                    alt="Amenities"
                    className="rounded-lg w-full h-full object-cover"
                />
            </div>
        </div>
    );
}
