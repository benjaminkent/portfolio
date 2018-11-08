import React, { Component } from 'react'
import LanguageInfo from './LanguageInfo.json'

class Language extends Component {
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
      <div>
        <li
          className="lang-image"
          onClick={this._toggle}
          style={{
            backgroundImage: `url(${this.props.image})`
          }}
        >
          <div
            className={`${this.props.class} lang-description ${
              this.state.class
            }`}
          >
            <p>{this.props.language}</p>
          </div>
        </li>
      </div>
    )
  }
}

export default Language
