import React from "react";

//Component
import Layout from "../Main Component/Layout";
import ContactForm from "../Common/ContactForm";

import ContactBG from "../Assets/contact-bg-1.jpg";

function Contact() {
  return (
    <>
      <Layout>
        <section className="contact-section">
          <h2>Contact us</h2>
          <h1>LET'S GET IN TOUCH</h1>

          <div className="form-wrapper">
            {/* <div className="left">
              <img src={ContactBG} alt="" />
            </div> */}
            <div className="right">
              <ContactForm />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default Contact;
