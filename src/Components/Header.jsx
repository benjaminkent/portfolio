import React, { Component } from 'react'

class Header extends Component {
  state = {
    class: 'hide'
  }

  _openMenu = () => {
    this.setState({
      class: 'open'
    })
  }

  _hideMenu = () => {
    this.setState({
      class: 'hide'
    })
  }

  render() {
    return (
      <>
        <header className="header">
          <nav className="big-nav">
            <li>
              <img className="logo" src="./images/logo.png" alt="logo" />
            </li>
            <li className="big-header">Home</li>
            <li className="big-header">Portfolio</li>
            <li className="big-header">Blog</li>
            <li className="big-header contact">ben@benjaminkent.io</li>
            <li onClick={this._openMenu} className="hamburger">
              <div />
              <div />
              <div />
            </li>
          </nav>
        </header>
        <section className={`${this.state.class} menu`}>
          <p onClick={this._hideMenu} className="menu-x">
            X
          </p>
          <nav>
            <ul>
              <li>Home</li>
              <li>Portfolio</li>
              <li>Blog</li>
              <li className="menu-contact">+1 (260) 438-4562</li>
              <li className="menu-contact">ben@benjaminkent.io</li>
            </ul>
          </nav>
        </section>
      </>
    )
  }
}

export default Header
