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

      <h1 style={{textAlign:'center', margin:'200px'}}>COIMMING SOON</h1>
    </>
  );
};

export default Contact;
