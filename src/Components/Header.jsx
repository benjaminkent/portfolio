import React, { Component } from 'react'

class Header extends Component {
  state = {
    class: 'true'
  }

  _openMenu = () => {
    this.setState({
      class: 'false'
    })
  }

  _hideMenu = () => {
    this.setState({
      class: 'true'
    })
  }

  render() {
    let menuClass = 'normal'

    if (this.state.class === 'true') {
      menuClass = 'toggle'
    }

    if (this.state.class === 'false') {
      menuClass = 'normal'
    }

    return (
      <>
        <header>
          <nav>
            <li>Logo</li>
            <li onClick={this._openMenu} className="hamburger">
              <div />
              <div />
              <div />
            </li>
          </nav>
        </header>
        <section className={`${menuClass} menu`}>
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
