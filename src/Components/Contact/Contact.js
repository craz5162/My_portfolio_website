import React from 'react';
import "./Contact.css"

const Contact = () => {
      return (
            <div className='contact'>
                  <h1>CONTACT ME</h1>
                  <div className='text-center '>
                        <button className='btn btn-outline-secondary text-light'><a href="https://www.facebook.com/profile.php?id=100053190180040" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-facebook"></i></a></button>
                        <button className='btn btn-outline-secondary text-light'><a href="https://www.linkedin.com/in/md-arfat-8b904623a/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin"></i></a></button>
                        <button className='btn btn-outline-secondary text-light'><a href="https://github.com/craz5162" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i></a></button>
                  </div>
                  <h2>Thank you very much for visiting my website</h2>
            </div>
      );
};

export default Contact;