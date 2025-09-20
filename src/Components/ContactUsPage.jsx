import React from "react";
import "../CSS/ContactUsPage.css";

const ContactUs = () => {
  return (
    <div className="contactSection" id ="contactSection">
      <h1 className="contactTitle">Contact Me</h1>
      <div className="contactGrid">
        {/* Left Column - Contact Form */}
        <div className="contactForm">
          <form>
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" placeholder="Enter your full name" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />

            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" placeholder="Enter subject" />

            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Write your message" rows="6" required></textarea>

            <button type="submit" className="submitBtn">Send Message</button>
          </form>
        </div>

        {/* Right Column - Contact Info */}
        <div className="contactInfo">
          <h2>Get in Touch</h2>
          <p><strong>Address:</strong> Jaipur, Rajasthan, India</p>
          <p><strong>Phone:</strong> +91 - 79766 78211</p>
          <p><strong>Email:</strong> jaideepdaswani0838@gmail.com</p>
          <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/jaideepdaswani" target="_blank" rel="noreferrer">linkedin.com/in/jaideepdaswani</a></p>

          <h2>Location</h2>
          <div className="mapContainer">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.1485402803964!2d75.75378837569845!3d26.8670213766744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db501bec8994d%3A0xf8f809614281f210!2s45%2C%2055%2C%20Kiran%20Path%2C%20Mansarovar%20Sector%204%2C%20Mansarovar%2C%20Jaipur%2C%20Rajasthan%20302020!5e0!3m2!1sen!2sin!4v1758386036769!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

