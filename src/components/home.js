import React, { Component } from 'react'
import { Button } from 'reactstrap'
import axios from 'axios'

export default class home extends Component {
  writeDataToDevice = () => {
    const command = {
      text: 'a04'
    }
    axios.post('/api/write', command)
    console.log('ao4')
  }
  render() {
    return (
      <div>
        <Button onClick={this.writeDataToDevice}>A04 (Thai ID)</Button>
      </div>
    )
  }
}
