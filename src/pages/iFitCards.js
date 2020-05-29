import React, { Component } from 'react'
import '../App.scss';


class FitCards extends Component {

    render() {
      return (
            <div className='fc_Wrapper'>
              <p>Equipment list title</p>
              <div className='card'>
                <img alt='equipment img placement'></img>
                <h2>equipment title</h2>
              </div>
            </div>
        )
    }
}

export default FitCards
