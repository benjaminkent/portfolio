import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

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
              <Link to="/">
                <img className="logo" src="./images/logo.png" alt="logo" />
              </Link>
            </li>
            <div className="big-header-links">
              <li className="big-header">
                <Link className="link" title="Take Me Home!" to="/">
                  Home
                </Link>
              </li>
              <li className="big-header">
                <Link
                  className="link"
                  title="Check out the Portfolio"
                  to="/portfolio"
                >
                  Portfolio
                </Link>
              </li>
              <li className="big-header">
                <Link className="link" title="See the Resume" to="/resume">
                  Résumé
                </Link>
              </li>
              <li className="big-header">
                <a
                  className="link"
                  title="Blog Time!"
                  href="https://medium.com/@benjaminjehl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blog
                </a>
              </li>
            </div>
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
              <li>
                <Link className="link" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="link" to="/portfolio">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link className="link" to="/resume">
                  Résumé
                </Link>
              </li>
              <li>
                <a
                  className="link"
                  href="https://medium.com/@benjaminjehl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blog
                </a>
              </li>
              <li className="menu-contact">
                <a className="link contact" href="tel://12604384562">
                  +1 (260) 438-4562
                </a>
              </li>
              <li className="menu-contact">
                <a className="link contact" href="mailto:ben@benjaminkent.io">
                  benjamin.k.jehl@gmail.com
                </a>
              </li>
            </ul>
          </nav>
        </section>
      </>
    )
  }
}

export default Header
