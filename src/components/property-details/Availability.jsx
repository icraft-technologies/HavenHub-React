import React from "react";
import { Link } from "react-router-dom"; // use React Router instead of Next.js Link

export default function Availability({ property }) {
  return (
    <div className="bg-[#F0F6FA] dark:bg-[#111929] lg:py-24 py-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <p className="mb-[16px] text-[24px] sm:text-[36px] justify-center flex font-bold">
          Available
        </p>
        <p className="mb-10 sm:mb-3.75 text-base sm:text-xl text-gray justify-center flex">
          Sometimes by accident, sometimes chunks as necessary.
        </p>

        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center px-4 gap-8">
          <div className="lg:w-1/3 w-full overflow-hidden shadow-lg">
            <table className="w-full text-center text-sm sm:text-lg text-gray">
              <tbody>
                <tr className="border-b border-border dark:border-dark_border">
                  <th className="py-2 sm:py-4 px-2 text-center">Residence</th>
                  <td className="py-2 sm:py-4 px-2 text-center">{property.name}</td>
                </tr>
                <tr className="border-b border-border dark:border-dark_border">
                  <th className="py-2 sm:py-4 px-2 text-center">Property Type</th>
                  <td className="py-2 sm:py-4 px-2 text-center">{property.type}</td>
                </tr>
                <tr className="border-b border-border dark:border-dark_border">
                  <th className="py-2 sm:py-4 px-2 text-center">Area (sq. ft)</th>
                  <td className="py-2 sm:py-4 px-2 text-center">{property.livingArea} <sup>sq ft</sup></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="lg:w-1/3 w-full overflow-hidden shadow-lg">
            <table className="w-full text-center text-sm sm:text-lg text-gray">
              <tbody>
                <tr className="border-b border-border dark:border-dark_border">
                  <th className="py-2 sm:py-4 px-2 text-center">No. of Beds</th>
                  <td className="py-2 sm:py-4 px-2 text-center">{property.beds}</td>
                </tr>
                <tr className="border-b border-border dark:border-dark_border">
                  <th className="py-2 sm:py-4 px-2 text-center">No. of Bathrooms</th>
                  <td className="py-2 sm:py-4 px-2 text-center">{property.bathrooms}</td>
                </tr>
                
                
                <tr className="border-b border-border dark:border-dark_border">
                  <th className="py-2 sm:py-4 px-2 text-center">City</th>
                  <td className="py-2 sm:py-4 px-2 text-center">{property.city}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="lg:w-1/3 w-full overflow-hidden shadow-lg">
            <table className="w-full text-center text-sm sm:text-lg text-gray">
              <tbody>
                <tr className="border-b border-border dark:border-dark_border">
                  <th className="py-2 sm:py-4 px-2 text-center">Rent Price (Monthly)</th>
                  <td className="py-2 sm:py-4 px-2 text-center">{property?.rent_price}</td>
                </tr>
                <tr className="border-b border-border dark:border-dark_border">
                  <th className="py-2 sm:py-4 px-2 text-center">Price</th>
                  <td className="py-2 sm:py-4 px-2 text-center">{property.property_price}</td>
                </tr>
                <tr className="border-b border-border dark:border-dark_border">
                  <th className="py-2 sm:py-4 px-2 text-center">Status</th>
                  <td className="py-2 sm:py-4 px-2 text-center">{property.status}</td>
                </tr>
                
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
}
