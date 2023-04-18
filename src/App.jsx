import React from 'react'
import Navigation from './components/Navigation'
import Intro from './components/Intro'
import Trending from './components/Trending'
import Hero from './components/Hero'
import "./style/landingpage.css"
import { Container, Row, Col } from 'react-bootstrap'

const App = () => {
  return (
    <div>
      
      <div className='myBg'>
        <Navigation />
        <Intro/>
      </div>
      
      <div className='trending'>
        <Trending/>
      </div>

      <div className='hero'>
        <Hero/>
      </div>
    </div>
  )
}

export default App
