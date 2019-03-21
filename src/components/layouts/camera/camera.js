import React, { Component } from 'react'
import axios from 'axios'

import { Row, Col, Button } from 'reactstrap'

import defaultImg from '../../../asset/picture.png'
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
    const { img64 } = this.state
    const Img = 'data:image/png;base64,' + img64
    return (
      <div>
        <h1 className="title">Camera</h1>
        <div className="button-group">
          <Button
            size="sm"
            className="open-camera"
            onClick={this.writeDataToDevice}
            value="a01"
          >
            เปิด กล้อง
          </Button>
          <Button
            size="sm"
            className="take-camera"
            onClick={this.writeDataToDevice}
            value="a02"
          >
            ถ่่ายรูปภาพ
          </Button>
          <Button
            size="sm"
            className="read-camera"
            color="success"
            onClick={this.getDataFromServer}
            value="a02"
          >
            อ่านข้อมูล
          </Button>
        </div>
        {img64 !== '' ? (
          <img className="camera-img" src={Img} alt="img" />
        ) : (
          <img className="camera-img" src={defaultImg} alt="img" />
        )}
      </div>
    )
  }
}
