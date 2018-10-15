import React, { Component } from 'react'

import Home from './Components/Home'
import Portfolio from './Components/Portfolio'
import Resume from './Components/Resume'

class App extends Component {
  render() {
    return (
      <div className="main">
        <Home />
        <Portfolio />
        <Resume />
      </div>
    )
  }
}

export default App
