import React, { Component } from 'react'
import { Button } from 'reactstrap'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

export default class home extends Component {

  state = {
    redirect: false
  }

  writeDataToDevice = () => {
    this.setState({ redirect: true })

    const command = {
      text: 'a04'
    }
    axios.post('/api/write', command)

  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/thai-id' />
    }
  }

  render() {
    return (
      <div>
        {this.renderRedirect()}
        <Button onClick={this.writeDataToDevice}>A04 (Thai ID)</Button>
      </div>
    )
  }
}
