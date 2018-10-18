import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch
} from 'react-router-dom'

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
              <NavLink to="/">
                <img className="logo" src="./images/logo.png" alt="logo" />
              </NavLink>
            </li>
            <div className="big-header-links">
              <li className="big-header">
                <NavLink className="link" title="Take Me Home!" exact to="/">
                  Home
                </NavLink>
              </li>
              <li className="big-header">
                <NavLink
                  className="link"
                  title="Check out the Portfolio"
                  to="/portfolio"
                >
                  Portfolio
                </NavLink>
              </li>
              <li className="big-header">
                <NavLink className="link" title="See the Resume" to="/resume">
                  Résumé
                </NavLink>
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
                <NavLink className="link" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="link" to="/portfolio">
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink className="link" to="/resume">
                  Résumé
                </NavLink>
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
