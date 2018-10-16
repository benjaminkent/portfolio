import React, { Component } from 'react'

import Header from './Header'
import Footer from './Footer'

class Resume extends Component {
  render() {
    return (
      <>
        <Header />
        <section className="resume-section">
          <main className="resume-container">
            <img className="resume" src="./images/resume.png" alt="resume" />
          </main>
        </section>
        <Footer />
      </>
    )
  }
}

export default Resume
