import React, { FormEvent, useRef } from 'react';
import './Contact.scss';
import { AiOutlineMail } from 'react-icons/ai';
import { SiMessenger } from 'react-icons/si';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const formSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_5tzvw44',
      'template_uzv0ucd',
      formRef.current === null ? '' : formRef.current,
      'R7nxVhFw4TpPkDyuo'
    );
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>tonguyentiendat@gmail.com</h5>
            <a href="mailto:tonguyentiendat@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <SiMessenger className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Tiến Đạt</h5>
            <a href="https://www.facebook.com/profile.php?id=100058054046996">
              Send a message
            </a>
          </article>
        </div>
        {/* END OF  CONTACT */}
        <form ref={formRef} onSubmit={formSubmitHandler}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            id=""
            rows={7}
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn--primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
export default Contact;
