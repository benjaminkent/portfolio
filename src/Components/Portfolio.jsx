import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
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
