import React, { Component } from 'react'

class AboutMe extends Component {
  render() {
    return (
      <>
        <section>
          <img className="headshot" src="/images/headshot.jpg" alt="headshot" />
        </section>
        <div>
          <div className="about-me">
            <h1>Hi</h1>
            <p>
              My name is Benjamin Kent Jehl and I am a Full Stack Web Developer
              in the Tampa Bay area. A former Financial Advisor, I have recently
              followed my passion of the Tech Industry and learned the skills to
              write full stack applications.
            </p>
          </div>
        </div>
      </>
    )
  }
}

export default AboutMe
