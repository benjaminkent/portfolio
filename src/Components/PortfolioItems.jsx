import React, { Component } from 'react'
import Data from './Data.json'

class PortfolioItems extends Component {
  render() {
    return (
      <>
        <section>
          <h1 className="portfolio-head">
            Check out some of the projects I've created!
          </h1>
          <main className="portfolio-items">
            <img
              src={Data[0].shopping.imageURL}
              className="portfolio-image shopping"
              alt="Shopping website"
            />
            <img
              src="./images/photo-gallery.png"
              className="portfolio-image"
              alt="gallery website"
            />
            <img
              src="./images/octodex.png"
              className="portfolio-image"
              alt="octodex website"
            />
            <img
              src="./images/weather.png"
              className="portfolio-image"
              alt="weather website"
            />
            <img
              src="./images/color-picker.png"
              className="portfolio-image"
              alt="color-picker website"
            />
            <img
              src="./images/movies.png"
              className="portfolio-image"
              alt="movies website"
            />
            <img
              src="./images/minesweeper.png"
              className="portfolio-image"
              alt="minesweeper website"
            />
            <img
              src="./images/crypto.png"
              className="portfolio-image"
              alt="crypto-currency website"
            />
            <img
              src="./images/blackjack.png"
              className="portfolio-image"
              alt="blackjack website"
            />
            <img
              src="./images/roshambo.png"
              className="portfolio-image"
              alt="roshambo website"
            />
            <img
              src="./images/articles.png"
              className="portfolio-image"
              alt="articles website"
            />
            <img
              src="./images/tictactoe.png"
              className="portfolio-image"
              alt="tictactoe website"
            />
          </main>
        </section>
      </>
    )
  }
}

export default PortfolioItems
