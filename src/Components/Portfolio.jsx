import React, { Component } from 'react'

import Header from './Header'
import Headshot from './Headshot'
import AboutMe from './AboutMe'
import Menu from './Menu'

class Portfolio extends Component {
  constructor(props) {
    super(props)

    this.state = {
      class: 'toggle'
    }
  }

  render() {
    return (
      <>
        <Header class={this.state.class} />
        <Menu class={this.state.class} />
        <Headshot />
        <AboutMe />
      </>
    )
  }
}

export default Portfolio
