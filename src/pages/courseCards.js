import React, { Component } from 'react'
import '../App.scss';


class CourseCards extends Component {

    render() {
      return (
            <div className='cc_Wrapper'>
              <div className='topDeck'>
                <div className='card'>
                  <img alt='video placement'></img>
                  <div className='card_mainContent'>
                    <h3></h3>
                    <img></img>
                  </div>
                  <ul className='card_metaData'>
                    <li></li>
                    <li></li>
                  </ul>
                  <a href='#'>View Details</a>
                </div>
              </div>
            </div>
        )
    }
}

export default CourseCards
