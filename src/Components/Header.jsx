import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <li>Logo</li>
          <li onClick={this._toggle} className="hamburger">
            <div />
            <div />
            <div />
          </li>
        </nav>
      </header>
    )
  }
}

export default Header
