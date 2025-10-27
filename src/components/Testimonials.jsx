import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CustomCursor from "./CustomCursor";

// const testimonials = [
//   {
//     id: 1,
//     name: "Stephanie Sue",
//     designation: "Product Designer",
//     text: "Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing. Various versions have evolved over the years, sometimes.",
//     image: "/assets/images/testimonial/11.jpg", // Center avatar
//     position: "center", // special flag for center
//   },
//   {
//     id: 2,
//     name: "David Miller",
//     designation: "Software Engineer",
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
//     image: "/assets/images/testimonial/1.jpg",
//   },
//   {
//     id: 3,
//     name: "Emily Parker",
//     designation: "Marketing Head",
//     text: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//     image: "/assets/images/testimonial/2.jpg",
//   },
//   {
//     id: 4,
//     name: "Lucas Smith",
//     designation: "UX Researcher",
//     text: "Publishing software like Aldus PageMaker including versions of Lorem Ipsum have helped designers for decades.",
//     image: "/assets/images/testimonial/3.jpg",
//   },
//   {
//     id: 5,
//     name: "Anna Johnson",
//     designation: "Creative Director",
//     text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in classical Latin literature.",
//     image: "/assets/images/testimonial/4.jpg",
//   },
//   {
//     id: 6,
//     name: "John Adams",
//     designation: "Art Director",
//     text: "Lorem Ipsum passages have evolved over the years but still remain the industry's standard.",
//     image: "/assets/images/testimonial/5.jpg",
//   },
//   {
//     id: 7,
//     name: "Mia Cooper",
//     designation: "Copywriter",
//     text: "Various versions have evolved over the years, sometimes by accident, sometimes on purpose.",
//     image: "/assets/images/testimonial/6.jpg",
//   },
// ];

export default function Testimonials( { testimonials = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const containerSize = 500;  // bigger canvas area
  const radius = 210;         // pushes avatars further from center
  const avatarSize = 90;      // slightly larger avatars
  const haloSize = 200;

  return (
    <section className="px-4 md:px-0 dark:bg-darkmode">
      <div className="container lg:max-w-screen-xl md:max-w-screen-md px-8 mx-auto py-12 flex flex-col-reverse md:flex-row items-center justify-between relative overflow-hidden testimonial-section">
        <div className="flex justify-between w-full">
          {/* LEFT SIDE */}
          <CustomCursor />
          <div className="flex-1 lg:block hidden relative section-1" style={{marginLeft: '0px', marginRight: '40px', zIndex: '3'}} data-aos="fade-right">
            <div
              className="relative mx-auto flex items-center justify-center"
              style={{ width: containerSize, height: containerSize }}
            >
              {/* Static concentric circles */}
              <div className="full-circle"> </div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div
                  style={{
                    width: containerSize * 0.8,
                    height: containerSize * 0.8,
                  }}
                  className="rounded-full bg-gray-100"
                />
                <div
                  style={{
                    width: containerSize * 0.55,
                    height: containerSize * 0.55,
                  }}
                  className="absolute rounded-full bg-gray-50"
                />
              </div>

              {/* MOVING HALO EFFECT */}
              <motion.div
                className="absolute rounded-full bg-blue-100/60 blur-md"
                cursor-class="arrow"
                style={{
                  width: haloSize,
                  height: haloSize,
                  top: "50%",
                  left: "50%",
                  translate: "-50% -50%",
                  zIndex: 4,
                }}
                animate={{
                  x:
                    testimonials[activeIndex].position === "center"
                      ? 0
                      : Math.cos(
                        ((activeIndex - 1) /
                          (testimonials.length - 1)) *
                        2 *
                        Math.PI
                      ) * radius,
                  y:
                    testimonials[activeIndex].position === "center"
                      ? 0
                      : Math.sin(
                        ((activeIndex - 1) /
                          (testimonials.length - 1)) *
                        2 *
                        Math.PI
                      ) * radius,
                }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
              />

              {/* CENTER AVATAR */}
              {testimonials.map((t, index) => {
                const isCenter = t.position === "center";
                const isActive = activeIndex === index;

                // skip outer placement for center
                if (isCenter) {
                  return (
                    <motion.div
                      key={t.id}
                      className="absolute rounded-full overflow-hidden border-4 shadow-lg cursor-pointer"
                      style={{
                        width: 120,
                        height: 120,
                        borderColor: isActive ? "#3b82f6" : "#fff",
                        zIndex: 10,
                      }}
                      whileHover={{ scale: 1.08 }}
                      animate={{ scale: isActive ? 1.1 : 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 18 }}
                      onMouseEnter={() => setActiveIndex(index)}
                      onClick={() => setActiveIndex(index)}
                    >
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </motion.div>
                  );
                }

                // outer avatars
                const outerIndex = index - 1;
                const angle =
                  (outerIndex / (testimonials.length - 1)) * 2 * Math.PI;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <div
                    key={t.id}
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: `translate(${x - avatarSize / 2}px, ${y - avatarSize / 2
                        }px)`,
                      width: avatarSize,
                      height: avatarSize,
                    }}
                  >
                    <motion.div
                      className="relative rounded-full overflow-hidden shadow-md cursor-pointer border-2"
                      style={{
                        width: "100%",
                        height: "100%",
                        borderColor: isActive ? "#3b82f6" : "transparent",
                      }}
                      whileHover={{ scale: 1.12 }}
                      animate={{ scale: isActive ? 1.12 : 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 16 }}
                      onMouseEnter={() => setActiveIndex(index)}
                      onClick={() => setActiveIndex(index)}
                    >
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex-1 section-2" data-aos="fade-left">
            <img
              src="/assets/images/testimonial/quote.svg"
              alt="quote"
              className="mb-4 w-12 h-12"
            />

            {/* Fade/slide testimonial text */}
            <div className="h-[160px] overflow-hidden flex items-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="text-lg md:text-2xl text-gray mb-6 md:mb-12"
                >
                  {testimonials[activeIndex].description}
                </motion.p>
              </AnimatePresence>
            </div>

            <motion.p
              key={`name-${activeIndex}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: 0.4, // Delay until text is visible
              }}
              className="text-lg md:text-2xl"
            >
              {testimonials[activeIndex].name}
            </motion.p>
            <motion.p
              key={`role-${activeIndex}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: 0.8, // Delay after name
              }}
              className="text-gray text-lg md:text-xl"
            >
              {testimonials[activeIndex].designation}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
