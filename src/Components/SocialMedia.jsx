import React, { Component } from 'react'

class SocialMedia extends Component {
  render() {
    return (
      <>
        <li>
          <a
            href="https://github.com/benjaminkent?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Repo"
          >
            <img
              src="./images/github.png"
              className="social-icon"
              alt="github logo"
            />
          </a>
        </li>
      </>
    )
  }
}

export default SocialMedia
