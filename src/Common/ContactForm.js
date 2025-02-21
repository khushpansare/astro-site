import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("Form data submitted:", formData);
  };

  return (
    <>
      <div className="contact-form-content">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              required
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              required
            />
          </div>
          <div className="form-row">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              required
            />
          </div>
          <div className="form-row">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </>
  );
}

export default ContactForm;
