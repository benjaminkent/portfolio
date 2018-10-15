import React, { Component } from 'react'

import Home from './Components/Home'
import Portfolio from './Components/Portfolio'

class App extends Component {
  render() {
    return (
      <div className="main">
        <Home />
        <Portfolio />
      </div>
    )
  }
}

export default App
