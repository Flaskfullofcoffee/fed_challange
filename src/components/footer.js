import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import '../App.scss';


function Footer() {

  return (
    <footer>
      <div className='footerMenu'>
        <ul className='column'>
          <li>Company</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Careers</li>
        </ul>
        <ul className='column'>
          <li>Account</li>
          <li>Log In</li>
          <li>Create Account</li>
        </ul>
        <ul className='column'>
          <li>Support</li>
          <li>Help Center</li>
          <li>Accessability</li>
        </ul>
      </div>
      <div className='socialBar_wrapper'>
        <a className="social-link" href="#"><FontAwesomeIcon icon={faSquare} className='icon'/></a>
        <a className="social-link" href="https://icons8.com/" target='_blank'>
          <span className='pinterestIcon'></span>
        </a>
        <a className="social-link" href="https://icons8.com/" target='_blank'>
          <span className='facebookIcon'></span>
        </a>
        <a className="social-link" href="https://icons8.com/" target='_blank'>
          <span className='twitterIcon'></span>
        </a>
        <a className="social-link" href="#"><FontAwesomeIcon icon={faSquare} className='icon'/></a>
      </div>
      <div className='footerBottom'>
        <button>English<FontAwesomeIcon className='chevron' icon={faChevronDown} className='icon'/></button>
        <div className='footerData'>
          <p>© iFit.com. All Rights Reserved.</p>
          <a className="link" href="#">Privacy Policy</a>
          <a className="link" href="#">Terms of Use</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
