import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_q5bap49', 'template_2d5k3to', form.current, 'Oo2wpuhz0sm8Vq59I')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h6>ranafurqan170@gmail.com</h6>
            <a href='mailto:ranafurqan170@gmail.com' target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Rana Furqan</h5>
            <a href='https://m.me/rana.furqan.77920526' target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+923045632005</h5>
            <a href='https://api.whatsapp.com/send?phone=03045632005' target='_blank'>Send a message</a>
          </article>

        </div>
        {/* End of Contact Option */}
        <form ref={form} onSubmit={sendEmail}>
          <input name='name' placeholder='Your Full Name' required />
          <input name='email' placeholder='Your Email' required />
          <textarea name='message' rows='13' placeholder='Your Message' required />
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
