import React, { Component } from 'react'

class Headshot extends Component {
  render() {
    return (
      <>
        <section className="headshot-container">
          <img className="headshot" src="/images/square.jpg" alt="headshot" />
          <h1 className="headshot-title">Hello!</h1>
          <p className="headshot-aboutme">
            My name is Benjamin Kent Jehl and I am a Full Stack Web Developer.
            View my Portfolio and my Resume.
          </p>
        </section>
      </>
    )
  }
}

export default Headshot
