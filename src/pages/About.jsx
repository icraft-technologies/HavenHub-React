import React from "react";
import HeroSub from "../components/shared/HeroSub";

const Contact = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/abouts", text: "About Us" },
  ];

  return (
    <>
      <HeroSub
        title="About Us"
        description="Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing Variou"
        breadcrumbLinks={breadcrumbLinks}
      />

      <section className="dark:bg-darkmode pt-8 pb-0 px-4">
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
          <div className="flex md:flex-row flex-col lg:items-center items-start justify-center md:gap-28 gap-8">
            <div className="flex sm:flex-row flex-col items-start sm:gap-8 gap-4">
              <div className="bg-primary/20 w-3.75 h-3.75 flex items-center justify-center rounded-full">
                <i className=" bg-no-repeat bg-contain w-8 h-8 inline-block" style={{'background-image': 'url(assets/images/contact-page/email.svg)'}}></i>
              </div>
              <div className="flex md:flex-col sm:flex-row flex-col md:items-start sm:items-center items-start h-full justify-between">
                <div>
                  <span className="text-midnight_text dark:text-white text-xl font-bold">
                    Our Mission
                  </span>
                  <p className="text-midnight_text/70 font-normal text-xl max-w-80 pt-3 pb-7 dark:text-gray">
                    We aim to simplify property discovery and management by
                    providing reliable insights, transparent listings, and a
                    seamless experience for everyone.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex sm:flex-row flex-col items-start sm:gap-8 gap-4">
              <div className="bg-primary/20 w-3.75 h-3.75 flex items-center justify-center rounded-full">
                <i className="bg-no-repeat bg-contain w-9 h-9 inline-block" style={{'background-image': 'url(assets/images/contact-page/Career.svg)'}}></i>
              </div>
              <div className="flex md:flex-col sm:flex-row flex-col md:items-start sm:items-center items-start h-full justify-between">
                <div>
                  <span className="text-midnight_text dark:text-white text-xl font-bold">
                    Our Vision
                  </span>
                  <p className="text-midnight_text/70 font-normal text-xl max-w-80 pt-3 pb-7 dark:text-gray">
                    To become the most trusted platform where people can find,
                    list, and manage properties with complete confidence and
                    ease.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Optional Team / Image Section */}
          <div className="md:pt-32 pt-11 md:pb-28 pb-8">
            <img
              src="assets/images/tabbar/tab-3.jpg"
              alt="About Us"
              className="rounded-lg w-full h-[477px] object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div className="border-b border-solid border-border dark:border-dark_border"></div>
      </section>

      {/* Our Story / Values Section */}
      <section className="dark:bg-darkmode lg:pb-24 pb-16 px-4">
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-8 items-center">
            <div className="col-span-6">
              <h2 className="max-w-72 text-[40px] leading-[1.2] font-bold mb-9">
                Our Story
              </h2>
              <p className="text-midnight_text/70 dark:text-gray text-xl leading-relaxed mb-5">
                Founded in 2020, PropertyPro was built on the idea that
                discovering a home or workspace should be effortless. Our
                platform connects users with verified listings and data-backed
                insights to make smarter property decisions.
              </p>
              <p className="text-midnight_text/70 dark:text-gray text-xl leading-relaxed">
                We’re a passionate team of developers, designers, and real
                estate experts driven by innovation and user trust.
              </p>
            </div>

            <div className="col-span-6 h-[600px]">
              <img
                alt="Our Office"
                loading="lazy"
                className="w-full h-full object-cover bg-no-repeat bg-contain rounded-lg"
                src="assets/images/tabbar/tab-2.jpg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
