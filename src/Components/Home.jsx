import React, { Component } from 'react'

import Headshot from './Headshot'
import AboutMe from './AboutMe'
import Languages from './Languages'
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
