import React, { Component } from 'react'

import Header from './Header'
import AboutMe from './AboutMe'
import Headshot from './Headshot'

class App extends Component {
  render() {
    return (
      <div className="main">
        <Header />
        <Headshot />
        {/* <AboutMe /> */}
      </div>
    )
  }
}

export default App
