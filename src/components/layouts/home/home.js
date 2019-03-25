import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Card, CardImg, CardGroup } from 'reactstrap'

import './home.css'
import '../../../App.css'
import cardId from '../../../asset/id-card.png'
import camera from '../../../asset/photo-camera.png'
import scanqr from '../../../asset/qr-code-scan.png'
import card from '../../../asset/card.png'




export default class home extends Component {


  render() {
    return (

      
      <div>
        <h1 className="title">Menu Lists</h1>
        <CardGroup>
          <Card body outline color="white" className="card-click">
            <CardImg top width="100%" src={cardId} alt="Card image cap" />
            <NavLink to="/thai-id" className="card-button btn btn-secondary">
              Thai ID
            </NavLink>
          </Card>
          <Card body outline color="white">
            <CardImg top width="100%" src={camera} alt="Card image cap" />
            <NavLink to="/camera" className="card-button btn btn-secondary">
              Camera
            </NavLink>
          </Card>
          <Card body outline color="white">
            <CardImg top width="100%" src={scanqr} alt="Card image cap" />
            <NavLink to="/scan-qr" className="card-button btn btn-secondary">
              Scan QR
            </NavLink>
          </Card>
          <Card body outline color="white">
            <CardImg top width="100%" src={card} alt="Card image cap" />
          <NavLink to="/magnetic-card" className="card-button btn btn-secondary">
              Magnetic Card
            </NavLink>
          </Card>
        </CardGroup>
      </div>
    )
  }
}
