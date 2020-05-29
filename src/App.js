import React, { Component } from 'react'
import Header from './components/header'
import Footer from './components/footer'
import Hero from './pages/hero'
import Carousel from './pages/carousel'
import CourseCards from './pages/courseCards'
import FitCards from './pages/iFitCards'
import './App.scss';


class App extends Component {

    render() {
      return (
            <div className='container'>
              <Header />
              <Hero />
              <Carousel />
              <CourseCards />
              <FitCards /> 
              {/* <Footer /> */}
            </div>
        )
    }
}

export default App
