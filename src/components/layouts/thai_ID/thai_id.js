import React, { Component } from 'react'
import axios from 'axios'

import './thai_id.css'
import '../../../App.css'
import { Alert, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap'

export default class show_data_test extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: []
    }
    this.getDataFromServer()
  }

  getDataFromServer = () => {
    axios.get('/api/getData').then(result => {
      console.log('DATA:', result)
      this.setState({ data: result.data })
    })
  }

  render() {
    const { data } = this.state
    return (
      <div>
        <h1 className="title">Thai ID</h1>
        <Row>
          <Col xs="6">
            <img
              src="https://static.naewna.com/uploads/news/source/332193.jpg"
              alt="img"
            />
          </Col>
          <Col xs="6">
            {data.length > 0 ? (
              data.map(result => (
                <Form key={result.type}>
                  {/* -----------ID Card---------- */}
                  <FormGroup>
                    <Label for="Indetification">Indetification Number</Label>
                    <Input
                      type="text"
                      name="address"
                      id="Indetification"
                      value={result.data.firstname}
                      readOnly
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
                          value={result.data.firstname}
                          readOnly
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="SernameThai">นามสกุล (ภาษาไทย)</Label>
                        <Input
                          type="text"
                          name="SernameThai"
                          id="SernameThai"
                          value={result.data.firstname}
                          readOnly
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="firstNmarEng">Name (English)</Label>
                        <Input
                          type="text"
                          name="firstNmarEng"
                          id="firstNmarEng"
                          value={result.data.firstname}
                          readOnly
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="SernameEng">Sername (English)</Label>
                        <Input
                          type="text"
                          name="SernameEng"
                          id="SernameEng"
                          value={result.data.firstname}
                          readOnly
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
                      value={result.data.firstname}
                      readOnly
                    />
                  </FormGroup>
                  {/* -----------Birth---------- */}
                  <Row form>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="Birth">Date of Birth</Label>
                        <Input
                          type="text"
                          name="Birth"
                          id="Birth"
                          value={result.data.firstname}
                          readOnly
                        />
                      </FormGroup>
                    </Col>
                    {/* -----------Expiry---------- */}
                    <Col md={6}>
                      <FormGroup>
                        <Label for="Expiry">Date of Expiry</Label>
                        <Input
                          type="text"
                          name="Expiry"
                          id="Expiry"
                          value={result.data.firstname}
                          readOnly
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  {/* <Button>Sign in</Button> */}
                </Form>
              ))
            ) : (
              <Alert color="danger">Don't have any data</Alert>
            )}
          </Col>
        </Row>
      </div>
    )
  }
}
