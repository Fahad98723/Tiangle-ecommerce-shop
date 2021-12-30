import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Col, Container, Row } from 'react-bootstrap';
const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_21g9qrt', 'template_i4dlpr9', e.target, "user_3t5CCLF9y88JMlS2wO0Lf")
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()
  };
    return (
        <Container id='contact' className='py-5'>
                <div className="heading mb-5 text-center">
                    <h1 className='fw-bold'>Contact With Us</h1>
                </div>
                <div className="">
                <form className='w-50 mx-auto' ref={form} onSubmit={sendEmail}>
                    <input placeholder='Your Name ' className='w-100 mb-3 p-2' type="text" name="user_name" />
                    <input placeholder='Your Email ' className='w-100 mb-3 p-2' type="email" name="user_email" />
                    <textarea rows='5' placeholder='Your Message ' className='w-100 mb-3 p-2' name="message" />
                    <input className='btn btn-success' type="submit" value="Send" />
                </form>
                </div>
            
        </Container>

    );
};

export default Contact;