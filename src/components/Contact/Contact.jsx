import React from "react";
import "./Contact.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        {/* Left Side */}
        <div className="contact-info">
          <h2>Let's Connect</h2>

          <p>
            I am currently looking for internship or full-time opportunities as
            a Java Developer. Feel free to reach out for collaborations or just
            a friendly tech talk!
          </p>

          <div className="contact-item">
            <div className="icon-box">
              <FaEnvelope />
            </div>
            <div>
              <h4>EMAIL</h4>
              <span>anjali.chavan@example.com</span>
            </div>
          </div>

          <div className="contact-item">
            <div className="icon-box">
              <FaPhoneAlt />
            </div>
            <div>
              <h4>PHONE</h4>
              <span>+91 98765 43210</span>
            </div>
          </div>

          <div className="contact-item">
            <div className="icon-box">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h4>LOCATION</h4>
              <span>Pune, Maharashtra, India</span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="contact-form-box">
          <form>
            <div className="row">
              <div className="input-group">
                <label>NAME</label>
                <input type="text" placeholder="John Doe" />
              </div>

              <div className="input-group">
                <label>EMAIL</label>
                <input type="email" placeholder="john@example.com" />
              </div>
            </div>

            <div className="input-group">
              <label>SUBJECT</label>
              <input type="text" placeholder="Internship Opportunity" />
            </div>

            <div className="input-group">
              <label>MESSAGE</label>
              <textarea rows="6" placeholder="Your message here..."></textarea>
            </div>

            <button type="submit" className="send-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
