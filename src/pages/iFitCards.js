import React, { Component } from 'react'
import '../App.scss';


class FitCards extends Component {

    render() {
      return (
            <div className='fc_wrapper'>
              <p className='grabber'>Interested in our exciting iFit-enabled equipment?</p>
              <div className='fc_deck'>
                <div className='card'>
                  <div className='treadmill' alt='treadmill img'></div>
                  <h2>Treadmills</h2>
                </div>
                <div className='card'>
                  <div className='bikes' alt='bikes img'></div>
                  <h2>Bikes</h2>
                </div>
                <div className='card'>
                  <div className='ellipticals' alt='ellipticals img'></div>
                  <h2>Ellipticals</h2>
                </div>
                <div className='card'>
                  <div className='strength' alt='strength equipment img'></div>
                  <h2>Strength</h2>
                </div>
              </div>
            </div>
        )
    }
}

export default FitCards
