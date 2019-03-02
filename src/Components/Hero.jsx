import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Headshot extends Component {
  render() {
    return (
      <>
        <section className="headshot-container">
          <img
            className="hat"
            src="/images/new-years-glasses.png"
            alt="santa hat"
          />
          <img className="headshot" src="/images/square.jpg" alt="headshot" />
          <h1 className="headshot-title">Happy St. Patrick's Day!</h1>
          <div className="headshot-aboutme">
            My name is Benjamin Kent Jehl and I am a Full Stack Web Developer.
            <div className="view-work-button-section">
              <button className="view-work-button first">
                <Link
                  to="/portfolio"
                  title="View my Work!"
                  className="about-me-links"
                >
                  View my Portfolio
                </Link>
              </button>
              <button className="view-work-button second">
                <Link
                  to="/resume"
                  title="View my Résumé!"
                  className="about-me-links"
                >
                  View my Resume
                </Link>
              </button>
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default Headshot
