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
            <li className="big-header">
              <a
                href="https://medium.com/@benjaminjehl"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </a>
            </li>
            <li className="big-header">Résumé</li>
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
              <li>
                <a
                  href="https://medium.com/@benjaminjehl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blog
                </a>
              </li>
              <li>Résumé</li>
              <li className="menu-contact">
                <a href="tel://12604384562">+1 (260) 438-4562</a>
              </li>
              <li className="menu-contact">
                <a href="mailto:ben@benjaminkent.io">ben@benjaminkent.io</a>
              </li>
            </ul>
          </nav>
        </section>
      </>
    )
  }
}

export default Header
