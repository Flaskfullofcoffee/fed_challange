import React, { Component } from 'react'
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import '../App.scss';


class ReviewSlider extends Component {
  constructor() {
    super()
    this.state = { value: 0 };
    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    this.setState({ value });
  }

    render() {
      return (
            <div className='carouselWrapper'>
              <Carousel
                slidesPerPage={3}
                arrows
                infinite
                value={this.state.value}
                onChange={this.onChange}
                slides={[
                  (<div className='review1'>
                    <div className='logo1'></div>
                    <p>“You focus on putting in the work,<br /> and the technology handles the rest.”</p>
                  </div>),
                  (<div className='review2'>
                    <div className='logo2'></div>
                    <p>“Literally transports you from home<br /> to wherever you choose to run.”</p>
                  </div>),
                  (<div className='review3'>
                    <div className='logo3'></div>
                    <p>“Breathes new life into a tired,<br /> old running routine.”</p>
                  </div>),
                ]}
                arrows
                clickToChange
              />
            </div>
        )
    }
}

export default ReviewSlider
