import React, { Component } from 'react'

class Menu extends Component {
  constructor(props) {
    super(props)

    this.state = {
      class: 'normal'
    }
  }

  _toggle = event => {
    this.setState({
      class: 'toggle'
    })
  }

  render() {
    return (
      <>
        <section onClick={this._toggle} className={`${this.state.class} menu`}>
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
      </>
    )
  }
}

export default Menu
