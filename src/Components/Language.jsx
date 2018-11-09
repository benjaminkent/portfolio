import React, { Component } from 'react'

class Language extends Component {
  _toggle = () => {
    this.props.selectLanguage(this.props.index)
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
              this.props.selectedClass
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
