import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className='contact-container'>
      <h1>Contact</h1>
      <p>My name is Spencer Kenealy and I am currently looking for employment as a React developer. Please feel free to contact me any time!</p>
      <div className='contact-info'>
        <p>(310) 728-5515</p>
        <p><a href='mailto:kenealys@me.com'>kenealys@me.com</a></p>
      </div>
    </div>
  );
};

export default Contact;