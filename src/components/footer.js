import React, { useState } from "react";
import '../App.scss';


function Footer() {

  return (
    <footer>
      <div className='footerMenu'>
        <ul className='column1'>
          <li>Company</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Careers</li>
        </ul>
        <ul className='column2'>
          <li>Account</li>
          <li>Log In</li>
          <li>Create Account</li>
        </ul>
        <ul className='column3'>
          <li>Support</li>
          <li>Help Center</li>
          <li>Accessability</li>
        </ul>
      </div>
      <div className='footerBottom'>
        <button>English<span className='dropdown-svg-goes-here'></span></button>
        <p>© iFit.com. All Rights Reserved.</p>
        <a className="link" href="#">Privacy Policy</a>
        <a className="link" href="#">Terms of Use</a>
      </div>
    </footer>
  )
}

export default Footer
