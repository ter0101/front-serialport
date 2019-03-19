import React, { Component } from 'react'
import axios from 'axios'

import './thai_id.css'
import '../../App.css'
import {
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from 'reactstrap'

export default class show_data_test extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: null
    }

    this.getDataFromServer()
  }

  getDataFromServer = () => {
    axios.get('/api/getData').then(result => {
      console.log('DATA:', result)
      this.setState({ data: result.data.data })
    })
  }

  render() {
    const { data } = this.state
    return (
      <div>
        <h1 className="title">Thai ID</h1>
        <Row>
          <Col xs="6">
          </Col>

          <Col xs="6">
            <Form>

{/* -----------ID Card---------- */}
              <FormGroup>
                <Label for="exampleAddress">Indetification Number</Label>
                <Input
                  type="text"
                  name="address"
                  id="exampleAddress"
                />
              </FormGroup>
{/* -----------Name---------- */}
            <Row>
            <Col md={6}>
                  <FormGroup>
                    <Label for="firstNmarThai">ชื่อ (ภาษาไทย)</Label>
                    <Input
                      type="text"
                      name="firstNmarThai"
                      id="firstNmarThai"
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="examplePassword">นามสกุล (ภาษาไทย)</Label>
                    <Input
                      type="password"
                      name="password"
                      id="examplePassword"
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="firstNmarThai">Name (English)</Label>
                    <Input
                      type="text"
                      name="firstNmarThai"
                      id="firstNmarThai"
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="examplePassword">Sername (English)</Label>
                    <Input
                      type="password"
                      name="password"
                      id="examplePassword"
                    />
                  </FormGroup>
                </Col>
              </Row>
{/* -----------Address---------- */}
              <FormGroup>
                <Label for="exampleAddress">ที่อยู่</Label>
                <Input
                  type="text"
                  name="address"
                  id="exampleAddress"
                />
              </FormGroup>
{/* -----------Birth---------- */}
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleCity">Date of Birth</Label>
                    <Input type="text" name="city" id="exampleCity" />
                  </FormGroup>
                </Col>
{/* -----------Expiry---------- */}
                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleCity">Date of Expiry</Label>
                    <Input type="text" name="city" id="exampleCity" />
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
