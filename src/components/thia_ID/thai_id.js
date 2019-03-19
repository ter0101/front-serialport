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
          <Col xs="6">.col-6</Col>
          <Col xs="6">
            <Form>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="firstNmarThai">ชื่อ (ไทย)</Label>
                    <Input
                      type="text"
                      name="firstNmarThai"
                      id="firstNmarThai"
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="examplePassword"></Label>
                    <Input
                      type="password"
                      name="password"
                      id="examplePassword"
                      placeholder="password placeholder"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Label for="exampleAddress">Address</Label>
                <Input
                  type="text"
                  name="address"
                  id="exampleAddress"
                  placeholder="1234 Main St"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleAddress2">Address 2</Label>
                <Input
                  type="text"
                  name="address2"
                  id="exampleAddress2"
                  placeholder="Apartment, studio, or floor"
                />
              </FormGroup>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleCity">City</Label>
                    <Input type="text" name="city" id="exampleCity" />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="exampleState">State</Label>
                    <Input type="text" name="state" id="exampleState" />
                  </FormGroup>
                </Col>
                <Col md={2}>
                  <FormGroup>
                    <Label for="exampleZip">Zip</Label>
                    <Input type="text" name="zip" id="exampleZip" />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup check>
                <Input type="checkbox" name="check" id="exampleCheck" />
                <Label for="exampleCheck" check>
                  Check me out
                </Label>
              </FormGroup>
              <Button>Sign in</Button>
            </Form>
          </Col>
        </Row>
      </div>
    )
  }
}
