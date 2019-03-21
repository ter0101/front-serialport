import React, { Component } from 'react'
import axios from 'axios'

import { ListGroup, ListGroupItem, Button } from 'reactstrap'
import '../../../App.css'
import './scanqr.css'

export default class scanqr extends Component {
  constructor(props) {
    super(props)

    this.state = {
      qrcode: ''
    }
    setTimeout(this.getDataFromServer, 4500)
  }

  writeDataToDevice = e => {
    e.preventDefault()
    const command = {
      text: e.currentTarget.value
    }
    axios.post('/api/write', command).then(respones => {
      console.log(respones)
    })
    console.log('COMMAND:', command.text)
  }

  getDataFromServer = () => {
    console.log('GET data from server')
    axios.get('/api/getData').then(result => {
      console.log('DATA:', result.data)
      this.setState({ qrcode: result.data.img64 })
    })
  }

  render() {
    const { qrcode } = this.state
    return (
      <div>
        <h1 className="title">scan QR</h1>
        <div className="group-qrdata">
          <ListGroup>
            <ListGroupItem>
              {qrcode !== '' ? (
                <div>
                  <span className="qrcode">QR Code:&nbsp;&nbsp;&nbsp;</span>
                  <span className="qrcode-text">{qrcode}</span>
                  <Button
                    size="sm"
                    className="button-scan-qr"
                    onClick={this.writeDataToDevice}
                    value="a03"
                  >
                    scan QR
                  </Button>
                  <Button
                    size="sm"
                    className="button-read-qr"
                    onClick={this.getDataFromServer}
                  >
                    รับข้อมูล
                  </Button>
                </div>
              ) : (
                <div>
                  <span className="qrcode">QR Code:&nbsp;&nbsp;&nbsp;</span>
                  <span className="qrcode-text">ไม่มีข้อมูล</span>
                  <Button
                    size="sm"
                    className="button-scan-qr"
                    onClick={this.writeDataToDevice}
                    value="a03"
                  >
                    scan QR
                  </Button>
                  <Button
                    size="sm"
                    className="button-read-qr"
                    onClick={this.getDataFromServer}
                  >
                    รับข้อมูล
                  </Button>
                </div>
              )}
            </ListGroupItem>
          </ListGroup>
        </div>
      </div>
    )
  }
}
