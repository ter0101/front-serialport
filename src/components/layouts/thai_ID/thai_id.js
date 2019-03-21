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
      data:'',
      img64: '',
      text64: ''
    }
    setTimeout(this.getDataFromServer, 13000)
  }

  getDataFromServer = () => {
    this.setState({data:''})
    console.log('run')
    axios.get('/api/getData').then(result => {
      console.log('DATA:', result.data)
      this.setState({ img64: result.data.img64, text64: result.data.text64 })
    })
  }

  render() {
    const { data,img64, text64 } = this.state
    const Img = 'data:image/png;base64,' + img64
    const Text = Buffer.from(text64, 'base64').toString()
    var TextArray = Text.split(':')

    return (
      <div>
        <h1 className="title">Thai ID{data}</h1>
        <Row>
          <Col xs="6">
            {img64 !== '' ? (
              <img className="img-thaiid" src={Img} alt="img" />
            ) : (
              <img className="img-thaiid" src={defaultImg} alt="img" />
            )}
          </Col>
          <Col xs="6">
            <Form>
              {/* -----------ID Card---------- */}
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="Indetification">หมายเลขบัตรประจำตัวประชาชน</Label>
                    <Input
                      type="text"
                      name="address"
                      id="Indetification"
                      value={TextArray[0]}
                      readOnly
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="Birth">เกิดวันที่ </Label>
                    <Input
                      type="text"
                      name="Birth"
                      id="Birth"
                      value={TextArray[4]}
                      readOnly
                    />
                  </FormGroup>
                </Col>
              </Row>
              {/* -----------Name---------- */}
              <FormGroup>
                <Label for="firstNmarThai">ชื่อ-นามสกุล (ภาษาไทย)</Label>
                <Input
                  type="text"
                  name="firstNmarThai"
                  id="firstNmarThai"
                  value={TextArray[1]}
                  readOnly
                />
              </FormGroup>
              <FormGroup>
                <Label for="firstNmarEng">ชื่อ-นามสกุล (English)</Label>
                <Input
                  type="text"
                  name="firstNmarEng"
                  id="firstNmarEng"
                  value={TextArray[2]}
                  readOnly
                />
              </FormGroup>
              {/* -----------Address---------- */}
              <FormGroup>
                <Label for="exampleAddress">ที่อยู่</Label>
                <Input
                  type="textarea"
                  name="address"
                  id="exampleAddress"
                  value={TextArray[3]}
                  readOnly
                />
              </FormGroup>
              {/* -----------Birth---------- */}
              <Row form>
                {/* -----------Issue---------- */}
                <Col md={6}>
                  <FormGroup>
                    <Label for="Expiry">วันออกบัตร</Label>
                    <Input
                      type="text"
                      name="Expiry"
                      id="Expiry"
                      value={TextArray[6]}
                      readOnly
                    />
                  </FormGroup>
                </Col>
                {/* -----------Expiry---------- */}
                <Col md={6}>
                  <FormGroup>
                    <Label for="Expiry">วันหมดอายุ</Label>
                    <Input
                      type="text"
                      name="Expiry"
                      id="Expiry"
                      value={TextArray[7]}
                      readOnly
                    />
                  </FormGroup>
                </Col>
              </Row>
              {/* <Button>Sign in</Button> */}
            </Form>
          </Col>
        </Row>
      </div>
    )
  }
}
