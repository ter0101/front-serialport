import React, { Component } from 'react'

import './thai_id.css'
import '../../../App.css'
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import defaultImg from '../../../asset/user.png'

export default class show_data_test extends Component {
  componentDidMount() {
    this.writeDataToDevice('a04')
  }

  writeDataToDevice = () => {
    this.props.writeDataToDevice('a04')
  }

  getDataFromServer = () => {
    this.props.getDataFromServer()
  }

  render() {
    const { img64, text64 } = this.props.state
    const Img = 'data:image/png;base64,' + img64
    const Text = Buffer.from(text64, 'base64').toString()
    const TextArray = Text.split(':')

    return (
      <div>
        <h1 className="title">Thai ID</h1>
        <br />
        <Row>
          <Col xs="6" style={{ textAlign: 'center' }}>
            {img64 !== '' ? (
              <img className="img-thaiid" src={Img} alt="img" />
            ) : (
              <img className="img-thaiid" src={defaultImg} alt="img" />
            )}
            <div className="show-button">
              <Button
                size="sm"
                className="button-reload"
                onClick={this.writeDataToDevice}
              >
                เปิด ThaiID
              </Button>

              <Button
                size="sm"
                className="button-read"
                onClick={this.getDataFromServer}
              >
                รับข้อมูล
              </Button>
            </div>
          </Col>
          <Col xs="6">
            <Form>
              {/* -----------ID Card---------- */}
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="Indetification">
                      หมายเลขบัตรประจำตัวประชาชน
                    </Label>
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
