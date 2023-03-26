import emailjs from '@emailjs/browser';
import React, {useState} from 'react';
import '../css/form.css';



function Contact() {

    const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm('gmail', 'template_nwx9a6q', event.target, 'FGA0xQaxRnlPubSSi')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      event.target.reset();
    };
    return (
        <div>
            <form onSubmit={sendEmail}>
            <h1>Contact Me</h1>
            <p><label>Name:</label>
            <input type="text" placeholder='Your name' name="name"/></p>
            <br/>
    <p><label>Email:</label>
    <input type="text" placeholder='Email Address'name="email"/></p>
    <br/>
    <p><label>Subject:</label>
    <input type="text" placeholder='Subject' name="subject"/></p>
    <br/>
    <p><label >Message:</label></p>
    <textarea type="text" className="message" placeholder='Your message' name="message"></textarea>
    <br/>
    <input type="submit" className="btn btn-info" value="Send Message"></input>
    {/* on click send message and display your message has been sent  */}
    {/* <button onClick = {()=> sendMessage()}>Send</button> */}
            </form>
        </div>
    )
}

export default Contact;