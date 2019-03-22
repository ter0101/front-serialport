import React, { Component } from 'react'
import axios from 'axios'

import { ListGroup, ListGroupItem, Button } from 'reactstrap'
import '../../../App.css'
import './scanqr.css'

export default class scanqr extends Component {
  constructor(props) {
    super(props)

    this.state = {
      qrcode:
        '00020101021153037645802TH29370016A000000677010111011300668992352205406112.00630404E7'
    }
    // setTimeout(this.getDataFromServer, 4500)
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

  decodeTags = tags => {
    var j = 0
    while (j < tags.length) {
      if(tags[j].tag === '29'){
        console.log(tags[j].value)
      }
      j++
    }
  }

  decodeQR = qrcode => {
    // var headerLength = 6 // assuming header length is always 6
    // var header = qrcode.substring(0, 6)

    var tags = []

    // start after header
    var i = 6
    while (i < qrcode.length) {
      var tag = qrcode.substring(i, i + 2)
      i += 2
      var valueLength = Number(qrcode.substring(i, i + 2))
      i += 2
      var value = qrcode.substring(i, i + valueLength)
      i += valueLength
      tags.push({ tag: tag, value: value })
    }
    console.log(tags)

    if (i >= qrcode.length) {
      this.decodeTags(tags)
    }
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
        {this.decodeQR(qrcode)}
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
