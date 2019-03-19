import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'reactstrap'

import ThaiID from './components/thia_ID/thai_id'
import Home from './components/home'
import Navbar from './components/navbar'

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Navbar />
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route exact path="/thai-id" component={ThaiID} />
          </div>
        </Container>
      </Router>
    )
  }
}

export default App
