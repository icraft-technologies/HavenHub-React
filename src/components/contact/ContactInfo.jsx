import React from "react";

const ContactInfo = ({contact=null}) => {
  return (
    <>
      <section className="dark:bg-darkmode pt-8 pb-0 px-4">
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
          <div className="flex md:flex-row flex-col lg:items-center items-start justify-center md:gap-28 gap-8">
            
            {/* Email Section */}
            <div className="flex sm:flex-row flex-col items-start sm:gap-8 gap-4">
              <div className="bg-primary/20 w-3.75 h-3.75 flex items-center justify-center rounded-full">
                <i className=" bg-no-repeat bg-contain w-8 h-8 inline-block" style={{'background-image': 'url(assets/images/contact-page/email.svg)'}}></i>
              </div>
              <div className="flex md:flex-col sm:flex-row flex-col md:items-start sm:items-center items-start h-full justify-between">
                <div>
                  <span className="text-midnight_text dark:text-white text-xl font-bold">
                    Email Us
                  </span>
                  <p className="text-midnight_text/70 font-normal text-xl max-w-80 pt-3 pb-7 dark:text-gray">
                    Feel free to contact us at <a href={`mailto:${contact?.email}`} className="text-gray hover:text-primary"> {contact?.email}</a> — we’ll respond promptly.
                  </p>
                </div>
              </div>
            </div>

            {/* Address Section */}
            <div className="flex sm:flex-row flex-col items-start sm:gap-8 gap-4">
              <div className="bg-primary/20 w-3.75 h-3.75 flex items-center justify-center rounded-full">
                <i className="bg-no-repeat bg-contain w-9 h-9 inline-block" style={{'background-image': 'url(assets/images/contact-page/Career.svg)'}}></i>
              </div>
              <div className="flex md:flex-col sm:flex-row flex-col md:items-start sm:items-center items-start h-full justify-between">
                <div>
                  <span className="text-midnight_text dark:text-white text-xl font-bold">
                    Address
                  </span>
                  <p className="text-midnight_text/70 font-normal text-xl max-w-80 pt-3 pb-7 dark:text-gray">
                    {contact?.address}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="md:pt-32 pt-11 md:pb-28 pb-8">
            <iframe
              src={`https://www.google.com/maps?q=${contact?.latitude},${contact?.longitude}&hl=en&z=15&output=embed`}
              width="1114"
              height="477"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg w-full"
              title="Google Map Location"
            ></iframe>
          </div>
        </div>
        <div className="border-b border-solid border-border dark:border-dark_border"></div>
      </section>
    </>
  );
};

export default ContactInfo;
