import React, { Component } from 'react'

import Header from './Header'

class App extends Component {
  render() {
    return (
      <div className="main">
        <Header />
        <section>
          <img className="headshot" src="/images/headshot.jpg" alt="headshot" />
        </section>
        <div>
          <div className="about-me">
            <h1>About Me</h1>
            <p>
              Spicy jalapeno bacon ipsum dolor amet boudin shank meatball ham
              hock picanha pastrami. Cupim sirloin buffalo swine ham hock
              bresaola. Venison kielbasa hamburger shoulder beef ribs tri-tip
              fatback leberkas. Prosciutto cow rump bresaola burgdoggen.
              Leberkas doner tongue salami alcatra pastrami b
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default App
