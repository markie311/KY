import React from "react";

import { Row, Col } from "react-bootstrap";

import "../../../styles/communications/kylandingpage/kylandingpagecommunication.scss";

export default function KYlandingpageCommunicationComponent() {
 return (
  <Row id='kylandingpagecommunication'>
    <Col xs={12}
         md={12}
         lg={12}
         id="kylandingpagecommunication-chatoptionslayoutcontainer">
     <Row id="kylandingpagecommunication-chatoptionslayoutcontainer-gridcontainer">
       <Col xs={4}
            md={4}
            lg={4}
            className='kylandingpagecommunication-chatoptionslayoutcontainer-colcontainer'>
         <p className='kylandingpagecommunication-chatoptionslayoutcontainer-colcontainer-headerindication'>Consult</p>
       </Col>
       <Col xs={4}
            md={4}
            lg={4}
            className='kylandingpagecommunication-chatoptionslayoutcontainer-colcontainer'>
         <p className='kylandingpagecommunication-chatoptionslayoutcontainer-colcontainer-headerindication'>Service's</p>
       </Col>
       <Col xs={4}
            md={4}
            lg={4}
            className='kylandingpagecommunication-chatoptionslayoutcontainer-colcontainer'>
         <p className='kylandingpagecommunication-chatoptionslayoutcontainer-colcontainer-headerindication'>Businesse's</p>
       </Col>
     </Row>
    </Col>
  </Row>
 )
}