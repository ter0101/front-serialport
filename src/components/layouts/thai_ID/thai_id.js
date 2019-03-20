import React, { Component } from 'react'
import axios from 'axios'

import './thai_id.css'
import '../../../App.css'
import { Alert, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap'
import defaultImg from '../../../asset/user.png'

export default class show_data_test extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      img64: '',
      text64: ''
    }
    this.getDataFromServer()
  }

  getDataFromServer = () => {
    axios.get('/api/getData').then(result => {
      console.log('DATA:', result.data)
      this.setState({ img64: result.data.img64, text64: result.data.text64 })
    })
  }

  render() {
    const { data, img64, text64 } = this.state
    const Img = "data:image/png;base64," + img64
    const Text = Buffer.from(text64, 'base64').toString()
    return (
      <div>
        <h1 className="title">Thai ID</h1>
        <Row>
          <Col xs="6">
            {img64 !== '' ? (<img
              src={Img}
              alt="img"
            />) : (<img
              src={defaultImg}
              alt="img" />)
            }
          </Col>
          <Col xs="6">
            <p>{Text}</p>
          </Col>
        </Row>
      </div>
    )
  }
}
