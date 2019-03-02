import React, { Component } from 'react'

import SocialMediaInfo from './SocialMediaInfo.json'

class SocialMedia extends Component {
  render() {
    return (
      <>
        <ul className="social-media">
          {SocialMediaInfo.map((media, index) => {
            return (
              <li key={index}>
                <a
                  href={media.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={media.title}
                >
                  <img
                    src={media.image}
                    className="social-icon"
                    alt="github logo"
                  />
                </a>
              </li>
            )
          })}
        </ul>
      </>
    )
  }
}

export default SocialMedia
