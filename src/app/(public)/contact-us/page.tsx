import ContactForm from "@/components/contact-page/contact-form/contact-form";
import Map from "@/components/contact-page/map/map";
import React from "react";

const ContactUsPage = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <Map />
      <ContactForm />
    </section>
  );
};

export default ContactUsPage;
