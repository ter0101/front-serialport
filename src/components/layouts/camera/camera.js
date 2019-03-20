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
    command: '',
    img64: ''
  }

  getDataFromServer = () => {
    console.log('run')
    axios.get('/api/getData').then(result => {
      console.log('DATA:', result.data)
      this.setState({ img64: result.data.img64 })
    })
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
    const { img64,  } = this.state
    const Img = 'data:image/png;base64,' + img64
    return (
      <div>
        <h1 className="title">Camera</h1>
        <Button color="success" onClick={this.writeDataToDevice} value="a02">
        Take Picture
        </Button>
        <Button color="success" onClick={this.getDataFromServer} value="a02">
          Read
        </Button>
        <img
          src={Img}
          alt="img"
          className="camera-img"
        />
      </div>
    )
  }
}
