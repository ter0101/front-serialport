import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Container } from 'reactstrap'
import axios from 'axios'

import Home from './components/layouts/home/home'
import Camera from './components/layouts/camera/camera'
import ThaiID from './components/layouts/thai_ID/thai_id'
import ScanQR from './components/layouts/scanqr/scanqr'
import MagneticCard from './components/layouts/magnetic-card/magnetic-card'
import Navbar from './components/navbar'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      img64: '',
      text64: '',
      error: false
    }
  }

  writeDataToDevice = commands => {
    const command = {
      text: commands
    }
    axios.post('/api/write', command).then(respones => {
      console.log(respones)
    })
  }

  getDataFromServer = () => {
    console.log('GET data from server')
    axios.get('/api/getData').then(result => {
      console.log('DATA:', result.data)
      if (result.data.img64 !== '' && result.data.text64 !== '') {
        this.setState({ img64: result.data.img64, text64: result.data.text64 })
      } else {
        this.togleError()
      }
    })
  }

  togleError = () => {
    this.setState({
      error: !this.state.error,
    });
  }

  render() {
    return (
      <Router>
        <Navbar />
        <Container>
          <Switch>
            <Route exact path="/" render={props => <Home {...props} />} />
            <Route
              path="/thai-id"
              render={props => (
                <ThaiID
                  {...props}
                  state={this.state}
                  writeDataToDevice={this.writeDataToDevice}
                  getDataFromServer={this.getDataFromServer}
                  togleError={this.togleError}
                />
              )}
            />
            <Route path="/camera" component={Camera} />
            <Route path="/scan-qr" component={ScanQR} />
            <Route path="/magnetic-card" component={MagneticCard} />
          </Switch>
        </Container>
      </Router>
    )
  }
}

export default App
