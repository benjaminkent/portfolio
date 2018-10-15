import React, { Component } from 'react'
import PortfolioInfo from './PortfolioInfo.json'

class PortfolioItems extends Component {
  render() {
    return (
      <>
        <section>
          <h1 className="portfolio-head">
            Check out some of the projects I've created!
          </h1>
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
