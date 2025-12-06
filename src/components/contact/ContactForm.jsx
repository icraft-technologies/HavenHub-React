import React, { useState } from "react";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const ContactForm = ({ propertyId = null }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loader, setLoader] = useState(false);

  // handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // reset form
  const reset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);

    try {
      // Send to FormSubmit
      const formSubmitRes = await fetch(
        "https://formsubmit.co/ajax/tkhandekar@icrafttechnologies.com",
        {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const apiPayload = {
        ...formData,
        ...(propertyId ? { property_id: propertyId } : {}), // Add ONLY if not empty
      };

      //  Send to your Laravel API
      const apiRes = await fetch(`${API_BASE_URL}/enquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(apiPayload),
      });

      const apiData = await apiRes.json();

      // check API success
      if (apiRes.ok) {
        setSubmitted(true);
        reset();
      } else {
        console.error("API Error:", apiData);
      }

    } catch (error) {
      console.error("Error:", error);
    }

    setLoader(false);
  };


  return (
    <section className="dark:bg-darkmode lg:pb-24 pb-16 px-4">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
        <div className="grid md:grid-cols-12 grid-cols-1 gap-8 items-center">

          {/* Left Form Section */}
          <div className="col-span-6">
            <h2 className="max-w-72 text-[40px] leading-[1.2] font-bold mb-9">
              Get Online Consultation
            </h2>

            {submitted ? (
              <div className="p-5 bg-green-100 border border-green-300 rounded-lg text-green-700">
                Thank you! Your message has been sent successfully.
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-wrap w-full m-auto justify-between"
              >
                {/* Name */}
                <div className="w-full mx-0 my-2.5">
                  <label htmlFor="name" className="pb-3 inline-block text-17">
                    Full Name*
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full text-17 px-4 py-2.5 rounded-lg border-border border dark:border-dark_border dark:text-white dark:bg-darkmode transition-all duration-500 focus:border-primary dark:focus:border-primary focus:outline-0"
                  />
                </div>

                {/* Email */}
                <div className="w-full mx-0 my-2.5">
                  <label htmlFor="email" className="pb-3 inline-block text-17">
                    Email Address*
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full text-17 px-4 py-2.5 rounded-lg border-border border dark:border-dark_border dark:text-white dark:bg-darkmode transition-all duration-500 focus:border-primary dark:focus:border-primary focus:outline-0"
                  />
                </div>

                {/* Phone */}
                <div className="w-full mx-0 my-2.5">
                  <label htmlFor="phone" className="pb-3 inline-block text-17">
                    Phone Number*
                  </label>
                  <input
                    id="phone"
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full text-17 px-4 py-2.5 rounded-lg border-border border dark:border-dark_border dark:text-white dark:bg-darkmode transition-all duration-500 focus:border-primary dark:focus:border-primary focus:outline-0"
                  />
                </div>

                {/* Subject */}
                <div className="w-full mx-0 my-2.5">
                  <label htmlFor="subject" className="pb-3 inline-block text-17">
                    Subject*
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full text-17 px-4 py-2.5 rounded-lg border-border border dark:border-dark_border dark:text-white dark:bg-darkmode transition-all duration-500 focus:border-primary dark:focus:border-primary focus:outline-0"
                  />
                </div>

                {/* Message */}
                <div className="w-full mx-0 my-2.5">
                  <label htmlFor="message" className="pb-3 inline-block text-17">
                    Message*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full text-17 px-4 py-2.5 rounded-lg border-border border dark:border-dark_border dark:text-white dark:bg-darkmode transition-all duration-500 focus:border-primary dark:focus:border-primary focus:outline-0"
                  ></textarea>
                </div>

                <div className="mx-0 my-2.5 w-full">
                  <button
                    type="submit"
                    disabled={loader}
                    className={`bg-primary rounded-lg text-white py-4 px-8 mt-4 inline-block hover:bg-blue-700 transition ${loader ? "opacity-70 cursor-not-allowed" : ""
                      }`}
                  >
                    {loader ? "Sending..." : "Submit Message"}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Image Section */}
          <div className="col-span-6 h-[600px]">
            <img
              src="/assets/images/contact-page/contact.jpg"
              alt="Contact"
              className="w-full h-full object-cover rounded-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
