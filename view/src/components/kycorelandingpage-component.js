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
          <Col className="keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationpositioningcontainer">
           <p className='keyheader-navigationbuttonscontainer-navigationheaderindication'
              onMouseEnter={()=> {
                 const _navigationtooltipcontainer = document.querySelectorAll(".keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer");
                 _navigationtooltipcontainer[0].style.display = "block";
              }}
              onMouseLeave={()=> {
                const _navigationtooltipcontainer = document.querySelectorAll(".keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer");
                _navigationtooltipcontainer[0].style.display = "none";
               }}>home</p>
          </Col>
          <Col className="keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer"
              onMouseLeave={()=> {
               const _navigationtooltipcontainer = document.querySelectorAll(".keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer");
               _navigationtooltipcontainer[0].style.display = "none";
              }}>
          </Col>
        </Col>
        <Col xs={12}
             md={2}
             lg={2}
             className="keyheader-navigationbuttonscontainer-navigationcolcontainer">
          <Col className="keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationpositioningcontainer">
             <p className='keyheader-navigationbuttonscontainer-navigationheaderindication'
                onMouseEnter={()=> {
                  const _navigationtooltipcontainer = document.querySelectorAll(".keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer");
                  _navigationtooltipcontainer[1].style.display = "block";
               }}
               onMouseLeave={()=> {
                const _navigationtooltipcontainer = document.querySelectorAll(".keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer");
                _navigationtooltipcontainer[1].style.display = "none";
                }}>faq's</p>
          </Col>
          <Col className="keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer"
               onMouseLeave={()=> {
                 const _navigationtooltipcontainer = document.querySelectorAll(".keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer");
                 _navigationtooltipcontainer[1].style.display = "none";
               }}>
          </Col>
        </Col>
        <Col xs={12}
             md={2}
             lg={2}
             className="keyheader-navigationbuttonscontainer-navigationcolcontainer">
          <Col className="keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationpositioningcontainer"
               onMouseEnter={()=> {
                 const _navigationtooltipcontainer = document.querySelectorAll(".keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer");
                 _navigationtooltipcontainer[2].style.display = "block";
               }}
               onMouseLeave={()=> {
                const _navigationtooltipcontainer = document.querySelectorAll(".keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer");
                _navigationtooltipcontainer[2].style.display = "none";
               }}>
            <p className='keyheader-navigationbuttonscontainer-navigationheaderindication'>video</p>
          </Col>
          <Col className="keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer"
               onMouseLeave={()=> {
                  const _navigationtooltipcontainer = document.querySelectorAll(".keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer");
                  _navigationtooltipcontainer[2].style.display = "none";
               }}>
          </Col>
        </Col>
        <Col xs={12}
             md={2}
             lg={2}
             className="keyheader-navigationbuttonscontainer-navigationcolcontainer">
           <Col className="keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationpositioningcontainer">
            <p className='keyheader-navigationbuttonscontainer-navigationheaderindication'
               onMouseEnter={()=> {
                  const _navigationtooltipcontainer = document.querySelectorAll(".keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer");
                  _navigationtooltipcontainer[3].style.display = "block";
               }}
               onMouseLeave={()=> {
                const _navigationtooltipcontainer = document.querySelectorAll(".keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer");
                _navigationtooltipcontainer[3].style.display = "none";
               }}>marketing</p>
           </Col>
          <Col className="keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer"   
               onMouseLeave={()=> {
                const _navigationtooltipcontainer = document.querySelectorAll(".keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer");
                _navigationtooltipcontainer[3].style.display = "none";
               }}>
          </Col>
        </Col>
        <Col xs={12}
             md={2}
             lg={2}
             className="keyheader-navigationbuttonscontainer-navigationcolcontainer">
            <Col className="keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationpositioningcontainer">  
              <p className='keyheader-navigationbuttonscontainer-navigationheaderindication'
                 onMouseEnter={()=> {
                    const _navigationtooltipcontainer = document.querySelectorAll(".keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer");
                    _navigationtooltipcontainer[4].style.display = "block";
                 }}
                 onMouseLeave={()=> {
                  const _navigationtooltipcontainer = document.querySelectorAll(".keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer");
                  _navigationtooltipcontainer[4].style.display = "none";
                 }}>community</p>
            </Col>
            <Col className="keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer"
                 onMouseLeave={()=> {
                   const _navigationtooltipcontainer = document.querySelectorAll(".keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer");
                   _navigationtooltipcontainer[4].style.display = "none";
                 }}>
            </Col>
        </Col>
        <Col xs={12}
             md={2}
             lg={2}
             className="keyheader-navigationbuttonscontainer-navigationcolcontainer">
          <Col className="keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationpositioningcontainer">  
             <p className='keyheader-navigationbuttonscontainer-navigationheaderindication'
                onMouseEnter={()=> {
                    const _navigationtooltipcontainer = document.querySelectorAll(".keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer");
                    _navigationtooltipcontainer[5].style.display = "block";
                }}
                onMouseLeave={()=> {
                  const _navigationtooltipcontainer = document.querySelectorAll(".keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer");
                  _navigationtooltipcontainer[5].style.display = "none";
               }}>projects</p>
           </Col>
           <Col className="keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer"
                onMouseLeave={()=> {
                   const _navigationtooltipcontainer = document.querySelectorAll(".keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer");
                   _navigationtooltipcontainer[5].style.display = "none";
                }}>
           </Col>
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

    <Row id="kycorelandingpage-dataview"> 
     <Col xs={12}
          md={12}
          lg={12}
          id="kycorelandingpage-dataview-closebuttoncontainer"> 
       <button id="kycorelandingpage-dataview-closebuttoncontainer-closebutton">x</button>
     </Col>
     <Col id="kycorelandingpage-dataview-dataviewcontainer">
      <HomeDataView />
     </Col>
    </Row>
   
  </Col>
 )
}

function HomeDataView(props) {

  const homedataview = "marketing";

   if ( homedataview === "marketing" ) {
    return (
      <Row className="homedataviewgridcontainer">
      </Row>
    )
   }
}