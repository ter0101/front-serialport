import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'reactstrap'

import ShowTestData from './components/thia_ID/thai_id'
import Navbar from './components/navbar'

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Container>
          <div className="content">
            <Route exact path="/thai-id" component={ShowTestData} />
          </div>
        </Container>
      </Router>
    )
  }
}

export default App
