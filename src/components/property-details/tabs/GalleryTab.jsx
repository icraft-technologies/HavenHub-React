import React, { useState } from "react";

export default function GalleryTab({ images }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const showPrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const showNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* Title */}
      <div className="text-center lg:text-left mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-midnight_text dark:text-white">
          Project Park Overview
        </h2>
        <p className="mt-4 text-gray text-lg max-w-2xl mx-auto lg:mx-0">
          Enjoy the visuals of our modern architecture and community lifestyle.
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group h-[450px] cursor-pointer"
            onClick={() => openLightbox(i)}
          >
            <img
              src={img.image_url}
              alt={`Gallery ${i + 1}`}
              className="rounded-lg w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-5 right-5 text-white text-3xl font-bold z-50"
            onClick={closeLightbox}
            style={    {'left': '90%',    'top': '2%',    'transform': 'translate(-50%, -50%)'}}
          >
            &times;
          </button>
          <button
            className="absolute left-5 text-white text-3xl font-bold z-50"
            onClick={showPrev}
            style={    {'right': '90%',    'top': '50%',    'transform': 'translate(-50%, -50%)'}}
          >
            &#10094;
          </button>
          <img
            src={images[currentIndex].image_url}
            className="max-h-full max-w-full object-contain"
            alt="Full"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-5 text-white text-3xl font-bold z-50"
            onClick={showNext}
            style={    {'left': '90%',    'top': '50%',    'transform': 'translate(-50%, -50%)'}}
          >
            &#10095;
          </button>
        </div>
      )}
    </div>
  );
}
