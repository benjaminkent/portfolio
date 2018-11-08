import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './Components/Home'
import Portfolio from './Components/Portfolio'
import Resume from './Components/Resume'
import Header from './Components/Header'
import Footer from './Components/Footer'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="main">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/resume" component={Resume} />
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
