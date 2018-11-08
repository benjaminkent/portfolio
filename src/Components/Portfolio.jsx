import React, { Component } from 'react'
import PortfolioItems from './PortfolioItems'
import ScrollToTop from './ScrollToTop'

class Portfolio extends Component {
  render() {
    return (
      <>
        <ScrollToTop />
        <PortfolioItems />
      </>
    )
  }
}

export default Portfolio
