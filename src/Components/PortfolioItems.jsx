import React, { Component } from 'react'
import PortfolioInfo from './PortfolioInfo.json'

class PortfolioItems extends Component {
  render() {
    return (
      <>
        <section>
          <h1 className="portfolio-head">
            Check out some of the apps I've created!
          </h1>
          <a
            href="https://github.com/benjaminkent?tab=repositories"
            className="repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="repo">
              See my code{' '}
              <img
                src="./images/github-full.png"
                className="my-repo"
                alt="github logo"
              />
            </h2>
          </a>
          <main className="portfolio-main">
            <ul className="portfolio-items">
              {PortfolioInfo.map(card => {
                return (
                  <a
                    href={card.sourceURL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <li
                      style={{
                        backgroundImage: `url(${card.imageURL})`
                      }}
                      className="portfolio-image"
                    >
                      <p className="portfolio-description">
                        {card.description}
                      </p>
                    </li>
                  </a>
                )
              })}
            </ul>
          </main>
        </section>
      </>
    )
  }
}

export default PortfolioItems
