import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { toast } from "react-toastify";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          toast.success("🎉 Message sent successfully!");
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          console.log(error);
          toast.error("❌ Failed to send message. Please try again.");
          setLoading(false);
        },
      );
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        {/* Left Side */}
        <div className="contact-info">
          <h2>Let's Connect</h2>

          <p>
            Currently seeking internship and full-time opportunities as a Java
            Full Stack or MERN Stack Developer. I'm excited to contribute to
            innovative projects, collaborate with development teams, and
            continuously grow as a software engineer.
          </p>

          <div className="contact-item">
            <div className="icon-box">
              <FaEnvelope />
            </div>
            <div>
              <h4>EMAIL</h4>
              <span>anjaliychavan6@gmail.com</span>
            </div>
          </div>

          <div className="contact-item">
            <div className="icon-box">
              <FaPhoneAlt />
            </div>
            <div>
              <h4>PHONE</h4>
              <span>+91 9022645718</span>
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
          <form ref={form} onSubmit={sendEmail}>
            <div className="row">
              <div className="input-group">
                <label>NAME</label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="input-group">
                <label>EMAIL</label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="Enter your email address"
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label>SUBJECT</label>
              <input
                type="text"
                name="subject"
                placeholder="Internship or Job Opportunity"
                required
              />
            </div>

            <div className="input-group">
              <label>MESSAGE</label>
              <textarea
                name="message"
                rows="6"
                placeholder="Your message here..."
                required
              ></textarea>
            </div>

            <button type="submit" className="send-btn" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
