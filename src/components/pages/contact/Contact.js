import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

import './Contact.css';

export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_scx1tad', 'template_84mti8h', form.current, 'o1Fj91Cfq_XzDZjc4')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">
        CONTACT US
      </h1>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="name" placeholder="Your Full Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <input type="text" name="subject" placeholder="Email Subject" required />
        <textarea name="message" rows="10" placeholder="Your Message" required></textarea>
        <button type="submit" className="btn secondary">SEND MESSAGE</button>
      </form>
    </div>
  )
}