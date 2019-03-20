import React, { Component } from 'react'
import axios from 'axios'

import './thai_id.css'
import '../../../App.css'
import { Alert, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap'

export default class show_data_test extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      img64: ''
    }
    this.getDataFromServer()
  }

  getDataFromServer = () => {
    axios.get('/api/getData').then(result => {
      console.log('DATA:', result.data)
      this.setState({ img64: result.data.data, data: result.data.data2 })
    })
  }

  render() {
    const { data, img64 } = this.state
    const rawImg = "data:image/png;base64,"+img64
    const rawData = Buffer.from(data, 'base64').toString()
    return (
      <div>
        <h1 className="title">Thai ID</h1>
        <Row>
          <Col xs="6">
            <img
              src={rawImg}
              alt="img"
            />
          </Col>
          <Col xs="6">
            <p>{rawData}</p>
          </Col>
        </Row>
      </div>
    )
  }
}
