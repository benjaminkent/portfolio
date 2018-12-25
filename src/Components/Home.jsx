import React, { Component } from 'react'

import Hero from './Hero'
import AboutMe from './AboutMe'
import LanguageList from './LanguageList'
import ScrollToTop from './ScrollToTop'

class Home extends Component {
  render() {
    return (
      <>
        <ScrollToTop />
        <Hero />
        <AboutMe />
        <LanguageList />
      </>
    )
  }
}

export default Home
