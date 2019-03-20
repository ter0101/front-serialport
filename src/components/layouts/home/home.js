import React, { Component } from 'react'
import { Card, Button, CardImg, CardGroup, CardBody } from 'reactstrap'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import './home.css'
import cardId from '../../../asset/id-card.png'
import camera from '../../../asset/photo-camera.png'
import scanqr from '../../../asset/qr-code-scan.png'

export default class home extends Component {
  state = {
    redirect: false,
    command: ''
  }

  writeDataToDevice = e => {
    e.preventDefault()
    this.setState({ redirect: true, command: e.currentTarget.value })
    const command = {
      text: e.currentTarget.value
    }
    axios.post('/api/write', command).then(respones => {
      console.log(respones)
    })
    console.log('COMMAND:', command.text)
  }

  renderRedirect = () => {
    const { redirect, command } = this.state
    if (redirect && command === 'a04') {
      return <Redirect to="/thai-id" />
    }
    if (redirect && command === 'a01') {
      return <Redirect to="/camera" />
    }
    if (redirect && command === 'a03') {
      return <Redirect to="/scan-qr" />
    }
  }

  render() {
    return (
      <CardGroup>
        {this.renderRedirect()}
        <Card body outline color="white">
          <CardImg
            top
            width="100%"
            src={cardId}
            alt="Card image cap"
          />
          <Button
            className="card-button"
            color="success"
            onClick={this.writeDataToDevice}
            value="a04"
          >
            Thai ID
          </Button>
        </Card>
        <Card body outline color="white">
          <CardImg
            top
            width="100%"
            src={camera}
            alt="Card image cap"
          />
          <Button
            className="card-button"
            color="success"
            onClick={this.writeDataToDevice}
            value="a01"
          >
            Camera
          </Button>
        </Card>
        <Card body outline color="white">
          <CardImg
            top
            width="100%"
            src={scanqr}
            alt="Card image cap"
          />
          <Button
            className="card-button"
            color="success"
            onClick={this.writeDataToDevice}
            value="a03"
          >
            Scan QR
          </Button>
        </Card>
      </CardGroup>
    )
  }
}
