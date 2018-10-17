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
            <h3 className="pdf-header">
              <a
                title="Benjamin Kent Jehl fancy PDF resume"
                className="pdf"
                href="https://drive.google.com/file/d/1By7gvi8FG04uolmObkDAOZudA6IrjayC/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click here to view PDF
                {/* <img
                  className="pdf-icon"
                  src="./images/pdf-icon.png"
                  alt="pdf icon"
                /> */}
              </a>
            </h3>
            <a
              title="Benjamin Kent Jehl fancy PDF resume"
              href="https://drive.google.com/file/d/1By7gvi8FG04uolmObkDAOZudA6IrjayC/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="resume" src="./images/resume.png" alt="resume" />
            </a>
          </main>
        </section>
        <Footer />
      </>
    )
  }
}

export default Resume
