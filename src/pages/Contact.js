import '../App.css';
import React from "react";
import LayoutComponent from '../components/LayoutComponent';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
      <LayoutComponent>
        <ContactForm />
      </LayoutComponent>
  );
};

export default Contact;