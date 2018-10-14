import React, { Component } from 'react'

class AboutMe extends Component {
  render() {
    return (
      <>
        <div>
          <div className="about-me">
            <h1>Hello!</h1>
            <p className="about-text">
              My name is Benjamin Kent Jehl and I am a Full Stack Web Developer
              in the Tampa Bay area. A former Financial Advisor, I have recently
              followed my passion of the Tech Industry and learned the skills to
              write full stack web applications. I am passionate about creating
              beautiful, modern websites and enjoy the challenges that come with
              writing computer programs. As with this website, I tend to write
              all of the code myself from scratch, however I am familiar with
              and have implemented CSS frameworks like bootstrap and Bulma to
              create websites as well. I am extremely excited about where the
              tech industry is heading and look forward to the many challenges
              and breakthroughs that lie before us. Please reach out to learn if
              I would make a good fit for your Web Development team at: +1 (260)
              438-4562 or ben@benjaminkent.io.
            </p>
            <p className="skills">
              <strong>My current tool-set includes:</strong>
            </p>
            <div className="language-container">
              <img
                className="language"
                alt="React logo"
                src="./images/react.png"
              />
              <img
                className="language"
                alt="React Native logo"
                src="./images/react-native.png"
              />
              <img
                className="language"
                alt="Ruby logo"
                src="./images/ruby.png"
              />
              <img
                className="language"
                alt="Rails logo"
                src="./images/rails.png"
              />
              <img
                className="language"
                alt="JavaScript logo"
                src="./images/javascript.png"
              />
              <img
                className="language"
                alt="HTML logo"
                src="./images/html.png"
              />
              <img className="language" alt="CSS logo" src="./images/css.png" />
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default AboutMe
