import React, { Component } from 'react'

import Header from './Header'
import Headshot from './Headshot'
import AboutMe from './AboutMe'
import Menu from './Menu'

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        {/* <Menu /> */}
        <Headshot />
        <AboutMe />
      </>
    )
  }
}

export default Home
