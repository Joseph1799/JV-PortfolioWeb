import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import mailbg from "../../Assets/Images/MailBg.png";
import { onInsert } from "./js/contact";
import "./contact.css";
import Swal from "sweetalert2";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setmessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name || !email || !message) {
      Swal.fire({
        title: "Error!",
        text: "All fields are required",
        icon: "error",
      });
      return;
    }

    const contacto = { name, email, message };

    await onInsert(contacto);
    clearFields();
  };

  const clearFields = () => {
    setname("");
    setEmail("");
    setmessage("");
  };

  return (
    <div
      className="Contact-container"
      style={{ backgroundImage: `url(${mailbg})` }}
    >
      <a
        href="https://www.linkedin.com/in/joseph-vargas99/"
        target="_blank"
        rel="noopener noreferrer"
        className="link-button left-button"
      >
        <span>Linked</span>
        <FaLinkedin className="icon" />
      </a>
      <div data-aos="fade-up" className="contact-card">
        <div className="contact-form">
          <h2>Contact</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setname(e.target.value)}
              required
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setmessage(e.target.value)}
              required
            ></textarea>
            <div className="button-container">
              <button className="button-59" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
