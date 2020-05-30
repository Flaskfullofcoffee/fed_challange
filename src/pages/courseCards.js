import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import '../App.scss';


class CourseCards extends Component {

  // const time =

    render() {
      return (
            <div className='cc_Wrapper'>
              <div className='cardDeck'>
                <div className='card'>
                  <div className='video1' alt='video placement'></div>
                  <div className='card_content'>
                    <h3>Lake Inniscarra, Ireland—Pyramid</h3>
                    <div className='user1'></div>
                  </div>
                  <ul className='card_metaData'>
                    <li><FontAwesomeIcon icon={faClock} /> 30:53</li>
                    <li><FontAwesomeIcon icon={faEye} /> 3,425 M</li>
                    <a href='#'>View Details</a>
                  </ul>
                </div>
                <div className='card'>
                  <div className='video2' alt='video placement'></div>
                  <div className='card_content'>
                    <h3>Performance Series</h3>
                    <div className='user2'></div>
                  </div>
                  <ul className='card_metaData'>
                    <li><FontAwesomeIcon icon={faClock} /> 30:22</li>
                    <li><FontAwesomeIcon icon={faEye} /> 5,425 M</li>
                    <a href='#'>View Details</a>
                  </ul>
                </div>
                <div className='card'>
                  <div className='video3' alt='video placement'></div>
                  <div className='card_content'>
                    <h3>Slow Pulls and Fast Intervals</h3>
                    <div className='user3'></div>
                  </div>
                  <ul className='card_metaData'>
                    <li><FontAwesomeIcon icon={faClock} /> 44:13</li>
                    <li><FontAwesomeIcon icon={faEye} /> 8,225 M</li>
                    <a href='#'>View Details</a>
                  </ul>
                </div>
                <div className='card'>
                  <div className='video4' alt='video placement'></div>
                  <div className='card_content'>
                    <h3>20 Minutes to Toned</h3>
                    <div className='user4'></div>
                  </div>
                  <ul className='card_metaData'>
                    <li><FontAwesomeIcon icon={faClock} /> 22:00</li>
                    <li><FontAwesomeIcon icon={faEye} /> 1,405 M</li>
                    <a href='#'>View Details</a>
                  </ul>
                </div>
                <div className='card'>
                  <div className='video5' alt='video placement'></div>
                  <div className='card_content'>
                    <h3>Charles Race, Boston, Massachusetts</h3>
                    <div className='user5'></div>
                  </div>
                  <ul className='card_metaData'>
                    <li><FontAwesomeIcon icon={faClock} /> 36:22</li>
                    <li><FontAwesomeIcon icon={faEye} /> 4,002 M</li>
                    <a href='#'>View Details</a>
                  </ul>
                </div>
                <div className='card'>
                  <div className='video6' alt='video placement'></div>
                  <div className='card_content'>
                    <h3>Full-Body HIIT Series</h3>
                    <div className='user6'></div>
                  </div>
                  <ul className='card_metaData'>
                    <li><FontAwesomeIcon icon={faClock} /> 17:23</li>
                    <li><FontAwesomeIcon icon={faEye} /> 2,202 M</li>
                    <a href='#'>View Details</a>
                  </ul>
                </div>
                <div className='card'>
                  <div className='video7' alt='video placement'></div>
                  <div className='card_content'>
                    <h3>Kafue River, Zambia—Power Stroke Pyramid</h3>
                    <div className='user7'></div>
                  </div>
                  <ul className='card_metaData'>
                    <li><FontAwesomeIcon icon={faClock} /> 42:13</li>
                    <li><FontAwesomeIcon icon={faEye} /> 8,992 M</li>
                    <a href='#'>View Details</a>
                  </ul>
                </div>
                <div className='card'>
                  <div className='video8' alt='video placement'></div>
                  <div className='card_content'>
                    <h3>Shred & Burn Series</h3>
                    <div className='user8'></div>
                  </div>
                  <ul className='card_metaData'>
                    <li><FontAwesomeIcon icon={faClock} /> 10:53</li>
                    <li><FontAwesomeIcon icon={faEye} /> 8,802 M</li>
                    <a href='#'>View Details</a>
                  </ul>
                </div>
              </div>
            </div>
        )
    }
}

export default CourseCards
