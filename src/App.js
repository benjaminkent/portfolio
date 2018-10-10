import React, { Component } from 'react'

import Header from './Header'
import AboutMe from './AboutMe'
import Headshot from './Headshot'

class App extends Component {
  render() {
    return (
      <div className="main">
        <Header />
        <section className="menu">
          <p className="menu-x">X</p>
          <nav>
            <ul>
              <li>Home</li>
              <li>Portfolio</li>
              <li>Blog</li>
              <li className="phone">+1 (260) 438-4562</li>
            </ul>
          </nav>
        </section>
        <Headshot />
        <AboutMe />
      </div>
    )
  }
}

export default App
