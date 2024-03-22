import React from "react";

import { Row, Col, Spinner } from "react-bootstrap";

import "../../../../styles/landingpage/loaders/data/dataloader.scss";

export default function DataLoaderCompoennt() {
 return (   
  <Col id='dataloader'> 
     <Spinner animation="border" size="lg" variant="primary" />
  </Col>
 )
}