import React, { Component } from 'react'

class Languages extends Component {
  render() {
    return (
      <>
        <section className="skills-section">
          <p className="skills">
            <strong>My current tool-set includes:</strong>
          </p>
          <ul className="language-container">
            <li
              className="lang-image"
              style={{
                backgroundImage: 'url(/images/react.png)'
              }}
            >
              {/* <img
                className="language"
                alt="React logo"
                src="./images/react.png"
              /> */}
              <div className="lang-description">
                <p>React.js</p>
              </div>
            </li>
            <li>
              <img
                className="language"
                alt="Ruby logo"
                src="./images/ruby.png"
              />
            </li>
            <li>
              <img
                className="language"
                alt="Rails logo"
                src="./images/rails.png"
              />
            </li>
            <li>
              <img
                className="language"
                alt="PostgreSQL logo"
                src="./images/postgresql-logo.png"
              />
            </li>
            <li>
              <img
                className="language"
                alt="JavaScript logo"
                src="./images/javascript.png"
              />
            </li>
            <li>
              <img
                className="language"
                alt="SCSS logo"
                src="./images/sass.png"
              />
            </li>
            <li>
              <img
                className="language"
                alt="HTML logo"
                src="./images/html.png"
              />
            </li>
            <li>
              <img className="language" alt="CSS logo" src="./images/css.png" />
            </li>
            <li>
              <img
                className="language"
                alt="Phaser logo"
                src="./images/phaser.png"
              />
            </li>
          </ul>
          <p className="skills-lang">
            In order: React.js, Ruby, Rails, PostgreSQL, JavaScript, Sass,
            HTML5, CSS3 and Phaser
          </p>
        </section>
      </>
    )
  }
}

export default Languages
