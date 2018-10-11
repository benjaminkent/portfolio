import React, { Component } from 'react'

class Menu extends Component {
  render() {
    return (
      <>
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
      </>
    )
  }
}

export default Menu
