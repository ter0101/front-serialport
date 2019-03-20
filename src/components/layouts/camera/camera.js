import React, { Component } from 'react'
import axios from 'axios'

import {
  //   Alert,
  //   Row,
  //   Col,
  //   Form,
  //   FormGroup,
  //   Label,
  //   Input,
  Button
} from 'reactstrap'
import '../../../App.css'
import './camera.css'

export default class camera extends Component {
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
  render() {
    return (
      <div>
        <h1 className="title">Camera</h1>
        <Button color="success" onClick={this.writeDataToDevice} value="a02">
          Take Picture
        </Button>
        <img
          src="https://static.naewna.com/uploads/news/source/332193.jpg"
          alt="img"
          className="camera-img"
        />
      </div>
    )
  }
}
