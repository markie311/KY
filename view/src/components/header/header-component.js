import React from "react";

import { Col, Row } from 'react-bootstrap';

import "../../styles/header/header.scss";

export default function KYmainnavigationbar(props) { 
 return (
  <Row id="kyheader"> 
    <Col xs={12}
         md={3}
         lg={3}
         id='kyheader-headercontainer'>
     <h1 className='kyheader-headerinication'>KY</h1>
     <p className='kyheader-subheaderinication'>macking</p> 
    </Col>
  </Row>
 )
}