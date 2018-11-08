import React, { Component } from 'react'
import Language from './Language'
import LanguageInfo from './LanguageInfo.json'

class LanguageList extends Component {
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
                <Language
                  language={language.language}
                  image={language.imageURL}
                  class={language.class}
                />
              )
            })}
          </ul>
        </section>
      </>
    )
  }
}

export default LanguageList
