import React, { Component } from 'react'

import Header from './Header'
import AboutMe from './AboutMe'

class App extends Component {
  render() {
    return (
      <div className="main">
        <Header />
        <AboutMe />
      </div>
    )
  }
}

export default App
