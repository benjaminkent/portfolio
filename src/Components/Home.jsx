import React, { Component } from 'react'

import Header from './Header'
import Headshot from './Headshot'
import AboutMe from './AboutMe'
import Languages from './Languages'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'

class Home extends Component {
  render() {
    return (
      <>
        <ScrollToTop />
        <Headshot />
        <AboutMe />
        <Languages />
      </>
    )
  }
}

export default Home
