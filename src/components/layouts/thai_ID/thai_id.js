import React, { Component } from 'react'

import './thai_id.css'
import '../../../App.css'
import { Row, Col, Form, FormGroup, Label, Input, Button, Spinner, Modal, ModalBody, Alert, ModalHeader, ModalFooter } from 'reactstrap'
import defaultImg from '../../../asset/user.png'

export default class show_data_test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }

  writeDataToDevice = () => {
    this.props.writeDataToDevice('a04')
    this.toggle()
    setTimeout(this.getDataFromServer, 14000)
  }

  getDataFromServer = () => {
    this.props.getDataFromServer()
    this.setState(prevState => ({
      modal: false
    }));
  }

  togleError = () => {
    this.props.togleError()
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    const { img64, text64, error } = this.props.state
    const Img = 'data:image/png;base64,' + img64
    const Text = Buffer.from(text64, 'base64').toString()
    const TextArray = Text.split(':')

    return (

      <div>

        <h1 className="title">Thai ID</h1>
        <br />
        <Modal isOpen={this.state.modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
        >
          <ModalBody ><Spinner size="sm" color="primary" /> กำลังอ่านข้อมูล
          </ModalBody>
        </Modal>
        <Modal isOpen={error} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
        ><ModalHeader >ERROR</ModalHeader>
          <ModalBody >เกิดข้อผิดพลาดระหว่างอ่านข้อมูล  กรุณาเสียบบัตรประจำตัวประชาชน
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.togleError}>ตกลง</Button>
          </ModalFooter>
        </Modal>
        <Alert color="danger" isOpen={this.state.alert}>
          กรุณาเสียบบัตรประจำตัวประชาชน
        </Alert>
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

