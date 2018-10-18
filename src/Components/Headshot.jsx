import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch
} from 'react-router-dom'

class Headshot extends Component {
  render() {
    return (
      <>
        <section className="headshot-container">
          <img className="headshot" src="/images/square.jpg" alt="headshot" />
          <h1 className="headshot-title">Hello!</h1>
          <p className="headshot-aboutme">
            My name is Benjamin Kent Jehl and I am a Full Stack Web Developer.
            View my{' '}
            <Link
              to="/portfolio"
              title="View my Work!"
              className="about-me-links"
            >
              Portfolio
            </Link>{' '}
            and my{' '}
            <Link
              to="/resume"
              title="View my Résumé!"
              className="about-me-links"
            >
              Resume
            </Link>
            .
          </p>
        </section>
      </>
    )
  }
}

export default Headshot
