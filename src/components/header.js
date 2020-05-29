import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faBackward } from '@fortawesome/free-solid-svg-icons'
// import './App.scss'
import '../App.scss';


function Header() {

  const [state, setState] = useState(false);
  const show = state ? 'inActive' : 'active'
  const hide = !state ? 'inActive' : 'active'
  const menu = <FontAwesomeIcon icon={faBars} />
  const backtrack = <FontAwesomeIcon icon={faBackward} />
  return (
    <header className='navWrapper'>
      <div className='topNav'>
        <a className="nav-link" href="#">Blog</a>
        <a className="nav-link" href="#">Nourish</a>
        <a className="nav-link" href="#">Shop</a>
        <span classname='buffer'></span>
      </div>
      <div className='bottomNav'>
        <div className='logoWrapper'>
          <div className='logo'></div>
        </div>
        <div className='linksWrapper'>
          <a className="nav-link" href="#">Exercise</a>
          <a className="nav-link" href="#">Nutrition</a>
          <a className="nav-link" href="#">Activity</a>
          <a className="nav-link" href="#">Sleep</a>
        </div>
        <div className='navBtn'>
          <button>Sign Up</button>
        </div>
      </div>
      {/* // <span className={`hamburger ${show}`} onClick={() => setState(true)}>{menu}</span>
        //
        //     <div className={`navMenu ${hide}`}>
        //       <span className='returnBtn' onClick={() => setState(false)}>{backtrack}</span>
        //       <a className="nav-link" href="index.html">Home</a>
        //       <a className="nav-link" href="#games_section">Games</a>
        //       <a className="nav-link" href="#rates_section">Pricing</a>
        //       <a className="nav-link" href="#reservation_section">RSVP</a>
        //       <a className="nav-link" href="#location_section">Contact</a>
      //     </div> */}
    </header>
  )
}

export default Header
