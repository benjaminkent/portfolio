import React, { Component } from 'react'

import Header from './Header'
import Headshot from './Headshot'
import AboutMe from './AboutMe'

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <Headshot />
        <AboutMe />
      </>
    )
  }
}

export default Home
