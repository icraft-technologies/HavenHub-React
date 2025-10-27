import React from "react";

const Location = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/contact", text: "Contact" },
  ];

  return (
    <>
      <section className="bg-primary lg:py-24 py-16 px-4">
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
          <div>
            {/* Pune Head Office */}
            <div className="grid md:grid-cols-6 lg:grid-cols-9 grid-cols-1 gap-7 border-b border-solid border-white border-opacity-50 pb-11">
              <div className="col-span-3">
                <h2 className="text-white text-4xl leading-[1.2] font-bold">
                  Pune Head Office
                </h2>
              </div>
              <div className="col-span-3">
                <p className="text-xl text-IceBlue font-normal max-w-64 text-white text-opacity-50">
                  4292 Mapleview Drive Greenfield Zip code 38230
                </p>
              </div>
              <div className="col-span-3">
                <a
                  href="mailto:headoffice@property.com"
                  className="text-xl text-white font-medium underline block"
                >
                  headoffice@property.com
                </a>
                <a
                  href="tel:731-621-5503"
                  className="text-xl text-white text-opacity-80 flex items-center gap-2 hover:text-opacity-100 w-fit"
                >
                  <span className="text-white !text-opacity-40">Call</span>
                  731-621-5503
                </a>
              </div>
            </div>

            {/* Bengaluru Office */}
            <div className="grid md:grid-cols-6 lg:grid-cols-9 grid-cols-1 gap-7 pt-12">
              <div className="col-span-3">
                <h2 className="text-white text-4xl leading-[1.2] font-bold">
                  Bengaluru Office
                </h2>
              </div>
              <div className="col-span-3">
                <p className="text-xl text-white text-opacity-50 font-normal max-w-64">
                  3502 Marcus Street Geraldine Zip code 35974
                </p>
              </div>
              <div className="col-span-3">
                <a
                  href="mailto:Office@property.com"
                  className="text-xl text-white font-medium underline block"
                >
                  Office@property.com
                </a>
                <a
                  href="tel:731-235-7993"
                  className="text-xl text-white text-opacity-80 flex items-center gap-2 hover:text-opacity-100 w-fit"
                >
                  <span className="text-white !text-opacity-40">Call</span>
                  731-235-7993
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
