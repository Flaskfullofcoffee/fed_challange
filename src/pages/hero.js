import React, { Component } from 'react'
import '../App.scss';


class Hero extends Component {

    render() {
      return (
            <div className='heroWrapper'>
              <h1 className='title'>The best personal training,<br /> right in your own home</h1>
              <button>Join iFit Coach</button>
            </div>
        )
    }
}

export default Hero
