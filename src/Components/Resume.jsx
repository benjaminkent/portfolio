import React, { Component } from 'react'

import Header from './Header'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'

class Resume extends Component {
  render() {
    return (
      <>
        <ScrollToTop />
        <section className="resume-section">
          <main className="resume-container">
            <h3 className="pdf-header">
              <a
                title="Fancy Resume. Click it, Read it, Love it!"
                className="pdf"
                href="https://drive.google.com/file/d/1QvaHzj9qymsDONzJaqYwwSCWQnNPr2ZU/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click here to view PDF
              </a>
              <a
                title="Not as fancy black and white resume"
                className="pdf"
                href="https://drive.google.com/file/d/1yt3fpI07dkRIIQJCJODI3CPFF3NhmQOC/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click here for printer friendly PDF.
              </a>
            </h3>
            <a
              title="Hire me!"
              href="https://drive.google.com/file/d/1QvaHzj9qymsDONzJaqYwwSCWQnNPr2ZU/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="resume"
                src="./images/color-resume.png"
                alt="resume"
              />
            </a>
          </main>
        </section>
      </>
    )
  }
}

export default Resume
