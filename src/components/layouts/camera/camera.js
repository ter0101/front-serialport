import React, { Component } from 'react'

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
  render() {
    return (
      <div>
        <h1 className="title">Camera</h1>
        <Button color="success">Take Picture</Button>
        <img
          src="https://static.naewna.com/uploads/news/source/332193.jpg"
          alt="img"
          className="camera-img"
        />
      </div>
    )
  }
}
