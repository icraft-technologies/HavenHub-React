import React, { useState } from "react";
import { Icon } from "@iconify/react";
import AmenitiesTab from "./tabs/AmenitiesTab";
import GalleryTab from "./tabs/GalleryTab";
import LocationTab from "./tabs/LocationTab";

// Tab content type (for clarity)
const content = {
  "Amenities": {
    title: "Values of smart living in Vista Residence, NY",
    description:
      "Sometimes by accident, sometimes chunks as necessary making this the first true generator on the Internet.",
    features: ["Wellness & Spa", "Fitness", "Conference", "Library", "Restaurant", "Bars"],
    image: "/assets/images/tabbar/tab-1.jpg",
  },
  "Gallery": {
    title: "Project Park Overview",
    description:
      "Sometimes by accident, sometimes chunks as necessary making this the first true generator on the Internet.",
    features: ["Gardens", "Playgrounds", "Walking Trails"],
    image: "/assets/images/tabbar/tab-2.jpg",
  },
  "Location": {
    title: "Explore the Gallery",
    description:
      "Sometimes by accident, sometimes chunks as necessary making this the first true generator on the Internet.",
    features: ["Art Exhibitions", "Cultural Events"],
    image: "/assets/images/tabbar/tab-3.jpg",
  },
  "Project Villa": {
    title: "Luxury Villas",
    description:
      "Sometimes by accident, sometimes chunks as necessary making this the first true generator on the Internet.",
    features: ["Private Pools", "Gourmet Kitchens", "Spacious Living Areas"],
    image: "/assets/images/tabbar/tab-4.jpg",
  },
};

const tabs = [
  { label: "Amenities", icon: "mdi:home" },
  { label: "Gallery", icon: "mdi:building" },
  { label: "Location", icon: "mdi:store" },
];

// Utility function to chunk an array
const chunkArray = (array, chunkSize) => {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

export default function Tabbar({ property }) {
  const [activeTab, setActiveTab] = useState("Amenities");

  // const handleTabChange = (tab) => {
  //   setActiveTab(tab);
  // };
  const renderTabContent = () => {
    switch (activeTab) {
      case "Amenities":
        return <AmenitiesTab amenities={property?.amenities || []}/>;
      case "Gallery":
        return <GalleryTab images={property?.gallery_images || []}/>;
      case "Location":
        return <LocationTab location={property?.address || null} latitude={property?.latitude || null} longitude={property?.longitude || null}/>;
      default:
        return null;
    }
  };

  return (
    <section className="dark:bg-darkmode">
      <div className="max-w-screen-xl mx-auto">
        {/* Tab Header */}
        <div className="flex flex-wrap justify-center gap-1" role="tablist">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(tab.label)}
              className={`px-4 py-2 text-lg rounded-t-md focus:outline-none flex items-center justify-center
                ${
                  activeTab === tab.label
                    ? "text-primary border-b-2 border-primary"
                    : "text-gray transition duration-300 hover:text-primary"
                }`}
            >
              <span className="hidden sm:flex">{tab.label}</span>
              <span className="sm:hidden">
                <Icon icon={tab.icon} />
              </span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="rounded-b-lg rounded-tr-lg mt-8">{renderTabContent()}</div>
      </div>
    </section>
  );
}
