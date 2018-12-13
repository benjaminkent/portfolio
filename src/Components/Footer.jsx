import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <>
        <section className="footer">
          <footer>
            <p>
              Made with <i className="fas fa-heart" /> and{' '}
              <img
                className="beard-logo"
                src="./images/beard-logo-blond.png"
                alt="beard logo"
              />{' '}
              in St Petersburg, FL.
            </p>
            <p>
              2018 Benjamin Kent Jehl,{' '}
              <a href="http://benjaminkent.io/">benjaminkent.io</a>
            </p>
          </footer>
        </section>
      </>
    )
  }
}

export default Footer
