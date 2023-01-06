import React from "react";
import Footer from "../../src/components/footer";
import Header from "../../src/components/header";

export interface ContactPageProps {}

const ContactPage = (props: ContactPageProps) => {
  return (
    <div>
      <Header />
      <h1>Contact Page</h1>
      <Footer />
    </div>
  );
};

export default ContactPage;
