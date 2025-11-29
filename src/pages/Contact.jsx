import React, { useEffect, useState } from 'react'
import HeroSub from "../components/shared/HeroSub";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import Location from "../components/contact/OfficeLocation";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Contact = () => {
  const token = localStorage.getItem('token');
  const [pageData, setPageData] = useState(null)
  useEffect(() => {
    fetch(`${API_BASE_URL}/pagedata`, {
      headers: token
        ? { Authorization: `Bearer ${token}` }
        : {}
    })
      .then((response) => response.json())
      .then((data) => {
        setPageData(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching page data:', error)
        setLoading(false)
      })
  }, []);

  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/contact", text: "Contact" },
  ];

  return (
    <>
      <HeroSub
        title="Contact Us"
        description="Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing Variou"
        breadcrumbLinks={breadcrumbLinks}
      />
      <ContactInfo contact={pageData?.contact} />
      <ContactForm />
      <Location contact={pageData?.contact}/>
    </>
  );
};

export default Contact;
