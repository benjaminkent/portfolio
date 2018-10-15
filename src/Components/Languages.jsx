import React, { Component } from 'react'

class Languages extends Component {
  render() {
    return (
      <>
        <section className="skills-section">
          <p className="skills">
            <strong>My current tool-set includes:</strong>
          </p>
          <div className="language-container">
            <img
              className="language"
              alt="React logo"
              src="./images/react.png"
            />
            <img className="language" alt="Ruby logo" src="./images/ruby.png" />
            <img
              className="language"
              alt="Rails logo"
              src="./images/rails.png"
            />
            <img
              className="language"
              alt="Phaser logo"
              src="./images/phaser.png"
            />
            <img
              className="language"
              alt="JavaScript logo"
              src="./images/javascript.png"
            />
            <img className="language" alt="HTML logo" src="./images/html.png" />
            <img className="language" alt="CSS logo" src="./images/css.png" />
          </div>
          <p className="skills-lang">
            In order: React, Ruby, Rails, Phaser, JavaScript, HTML5 and CSS3
          </p>
        </section>
      </>
    )
  }
}

export default Languages
