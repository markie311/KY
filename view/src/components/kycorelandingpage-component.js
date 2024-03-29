import React, { useState } from "react";                                                                                                                                                                                                                                                  

import { Row, Col } from 'react-bootstrap';

import "../styles/kycorelandingpage.scss";

import Header from "./header/header-component.js";
import KYlandingpageCommunicationComponent from "./communications/kylandingpage/kylandingpagecommunication-component.js";
import DataLoaderComponent from "./landingpage/loaders/data/dataloader-component.js";
import DataviewComponent from "./landingpage/dataview/dataview-component.js";

export default function KYcoreLandingPage(props) {

 const [kycoreloadingeffectbackgorund1topposition, kycoreloadingeffectbackgorund1toppositioncb] = useState("-100%");

 function _coreloadingeffectdefaultmodalproportioncbfunction() {
   setdefaultcoreloadingeffectmodalproportion()
 }

 function setdefaultcoreloadingeffectmodalproportion() {
  setTimeout(()=> {

    const _kycoreloadingeffectmodal = document.getElementById("kycorelandingpage-coreloadingeffect");
    const _kycoreloadingefectbackground1 = document.getElementById("kycorelandingpage-coreloadingeffect-background1");
    const _kycoreloadingefectbackground2 = document.getElementById("kycorelandingpage-coreloadingeffect-background2");
    const _kycoreloadingefectbackground3 = document.getElementById("kycorelandingpage-coreloadingeffect-background3");
    const _kycoreloadingefectbackground4 = document.getElementById("kycorelandingpage-coreloadingeffect-background4");

    const _kycorelanunchingoffoffbargraphtransitioncontainer = document.getElementById("kycorelandingpage-coreloadingeffect-launchingoffbargraphindicatorlayoutcontainer-bargraphindicatorlayoutcontainer5-transitioncontainer");
    const _kycorelanunchingoffnormalbargraphtransitioncontainer = document.getElementById("kycorelandingpage-coreloadingeffect-launchingoffbargraphindicatorlayoutcontainer-bargraphindicatorlayoutcontainer4-transitioncontainer");
    const _kycorelanunchingoffheatingbargraphtransitioncontainer  = document.getElementById("kycorelandingpage-coreloadingeffect-launchingoffbargraphindicatorlayoutcontainer-bargraphindicatorlayoutcontainer3-transitioncontainer");
    const _kycorelanunchingoffminimizingbargraphtransitioncontainer = document.getElementById("kycorelandingpage-coreloadingeffect-launchingoffbargraphindicatorlayoutcontainer-bargraphindicatorlayoutcontainer2-transitioncontainer");
    const _kycorelanunchingoffdangerbargraphtransitioncontainer = document.getElementById("kycorelandingpage-coreloadingeffect-launchingoffbargraphindicatorlayoutcontainer-bargraphindicatorlayoutcontainer1-transitioncontainer");

    _kycoreloadingefectbackground1.style.top = "-100%";
    _kycoreloadingefectbackground2.style.left = "-100%";
    _kycoreloadingefectbackground3.style.bottom = "-100%";
    _kycoreloadingefectbackground4.style.right = "-100%";
    _kycoreloadingeffectmodal.style.top = "100%"; 
    _kycoreloadingeffectmodal.style.opacity = "1";

    _kycorelanunchingoffoffbargraphtransitioncontainer.style.opacity = "1";
    _kycorelanunchingoffnormalbargraphtransitioncontainer.style.opacity = "1";
    _kycorelanunchingoffheatingbargraphtransitioncontainer.style.opacity = "1";
    _kycorelanunchingoffminimizingbargraphtransitioncontainer.style.opacity = "1";
    _kycorelanunchingoffdangerbargraphtransitioncontainer.style.opacity = "1";

  }, 5500)
 }

 return (
  <Col id="kycorelandingpage">

    <Row id="kycorelandingpage-core"
            onScroll={(evt)=> {

          if ( props.viewport === "xs") {
      
            const _mainnavigationbutton1 = document.querySelector(".keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationpositioningcontainer1");
            const _mainnavigationbutton2 = document.querySelector(".keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationpositioningcontainer2");
            const _mainnavigationbutton3 = document.querySelector(".keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationpositioningcontainer3");
            const _mainnavigationbutton4 = document.querySelector(".keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationpositioningcontainer4");
            const _mainnavigationbutton5 = document.querySelector(".keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationpositioningcontainer5");
            const _mainnavigationbutton6 = document.querySelector(".keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationpositioningcontainer6");
      
          
            const { scrollTop, scrollHeight, clientHeight } = evt.target;
            const kycorelangingpagescrolledcurrentposition = Math.ceil(
                (scrollTop / (scrollHeight - clientHeight)) * 100
            );
             console.log(kycorelangingpagescrolledcurrentposition)
      
             switch(kycorelangingpagescrolledcurrentposition) {
              case 10:
              _mainnavigationbutton1.style.left = "-105%";
              _mainnavigationbutton1.style.opacity = "0";
              break;
              case 12: 
              _mainnavigationbutton1.style.left = "0%";
              _mainnavigationbutton1.style.opacity = "1";
              _mainnavigationbutton2.style.top = "-105%";
              _mainnavigationbutton2.style.opacity = "0";
              break;
              case 14: 
              _mainnavigationbutton2.style.top = "0%";
              _mainnavigationbutton2.style.opacity = "1";
              _mainnavigationbutton3.style.bottom = "-105%";
              _mainnavigationbutton3.style.opacity = "0";
              break;
              case 16: 
              _mainnavigationbutton3.style.bottom = "0%";
              _mainnavigationbutton3.style.opacity = "1";
              _mainnavigationbutton4.style.right = "-105%";
              _mainnavigationbutton4.style.opacity = "0";
              break;
              case 18: 
              _mainnavigationbutton4.style.right = "0%";
              _mainnavigationbutton4.style.opacity = "1";
              _mainnavigationbutton5.style.top = "-105%";
              _mainnavigationbutton5.style.opacity = "0";
              break;
              case 20: 
              _mainnavigationbutton5.style.top = "0%";
              _mainnavigationbutton5.style.opacity = "1";
              _mainnavigationbutton6.style.bottom = "-105%";
              _mainnavigationbutton6.style.opacity = "0";
              break;
              case 22: 
              _mainnavigationbutton6.style.bottom = "0%";
              _mainnavigationbutton6.style.opacity = "1";
              break;
              default:
             }
          } else {
            alert("Invoked")
          }
      
         }}>

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
          <Col className="keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationpositioningcontainer keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationpositioningcontainer1">
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
            <p className="keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer-closebuttonheaderindication">x</p>
            <p className="keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer-headerindication">Process home data component</p>
          </Col>
        </Col>
        <Col xs={12}
             md={2}
             lg={2}
             className="keyheader-navigationbuttonscontainer-navigationcolcontainer">
          <Col className="keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationpositioningcontainer keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationpositioningcontainer2">
             <p className='keyheader-navigationbuttonscontainer-navigationheaderindication'
                onClick={async ()=> {

                  const _kycorelandingpage = document.getElementById("kycorelandingpage-core");
                  _kycorelandingpage.scrollTo({
                    top: 202210,
                    left: 0,
                    behavior: 'smooth'
                  });

                  const _kycoreloadingeffectmodal = document.getElementById("kycorelandingpage-coreloadingeffect");
                  const _kycoreloadingefectbackground1 = document.getElementById("kycorelandingpage-coreloadingeffect-background1");
                  const _kycoreloadingefectbackground2 = document.getElementById("kycorelandingpage-coreloadingeffect-background2");
                  const _kycoreloadingefectbackground3 = document.getElementById("kycorelandingpage-coreloadingeffect-background3");
                  const _kycoreloadingefectbackground4 = document.getElementById("kycorelandingpage-coreloadingeffect-background4");

                  const _kycorelanunchingoffoffbargraphtransitioncontainer = document.getElementById("kycorelandingpage-coreloadingeffect-launchingoffbargraphindicatorlayoutcontainer-bargraphindicatorlayoutcontainer5-transitioncontainer");
                  const _kycorelanunchingoffnormalbargraphtransitioncontainer = document.getElementById("kycorelandingpage-coreloadingeffect-launchingoffbargraphindicatorlayoutcontainer-bargraphindicatorlayoutcontainer4-transitioncontainer");
                  const _kycorelanunchingoffheatingbargraphtransitioncontainer  = document.getElementById("kycorelandingpage-coreloadingeffect-launchingoffbargraphindicatorlayoutcontainer-bargraphindicatorlayoutcontainer3-transitioncontainer");
                  const _kycorelanunchingoffminimizingbargraphtransitioncontainer = document.getElementById("kycorelandingpage-coreloadingeffect-launchingoffbargraphindicatorlayoutcontainer-bargraphindicatorlayoutcontainer2-transitioncontainer");
                  const _kycorelanunchingoffdangerbargraphtransitioncontainer = document.getElementById("kycorelandingpage-coreloadingeffect-launchingoffbargraphindicatorlayoutcontainer-bargraphindicatorlayoutcontainer1-transitioncontainer");

                   _kycoreloadingeffectmodal.style.top = "0%";
                   _kycoreloadingefectbackground1.style.top = "0%";
                   _kycoreloadingefectbackground2 .style.left = "0%";
                   _kycoreloadingefectbackground3.style.bottom = "0%";
                   _kycoreloadingefectbackground4.style.right = "0%";

                  _kycorelanunchingoffoffbargraphtransitioncontainer.style.opacity = "0";
                  _kycorelanunchingoffnormalbargraphtransitioncontainer.style.opacity = "0";
                  _kycorelanunchingoffheatingbargraphtransitioncontainer.style.opacity = "0";
                  _kycorelanunchingoffminimizingbargraphtransitioncontainer.style.opacity = "0";
                  _kycorelanunchingoffdangerbargraphtransitioncontainer.style.opacity = "0";
                 

                  _kycoreloadingeffectmodal.style.opacity = "0%";

                 await _coreloadingeffectdefaultmodalproportioncbfunction();

                }}
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
            <p className="keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer-closebuttonheaderindication">x</p>
            <p className="keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer-headerindication">Process faq's data component</p>
          </Col>
        </Col>
        <Col xs={12}
             md={2}
             lg={2}
             className="keyheader-navigationbuttonscontainer-navigationcolcontainer">
          <Col className="keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationpositioningcontainer keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationpositioningcontainer3"
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
            <p className="keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer-closebuttonheaderindication">x</p>
            <p className="keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer-headerindication">Process video data component</p>
          </Col>
        </Col>
        <Col xs={12}
             md={2}
             lg={2}
             className="keyheader-navigationbuttonscontainer-navigationcolcontainer">
           <Col className="keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationpositioningcontainer keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationpositioningcontainer4">
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
            <p className="keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer-closebuttonheaderindication">x</p>
            <p className="keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer-headerindication">Process marketing data component</p>
          </Col>
        </Col>
        <Col xs={12}
             md={2}
             lg={2}
             className="keyheader-navigationbuttonscontainer-navigationcolcontainer">
            <Col className="keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationpositioningcontainer keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationpositioningcontainer5">  
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
              <p className="keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer-closebuttonheaderindication">x</p>
              <p className="keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer-headerindication">Process community data component</p>
            </Col>
        </Col>
        <Col xs={12}
             md={2}
             lg={2}
             className="keyheader-navigationbuttonscontainer-navigationcolcontainer">
          <Col className="keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationpositioningcontainer keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationpositioningcontainer6">  
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
               <p className="keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer-closebuttonheaderindication">x</p>
               <p className="keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer-headerindication">Process projects data component</p>
           </Col>
        </Col>
      </Row>
     </Col>

     <Col xs={12}  
          md={12}
          lg={12}
          id="kycorelandingpage-xslaunchingeffectscrollingcontainer">
            
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
          <DataviewComponent homedataview={props.homedataview}
                             homedataviewcb={props.homedataviewcb}

                             socialmediaandplatformsdataview={props.socialmediaandplatformsdataview}
                             socialmediaandplatformsdataviewcb={props.socialmediaandplatformsdataviewcb}/>
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

    <Row id="kycorelandingpage-coreloadingeffect-launchoffloadingeffect">
      
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

    <Row id="kycorelandingpage-coreloadingeffect"
         onClick={()=> {

          const _kycoreloadingeffectmodal = document.getElementById("kycorelandingpage-coreloadingeffect");
          const _kycoreloadingefectbackground1 = document.getElementById("kycorelandingpage-coreloadingeffect-background1");
          const _kycoreloadingefectbackground2 = document.getElementById("kycorelandingpage-coreloadingeffect-background2");
          const _kycoreloadingefectbackground3 = document.getElementById("kycorelandingpage-coreloadingeffect-background3");
          const _kycoreloadingefectbackground4 = document.getElementById("kycorelandingpage-coreloadingeffect-background4");

        }}>

      <Row id="kycorelandingpage-coreloadingeffect-launchingoffbargraphindicatorcontainer">
        <Col xs={7}
             md={7}
             lg={7}
             id="kycorelandingpage-coreloadingeffect-launchingoffbargraphstatusindicatorcontainer">
          <Col id="kycorelandingpage-coreloadingeffect-launchingoffbargraphindicatorlayoutcontainer-statusindicationcontainer1">
            <p className="kycorelandingpage-coreloadingeffect-launchingoffbargraphindicatorlayoutcontainer-statusindicationcontainer-headerindication">Category 1</p>
            <p className="kycorelandingpage-coreloadingeffect-launchingoffbargraphindicatorlayoutcontainer-statusindicationcontainer-headerindication">Danger</p>
          </Col>
          <Col id="kycorelandingpage-coreloadingeffect-launchingoffbargraphindicatorlayoutcontainer-statusindicationcontainer2">
           <p className="kycorelandingpage-coreloadingeffect-launchingoffbargraphindicatorlayoutcontainer-statusindicationcontainer-headerindication">Category 1</p>
           <p className="kycorelandingpage-coreloadingeffect-launchingoffbargraphindicatorlayoutcontainer-statusindicationcontainer-headerindication">Minimizing</p>
          </Col>
          <Col id="kycorelandingpage-coreloadingeffect-launchingoffbargraphindicatorlayoutcontainer-statusindicationcontainer3">
           <p className="kycorelandingpage-coreloadingeffect-launchingoffbargraphindicatorlayoutcontainer-statusindicationcontainer-headerindication">Category 1</p>
           <p className="kycorelandingpage-coreloadingeffect-launchingoffbargraphindicatorlayoutcontainer-statusindicationcontainer-headerindication">Heating</p>
          </Col>
          <Col id="kycorelandingpage-coreloadingeffect-launchingoffbargraphindicatorlayoutcontainer-statusindicationcontainer4">
           <p className="kycorelandingpage-coreloadingeffect-launchingoffbargraphindicatorlayoutcontainer-statusindicationcontainer-headerindication">Category 1</p>
           <p className="kycorelandingpage-coreloadingeffect-launchingoffbargraphindicatorlayoutcontainer-statusindicationcontainer-headerindication">Normal</p>
          </Col>
          <Col id="kycorelandingpage-coreloadingeffect-launchingoffbargraphindicatorlayoutcontainer-statusindicationcontainer5">
           <p className="kycorelandingpage-coreloadingeffect-launchingoffbargraphindicatorlayoutcontainer-statusindicationcontainer-headerindication">Category 1</p>
           <p className="kycorelandingpage-coreloadingeffect-launchingoffbargraphindicatorlayoutcontainer-statusindicationcontainer-headerindication">OFF</p>
          </Col>
        </Col>
        <Col xs={5}
             md={5}
             lg={5}
             id="kycorelandingpage-coreloadingeffect-launchingoffbargraphindicatorlayoutcontainer">

          <Col id="kycorelandingpage-coreloadingeffect-launchingoffbargraphindicatorlayoutcontainer-bargraphcontainer">
            <Col id="kycorelandingpage-coreloadingeffect-launchingoffbargraphindicatorlayoutcontainer-bargraphindicatorlayoutcontainer1">
              <Col id="kycorelandingpage-coreloadingeffect-launchingoffbargraphindicatorlayoutcontainer-bargraphindicatorlayoutcontainer1-colorcontainer">
              </Col>
               <Col id="kycorelandingpage-coreloadingeffect-launchingoffbargraphindicatorlayoutcontainer-bargraphindicatorlayoutcontainer1-transitioncontainer">
              </Col>
            </Col>
            <Col id="kycorelandingpage-coreloadingeffect-launchingoffbargraphindicatorlayoutcontainer-bargraphindicatorlayoutcontainer2">
             <Col id="kycorelandingpage-coreloadingeffect-launchingoffbargraphindicatorlayoutcontainer-bargraphindicatorlayoutcontainer2-colorcontainer">
              </Col>
               <Col id="kycorelandingpage-coreloadingeffect-launchingoffbargraphindicatorlayoutcontainer-bargraphindicatorlayoutcontainer2-transitioncontainer">
              </Col>
            </Col>
            <Col id="kycorelandingpage-coreloadingeffect-launchingoffbargraphindicatorlayoutcontainer-bargraphindicatorlayoutcontainer3">
             <Col id="kycorelandingpage-coreloadingeffect-launchingoffbargraphindicatorlayoutcontainer-bargraphindicatorlayoutcontainer3-colorcontainer">
              </Col>
               <Col id="kycorelandingpage-coreloadingeffect-launchingoffbargraphindicatorlayoutcontainer-bargraphindicatorlayoutcontainer3-transitioncontainer">
              </Col>
            </Col>
            <Col id="kycorelandingpage-coreloadingeffect-launchingoffbargraphindicatorlayoutcontainer-bargraphindicatorlayoutcontainer4">
             <Col id="kycorelandingpage-coreloadingeffect-launchingoffbargraphindicatorlayoutcontainer-bargraphindicatorlayoutcontainer4-colorcontainer">
              </Col>
               <Col id="kycorelandingpage-coreloadingeffect-launchingoffbargraphindicatorlayoutcontainer-bargraphindicatorlayoutcontainer4-transitioncontainer">
              </Col>
            </Col>
            <Col id="kycorelandingpage-coreloadingeffect-launchingoffbargraphindicatorlayoutcontainer-bargraphindicatorlayoutcontainer5">
             <Col id="kycorelandingpage-coreloadingeffect-launchingoffbargraphindicatorlayoutcontainer-bargraphindicatorlayoutcontainer5-colorcontainer">
              </Col>
               <Col id="kycorelandingpage-coreloadingeffect-launchingoffbargraphindicatorlayoutcontainer-bargraphindicatorlayoutcontainer5-transitioncontainer">
              </Col>
            </Col>
          </Col>
        </Col>
      </Row>
        
      <Col id="kycorelandingpage-coreloadingeffect-background1">
      </Col>
      <Col id="kycorelandingpage-coreloadingeffect-background2">
      </Col>
      <Col id="kycorelandingpage-coreloadingeffect-background3">
      </Col>
      <Col id="kycorelandingpage-coreloadingeffect-background4">
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