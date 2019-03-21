import React, { Component } from 'react'
import axios from 'axios'

import { ListGroup, ListGroupItem, Button } from 'reactstrap'
import '../../../App.css'

export default class magneticcard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text64: ''
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
      this.setState({ text64: result.data.text64 })
    })
  }

  render() {
    const { text64 } = this.state
    const cardNumberArr = text64.split('data: ')
    const cardNumber = cardNumberArr[0]
    return (
      <div>
        <h1 className="title">magnetic card</h1>
        <div className="group-qrdata">
          <ListGroup>
            <ListGroupItem>
              {cardNumber !== '' ? (
                <div>
                  <span className="qrcode">เลขบัตร:&nbsp;&nbsp;&nbsp;</span>
                  <span className="qrcode-text">{cardNumber}</span>
                  <Button
                    size="sm"
                    className="button-scan-qr"
                    onClick={this.writeDataToDevice}
                    value="a10"
                  >
                    อ่านข้อมูล
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
                  <span className="qrcode">เลขบัตร:&nbsp;&nbsp;&nbsp;</span>
                  <span className="qrcode-text">ไม่มีข้อมูล</span>
                  <Button
                    size="sm"
                    className="button-scan-qr"
                    onClick={this.writeDataToDevice}
                    value="a10"
                  >
                    อ่านข้อมูล
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
