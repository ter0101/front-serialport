import React, { Component } from 'react'
import axios from 'axios'

import '../../../App.css'

export default class scanqr extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: ''
    }
    setTimeout(this.getDataFromServer, 1000)
  }

  getDataFromServer = () => {
    console.log('GET data from server')
    axios.get('/api/getData').then(result => {
      console.log('DATA:', result.data)
      this.setState({ text: result.data.img64 })
    })
  }

  render() {
    const { text } = this.state
    return (
      <div>
        <h1 className="title">scan QR</h1>
        {text}
      </div>
    )
  }
}
