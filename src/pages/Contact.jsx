import React from "react";
import FormContact from "../components/form-contact/FormContact";
import { title } from "../styles/styles";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return <>
  <div className="h-[90vh] lg:h-[80vh]">
    <Helmet>
      <title>Contact - Andika Riztanta Previan</title>
      <meta name="description" content="Should you be interested in my capabilities, please feel free to contact me." />
      <link rel="canonical" href="/contact" />
    </Helmet>
    <div className="container mx-auto w-full h-full flex flex-col justify-evenly items-center mb-5 sm:mb-0">
      <div className="w-full h-full flex flex-col justify-end md:justify-center items-center mb-10 sm:mb-0">
        {/* Title Content */}
        <div className="flex flex-col justify-center items-center space-y-5">
          <h4 className={`mb-4 sm:mb-0 ${title}`} data-aos="fade-out" data-aos-duration="1500" data-aos-offset="200">Contact</h4>
          <p className="w-full md:w-2/3 text-center text-sm sm:text-lg select-none" data-aos="fade-out" data-aos-duration="1800" data-aos-offset="200">Should you be interested in my capabilities, please feel free to contact me.</p>
        </div>
        {/* Form */}
        <FormContact />
      </div>
    </div>
  </div>
  </>;
};

export default Contact;
