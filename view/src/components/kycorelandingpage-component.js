import React from 'react';

import { Row, Col } from 'react-bootstrap';

import "../styles/kycorelandingpage.scss";

import Header from "./header/header-component.js";
import KYlandingpageCommunicationComponent from "./communications/kylandingpage/kylandingpagecommunication-component.js";
import DataLoaderComponent from "./landingpage/loaders/data/dataloader-component.js";
import DataviewComponent from "./landingpage/dataview/dataview-component.js";

export default function KYcoreLandingPage(props) {
 return (
  <Col id="kycorelandingpage">

    <Row id="kycorelandingpage-core">

     <Col xs={12}
          md={3}
          lg={3}
          id="kycorelandingpage-headercontainer">
       <Header viewport={props.viewport}/>
     </Col>

     <Col xs={12}
          md={9}
          lg={9}
          id="keyheader-navigationbuttonscontainer">
      <Row id="keyheader-navigationbuttonscontainer-navigationgridcontainer">
        <Col xs={12}
             md={2}
             lg={2}
             className="keyheader-navigationbuttonscontainer-navigationcolcontainer">
          <p className='keyheader-navigationbuttonscontainer-navigationheaderindication'>home</p>
        </Col>
        <Col xs={12}
             md={2}
             lg={2}
             className="keyheader-navigationbuttonscontainer-navigationcolcontainer">
          <p className='keyheader-navigationbuttonscontainer-navigationheaderindication'>faq's</p>
        </Col>
        <Col xs={12}
             md={2}
             lg={2}
             className="keyheader-navigationbuttonscontainer-navigationcolcontainer">
          <p className='keyheader-navigationbuttonscontainer-navigationheaderindication'>video</p>
        </Col>
        <Col xs={12}
             md={2}
             lg={2}
             className="keyheader-navigationbuttonscontainer-navigationcolcontainer">
          <p className='keyheader-navigationbuttonscontainer-navigationheaderindication'>marketing</p>
        </Col>
        <Col xs={12}
             md={2}
             lg={2}
             className="keyheader-navigationbuttonscontainer-navigationcolcontainer">
          <p className='keyheader-navigationbuttonscontainer-navigationheaderindication'>community</p>
        </Col>
        <Col xs={12}
             md={2}
             lg={2}
             className="keyheader-navigationbuttonscontainer-navigationcolcontainer">
          <p className='keyheader-navigationbuttonscontainer-navigationheaderindication'>projects</p>
        </Col>
      </Row>
     </Col>

     <Col xs={12}
         md={12}
         lg={12}
         id="kycorelandingpage-datasdisplaylayoutcontainer">
      {
        props.dataloaderscreenisloading ?
        (
          <DataLoaderComponent />
        ) 
        :
        (
          <DataviewComponent />
        )
      }
     </Col> 

     <Col xs={12}
          md={12}
          lg={12}
          id="kycorelandingpage-communicationoptionscontainer">
      <KYlandingpageCommunicationComponent />
     </Col>
    
    </Row>

    <Row id="kycorelandingpage-coreloadingeffect">
    </Row>
   
  </Col>
 )
}