import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    specialist: "",
    date: "",
    time: "",
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
      firstname: "",
      lastname: "",
      email: "",
      specialist: "",
      date: "",
      time: "",
    });
  };

  // handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);

    fetch("https://formsubmit.co/ajax/bhainirav772@gmail.com", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        setSubmitted(data.success);
        reset();
        setLoader(false);
      })
      .catch((error) => {
        console.error(error.message);
        setLoader(false);
      });
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
                Thank you! Your appointment request has been sent successfully.
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-wrap w-full m-auto justify-between"
              >
                <div className="sm:flex gap-3 w-full">
                  <div className="mx-0 my-2.5 flex-1">
                    <label
                      htmlFor="firstname"
                      className="pb-3 inline-block text-17"
                    >
                      First Name*
                    </label>
                    <input
                      id="firstname"
                      type="text"
                      name="firstname"
                      value={formData.firstname}
                      onChange={handleChange}
                      className="w-full text-17 px-4 rounded-lg py-2.5 border-border dark:border-dark_border border-solid dark:text-white dark:bg-darkmode border transition-all duration-500 focus:border-primary dark:focus:border-primary focus:outline-0"
                    />
                  </div>
                  <div className="mx-0 my-2.5 flex-1">
                    <label
                      htmlFor="lastname"
                      className="pb-3 inline-block text-17"
                    >
                      Last Name*
                    </label>
                    <input
                      id="lastname"
                      type="text"
                      name="lastname"
                      value={formData.lastname}
                      onChange={handleChange}
                      className="w-full text-17 px-4 py-2.5 rounded-lg border-border dark:border-dark_border border-solid dark:text-white dark:bg-darkmode border transition-all duration-500 focus:border-primary dark:focus:border-primary focus:outline-0"
                    />
                  </div>
                </div>

                <div className="sm:flex gap-3 w-full">
                  <div className="mx-0 my-2.5 flex-1">
                    <label htmlFor="email" className="pb-3 inline-block text-17">
                      Email address*
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full text-17 px-4 py-2.5 rounded-lg border-border dark:border-dark_border border-solid dark:text-white dark:bg-darkmode border transition-all duration-500 focus:border-primary dark:focus:border-primary focus:outline-0"
                    />
                  </div>
                  <div className="mx-0 my-2.5 flex-1">
                    <label
                      htmlFor="specialist"
                      className="pb-3 inline-block text-17"
                    >
                      Specialist*
                    </label>
                    <select
                      id="specialist"
                      name="specialist"
                      value={formData.specialist}
                      onChange={handleChange}
                      className="custom-select w-full text-17 px-4 py-2.5 rounded-lg border-border dark:text-white border-solid dark:bg-darkmode border transition-all duration-500 focus:border-primary dark:focus:border-primary dark:border-dark_border focus:outline-0"
                    >
                      <option value="">Choose a specialist</option>
                      <option value="Baking &amp; Pastry">Baking & Pastry</option>
                      <option value="Exotic Cuisine">Exotic Cuisine</option>
                      <option value="French Desserts">French Desserts</option>
                      <option value="Seafood &amp; Wine">Seafood & Wine</option>
                    </select>
                  </div>
                </div>

                <div className="sm:flex gap-3 w-full">
                  <div className="mx-0 my-2.5 flex-1">
                    <label htmlFor="date" className="pb-3 inline-block text-17">
                      Date*
                    </label>
                    <input
                      id="date"
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full text-17 px-4 rounded-lg py-2.5 outline-none dark:text-white dark:bg-darkmode border-border border-solid border transition-all duration-500 focus:border-primary dark:focus:border-primary dark:border-dark_border focus:outline-0"
                    />
                  </div>
                  <div className="mx-0 my-2.5 flex-1">
                    <label htmlFor="time" className="pb-3 inline-block text-17">
                      Time*
                    </label>
                    <input
                      id="time"
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full text-17 px-4 rounded-lg py-2.5 border-border outline-none dark:text-white dark:bg-darkmode border-solid border transition-all duration-500 focus:border-primary dark:focus:border-primary dark:border-dark_border focus:outline-0"
                    />
                  </div>
                </div>

                <div className="mx-0 my-2.5 w-full">
                  <button
                    type="submit"
                    disabled={loader}
                    className={`bg-primary rounded-lg text-white py-4 px-8 mt-4 inline-block hover:bg-blue-700 transition ${
                      loader ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {loader ? "Sending..." : "Make an appointment"}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Image Section */}
          <div className="col-span-6 h-[600px]">
            <img
              src="assets/images/contact-page/contact.jpg"
              alt="Contact"
              className="w-full h-full object-cover bg-no-repeat bg-contain rounded-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
