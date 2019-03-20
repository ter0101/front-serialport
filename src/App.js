import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Container } from 'reactstrap'

import Home from './components/layouts/home/home'
import Camera from './components/layouts/camera/camera'
import ThaiID from './components/layouts/thai_ID/thai_id'
import ScanQR from './components/layouts/scanqr/scanqr'
import Navbar from './components/navbar'

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/thai-id" component={ThaiID} />
            <Route path="/camera" component={Camera} />
            <Route path="/scan-qr" component={ScanQR} />
          </Switch>
        </Container>
      </Router>
    )
  }
}

export default App
