import React, { Component } from 'react'
import LanguageInfo from './LanguageInfo.json'

class Languages extends Component {
  state = {
    class: ''
  }

  _toggle = () => {
    if (this.state.class === 'hidden') {
      this.setState({ class: 'none' })
    } else {
      this.setState({ class: 'hidden' })
    }
  }

  render() {
    return (
      <>
        <section className="skills-section">
          <p className="skills">
            <strong>My current tool-set includes:</strong>
          </p>
          <ul className="language-container">
            {LanguageInfo.map((language, index) => {
              return (
                <li
                  key={index}
                  className="lang-image"
                  onClick={this._toggle}
                  style={{
                    backgroundImage: `url(${language.imageURL})`
                  }}
                >
                  <div
                    className={`${language.class} lang-description ${
                      this.state.class
                    }`}
                  >
                    <p>{language.language}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        </section>
      </>
    )
  }
}

export default Languages
