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
          <h2 className="repo">
            <a
              href="https://github.com/benjaminkent?tab=repositories"
              className="repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              See my code{' '}
              <img
                src="./images/github-full.png"
                className="my-repo"
                alt="github logo"
              />
            </a>
          </h2>
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
                      <div className="portfolio-description">
                        <p>{card.description}</p>
                        <p>React.js, Bulma</p>
                      </div>
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
