import React, { Component } from 'react'

import Headshot from './Headshot'
import AboutMe from './AboutMe'
import LanguageList from './LanguageList'
import ScrollToTop from './ScrollToTop'

class Home extends Component {
  render() {
    return (
      <>
        <ScrollToTop />
        <Headshot />
        <AboutMe />
        <LanguageList />
      </>
    )
  }
}

export default Home
