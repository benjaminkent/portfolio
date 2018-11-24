import React, { Component } from 'react'
import Language from './Language'
import LanguageInfo from './LanguageInfo.json'

class LanguageList extends Component {
  // toggle function
  // identifier
  // class- flipped or not flipped
  constructor(props) {
    super(props)

    this.timeout = null

    this.state = {
      currentlySelectedLanguageIndex: null
    }
  }

  selectLanguage = index => {
    this.setState({ currentlySelectedLanguageIndex: index })

    // If there is a timeout, clear it.
    if (this.timeout) {
      clearTimeout(this.timeout)
    }

    // Create a new timeout and remember it
    this.timeout = setTimeout(() => {
      this.setState({ currentlySelectedLanguageIndex: null })
    }, 2000)
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
                <Language
                  key={index}
                  index={index}
                  language={language.language}
                  image={language.imageURL}
                  class={language.class}
                  selectLanguage={this.selectLanguage}
                  selectedClass={
                    index === this.state.currentlySelectedLanguageIndex
                      ? 'back'
                      : 'front'
                  }
                />
              )
            })}
          </ul>
          <div>
            <p>
              Wow, you're still here, awesome! You're prize is this incredible
              gif.
            </p>
            <img src="" alt="" />
          </div>
        </section>
      </>
    )
  }
}

export default LanguageList
