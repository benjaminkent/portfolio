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
            <li className="big-header">
              <Link to="/">Home</Link>
            </li>
            <li className="big-header">
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li className="big-header">
              <a
                href="https://medium.com/@benjaminjehl"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </a>
            </li>
            <li className="big-header">
              <Link to="/resume">Résumé</Link>
            </li>
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
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <a
                  href="https://medium.com/@benjaminjehl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blog
                </a>
              </li>
              <li>
                <Link to="/resume">Résumé</Link>
              </li>
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
