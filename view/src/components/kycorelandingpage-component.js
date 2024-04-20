import React, { useState } from "react";                                                                                                                                                                                                                                                  

import { Row, Col } from 'react-bootstrap';

import "../styles/kycorelandingpage.scss";

import Header from "./header/header-component.js";
import KYlandingpageCommunicationComponent from "./communications/kylandingpage/kylandingpagecommunication-component.js";
import DataLoaderComponent from "./landingpage/loaders/data/dataloader-component.js";
import DataviewComponent from "./landingpage/dataview/dataview-component.js";

import { Swiper, SwiperSlide } from 'swiper/react';

export default function KYcoreLandingPage(props) {

 const [kycoreloadingeffectbackgorund1topposition, kycoreloadingeffectbackgorund1toppositioncb] = useState("-100%");

 function _coreloadingeffectdefaultmodalproportioncbfunction() {
   setdefaultcoreloadingeffectmodalproportion()
 }

 async function setdefaultcoreloadingeffectmodalproportion() {

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

    const _launchinhofffirebg = document.getElementById("kycorelandingpage-coreloadingeffect-launchoffloadingeffect");
  

  await setTimeout( ()=> {

  
    _kycoreloadingeffectmodal.style.top = "100%";     
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

   scrolltodataview();

   scrolltodataviewfireeffect();
   scrolltodataviewremoveopacityfireeffect();
   scrolltodataviewtotallyremovesplashfireeffect();

 }


 async function scrolltodataview() {

  const _kycorelandingpage = document.getElementById("kycorelandingpage-core");
  const _launchinhofffirebg = document.getElementById("kycorelandingpage-coreloadingeffect-launchoffloadingeffect");
  const _astronautcomponent = document.querySelector("#homenavigationsnippetcomponent-socialmedaiandplatformaccountsgridcontainer");
  
  _astronautcomponent.style.top= "0%";

 await setTimeout( ()=> {

   _kycorelandingpage.scrollTo({
     top: 3870,
     left: 0,
     behavior: 'smooth'
   })

  }, 6000)

 }

 async function scrolltodataviewfireeffect() {

  const _launchinhofffirebg = document.getElementById("kycorelandingpage-coreloadingeffect-launchoffloadingeffect");

  await setTimeout( ()=> {
    _launchinhofffirebg.style.top = "0%";
    _launchinhofffirebg.style.opacity = "1";
   }, 6000)

 }

 async function scrolltodataviewremoveopacityfireeffect() {
 
  const _launchinhofffirebg = document.getElementById("kycorelandingpage-coreloadingeffect-launchoffloadingeffect");

  await setTimeout( ()=> {
     _launchinhofffirebg.style.opacity = "0%";
   }, 11100)

 }

 async function scrolltodataviewtotallyremovesplashfireeffect() {
 
  const _launchinhofffirebg = document.getElementById("kycorelandingpage-coreloadingeffect-launchoffloadingeffect");

  await setTimeout( ()=> {
     _launchinhofffirebg.style.top = "-100%";
   }, 14200)
   
 }

 return ( 
  <Col id="kycorelandingpage">
 
    <Col className="kycorelandingpage-backgroundimagecontainer kycorelandingpage-backgroundimagecontainer1">
      <img src="../images/landingpage/backgroundimages/strawberries-7249448_1280.jpg"
           className="kycorelandingpage-backgroundimage"
           alt="KY-IMAGE-3DIMENSIONALBACKGROUND"/>  
    </Col>

    <Col className="kycorelandingpage-backgroundimagecontainer kycorelandingpage-backgroundimagecontainer2">
      <img src="../images/landingpage/backgroundimages/planetearthbackgroundimage.jpg"
           className="kycorelandingpage-backgroundimage"
           alt="KY-IMAGE-3DIMENSIONALBACKGROUND"/>  
    </Col>

    <Col className="kycorelandingpage-backgroundimagecontainer kycorelandingpage-backgroundimagecontainer3">
      <img src="../images/landingpage/backgroundimages/planetfaqsbackgroundimage.jpg"
           className="kycorelandingpage-backgroundimage"
           alt="KY-IMAGE-3DIMENSIONALBACKGROUND"/>  
    </Col>

    <Col className="kycorelandingpage-backgroundimagecontainer kycorelandingpage-backgroundimagecontainer4">
      <img src="../images/landingpage/backgroundimages/planetcommunitybackgroundimage.jpg"
           className="kycorelandingpage-backgroundimage"
           alt="KY-IMAGE-3DIMENSIONALBACKGROUND"/>  
    </Col>

    <Col className="kycorelandingpage-backgroundimagecontainer kycorelandingpage-backgroundimagecontainer5">
      <img src="../images/landingpage/backgroundimages/planetmarketingbackgroundimage.jpg"
           className="kycorelandingpage-backgroundimage"
           alt="KY-IMAGE-3DIMENSIONALBACKGROUND"/>  
    </Col>

    <Col className="kycorelandingpage-backgroundimagecontainer kycorelandingpage-backgroundimagecontainer6">
      <img src="../images/landingpage/backgroundimages/planetprojectsbackgroundimage.jpg"
           className="kycorelandingpage-backgroundimage"
           alt="KY-IMAGE-3DIMENSIONALBACKGROUND"/>  
    </Col>

    <Row id="kycorelandingpage-core"
            onScroll={(evt)=> {

          if ( props.viewport === "xs") {

            const _kycoremainbackgroundimage = document.getElementById("kycorelandingpage-backgroundimage"); 
            
            const _mainnavigationbutton = document.querySelector(".keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationpositioningcontainer");
          
            const _mainnavigationbutton1 = document.querySelector(".keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationpositioningcontainer1");
            const _mainnavigationbutton2 = document.querySelector(".keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationpositioningcontainer2");
            const _mainnavigationbutton3 = document.querySelector(".keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationpositioningcontainer3");
            const _mainnavigationbutton4 = document.querySelector(".keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationpositioningcontainer4");
            const _mainnavigationbutton5 = document.querySelector(".keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationpositioningcontainer5");
            const _mainnavigationbutton6 = document.querySelector(".keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationpositioningcontainer6");
      
            const _astronautcomponent = document.querySelector("#homenavigationsnippetcomponent-socialmedaiandplatformaccountsgridcontainer");

            const _socilamediaandplatformsgridcontainer = document.querySelector("#homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsgridcontainer");
          
            const _socialmediaandplatoformsdatamodal = document.querySelectorAll(".homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsdatagridcontainer-navigationdatacontainer-progresscollayoutcontainer-colcontainer-facebooksocialmediaandplatformsdatacontainer");

            const _skillscompilicationcontainer = document.querySelectorAll(".homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer");

            const { scrollTop, scrollHeight, clientHeight } = evt.target;
            const kycorelangingpagescrolledcurrentposition = Math.ceil(
                (scrollTop / (scrollHeight - clientHeight)) * 100
            );
            
             console.log(kycorelangingpagescrolledcurrentposition)
      
             switch(kycorelangingpagescrolledcurrentposition) {
              case 4: 
               document.querySelector(".kycorelandingpage-backgroundimagecontainer1").style.opacity = "1";
               document.querySelector(".kycorelandingpage-backgroundimagecontainer2").style.opacity = "0";
               document.querySelector(".kycorelandingpage-backgroundimagecontainer3").style.opacity = "0";
               document.querySelector(".kycorelandingpage-backgroundimagecontainer4").style.opacity = "0";
               document.querySelector(".kycorelandingpage-backgroundimagecontainer5").style.opacity = "0";
               document.querySelector(".kycorelandingpage-backgroundimagecontainer6").style.opacity = "0";
               _mainnavigationbutton1.style.left = "-105%";
               _mainnavigationbutton1.style.opacity = "0";
              break;
              case 6: 
              document.querySelector(".kycorelandingpage-backgroundimagecontainer1").style.opacity = "0";
              document.querySelector(".kycorelandingpage-backgroundimagecontainer2").style.opacity = "1";
              document.querySelector(".kycorelandingpage-backgroundimagecontainer3").style.opacity = "0";
              document.querySelector(".kycorelandingpage-backgroundimagecontainer4").style.opacity = "0";
              document.querySelector(".kycorelandingpage-backgroundimagecontainer5").style.opacity = "0";
              document.querySelector(".kycorelandingpage-backgroundimagecontainer6").style.opacity = "0";   
              _mainnavigationbutton1.style.left = "0%";
              _mainnavigationbutton1.style.opacity = "1";
              _mainnavigationbutton2.style.top = "-105%";
              _mainnavigationbutton2.style.opacity = "0";
              break;
              case 9: 
              document.querySelector(".kycorelandingpage-backgroundimagecontainer1").style.opacity = "0";
              document.querySelector(".kycorelandingpage-backgroundimagecontainer2").style.opacity = "1";
              document.querySelector(".kycorelandingpage-backgroundimagecontainer3").style.opacity = "0";
              document.querySelector(".kycorelandingpage-backgroundimagecontainer4").style.opacity = "0";
              document.querySelector(".kycorelandingpage-backgroundimagecontainer5").style.opacity = "0";
              document.querySelector(".kycorelandingpage-backgroundimagecontainer6").style.opacity = "0";
              _mainnavigationbutton2.style.top = "0%";
              _mainnavigationbutton2.style.opacity = "1";
              _mainnavigationbutton3.style.bottom = "-105%";
              _mainnavigationbutton3.style.opacity = "0";
              break;
              case 11: 
              document.querySelector(".kycorelandingpage-backgroundimagecontainer1").style.opacity = "0";
              document.querySelector(".kycorelandingpage-backgroundimagecontainer2").style.opacity = "0";
              document.querySelector(".kycorelandingpage-backgroundimagecontainer3").style.opacity = "1";
              document.querySelector(".kycorelandingpage-backgroundimagecontainer4").style.opacity = "0";
              document.querySelector(".kycorelandingpage-backgroundimagecontainer5").style.opacity = "0";
              document.querySelector(".kycorelandingpage-backgroundimagecontainer6").style.opacity = "0";
              _mainnavigationbutton3.style.bottom = "0%";
              _mainnavigationbutton3.style.opacity = "1";
              _mainnavigationbutton4.style.right = "-105%";
              _mainnavigationbutton4.style.opacity = "0";
              break;
              case 14:
                document.querySelector(".kycorelandingpage-backgroundimagecontainer1").style.opacity = "0";
                document.querySelector(".kycorelandingpage-backgroundimagecontainer2").style.opacity = "0";
                document.querySelector(".kycorelandingpage-backgroundimagecontainer3").style.opacity = "1";
                document.querySelector(".kycorelandingpage-backgroundimagecontainer4").style.opacity = "0";
                document.querySelector(".kycorelandingpage-backgroundimagecontainer5").style.opacity = "0";
                document.querySelector(".kycorelandingpage-backgroundimagecontainer6").style.opacity = "0";
               _mainnavigationbutton4.style.right = "0%";
               _mainnavigationbutton4.style.opacity = "1";
             break;
              case 16: 
              document.querySelector(".kycorelandingpage-backgroundimagecontainer1").style.opacity = "0";
              document.querySelector(".kycorelandingpage-backgroundimagecontainer2").style.opacity = "0";
              document.querySelector(".kycorelandingpage-backgroundimagecontainer3").style.opacity = "0";
              document.querySelector(".kycorelandingpage-backgroundimagecontainer4").style.opacity = "1";
              document.querySelector(".kycorelandingpage-backgroundimagecontainer5").style.opacity = "0";
              document.querySelector(".kycorelandingpage-backgroundimagecontainer6").style.opacity = "0";
              _mainnavigationbutton4.style.right = "0%";
              _mainnavigationbutton4.style.opacity = "1";
             break;
             case 19: 
             document.querySelector(".kycorelandingpage-backgroundimagecontainer1").style.opacity = "0";
             document.querySelector(".kycorelandingpage-backgroundimagecontainer2").style.opacity = "0";
             document.querySelector(".kycorelandingpage-backgroundimagecontainer3").style.opacity = "0";
             document.querySelector(".kycorelandingpage-backgroundimagecontainer4").style.opacity = "1";
             document.querySelector(".kycorelandingpage-backgroundimagecontainer5").style.opacity = "0";
             document.querySelector(".kycorelandingpage-backgroundimagecontainer6").style.opacity = "0";
             _mainnavigationbutton5.style.top = "-105%";
             _mainnavigationbutton5.style.opacity = "0";
            break;
             case 21: 
             document.querySelector(".kycorelandingpage-backgroundimagecontainer1").style.opacity = "0";
             document.querySelector(".kycorelandingpage-backgroundimagecontainer2").style.opacity = "0";
             document.querySelector(".kycorelandingpage-backgroundimagecontainer3").style.opacity = "0";
             document.querySelector(".kycorelandingpage-backgroundimagecontainer4").style.opacity = "0";
             document.querySelector(".kycorelandingpage-backgroundimagecontainer5").style.opacity = "1";
             document.querySelector(".kycorelandingpage-backgroundimagecontainer6").style.opacity = "0";
             _mainnavigationbutton5.style.top = "0%";
            _mainnavigationbutton5.style.opacity = "1";
            break;
              case 30: 
               _astronautcomponent.style.top= "80%";
              break;
              case 34: 
               _astronautcomponent.style.top= "0%";
              break;
               case 43: 
                _socilamediaandplatformsgridcontainer.style.top = "20%";
                _socilamediaandplatformsgridcontainer.style.opacity = "0";
                break;
               case 45: 
                _socilamediaandplatformsgridcontainer.style.top = "0%";
                _socilamediaandplatformsgridcontainer.style.opacity = "1";
               break;
               case 54: 
               _socialmediaandplatoformsdatamodal[0].style.top = "800px";
               break;
              case 55: 
               _socialmediaandplatoformsdatamodal[0].style.top = "0px";
               break;
              case 57: 
               _socialmediaandplatoformsdatamodal[1].style.top = "800px";
              break;
              case 58: 
               _socialmediaandplatoformsdatamodal[1].style.top = "0px";
              break;
              case 62: 
               _socialmediaandplatoformsdatamodal[2].style.top = "800px";
              break;
              case 63: 
               _socialmediaandplatoformsdatamodal[2].style.top = "0px";
              break;
              case 68: 
               _socialmediaandplatoformsdatamodal[3].style.top = "800px";
              break;
              case 69: 
               _socialmediaandplatoformsdatamodal[3].style.top = "0px";
              break;
              case 71: 
              _socialmediaandplatoformsdatamodal[4].style.top = "800px";
              break;
              case 73: 
               _socialmediaandplatoformsdatamodal[4].style.top = "0px";
              break;
              case 74: 
               _socialmediaandplatoformsdatamodal[5].style.top = "800px";
              break;
              case 75: 
               _socialmediaandplatoformsdatamodal[5].style.top = "0px";
              break;
              case 77: 
              _socialmediaandplatoformsdatamodal[6].style.top = "800px";
              break;
              case 79: 
              _socialmediaandplatoformsdatamodal[6].style.top = "0px";
              break;
              case 81: 
              _socialmediaandplatoformsdatamodal[7].style.top = "800px";
              break;
              case 83: 
              _socialmediaandplatoformsdatamodal[7].style.top = "0px";
              break;
              case 85:
                _skillscompilicationcontainer[0].style.top = "180%";
              break;
              case 86:
                _skillscompilicationcontainer[0].style.top = "0%";
              break;
              case 88:
                _skillscompilicationcontainer[1].style.top = "180%";
              break;
              case 90:
                _skillscompilicationcontainer[1].style.top = "0%";
              break;
              case 92:
                _skillscompilicationcontainer[2].style.top = "180%";
              break;
              case 94:
                _skillscompilicationcontainer[2].style.top = "0%";
              break;
              break;
              case 96:
                _skillscompilicationcontainer[3].style.top = "180%";
              break;
              case 98:
                _skillscompilicationcontainer[3].style.top = "0%";
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
                  
                <img src="../images/landingpage/planetsandclouds/planet1rmvdbg.png"
                      className="keyheader-navigationbuttonscontainer-navigationcolcontainer-3dplanet"
                      alt="KY-IMAGE-PLANET"
                      onMouseEnter={()=> {

                        if ( props.viewport !== "xs" ) {

                            const _navigationtooltipcontainer = document.querySelectorAll(".keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer");
                            const _kycorebackgroundimage = document.querySelectorAll(".kycorelandingpage-backgroundimagecontainer");

                            _kycorebackgroundimage[1].style.opacity = "1";
                            _kycorebackgroundimage[2].style.opacity = "0";
                            _kycorebackgroundimage[3].style.opacity = "0";
                            _kycorebackgroundimage[4].style.opacity = "0";

                            _navigationtooltipcontainer[0].style.display = "block";
                        
                        }
                      }}
                      onMouseLeave={()=> {

                        if ( props.viewport !== "xs" ) {
                          const _navigationtooltipcontainer = document.querySelectorAll(".keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer");
                          _navigationtooltipcontainer[0].style.display = "none";
                        }

                        }}/>

                <img src="../images/landingpage/planetsandclouds/cloud1.png"
                      className="keyheader-navigationbuttonscontainer-navigationcolcontainer-cloud1"
                      alt="KY-IMAGE-PLANET"/>

                <img src="../images/landingpage/planetsandclouds/cloud1.png"
                      className="keyheader-navigationbuttonscontainer-navigationcolcontainer-cloud2"
                      alt="KY-IMAGE-PLANET"/>

                <img src="../images/landingpage/planetsandclouds/cloud1.png"
                      className="keyheader-navigationbuttonscontainer-navigationcolcontainer-cloud3"
                      alt="KY-IMAGE-PLANET"/>
                              
                <p className='keyheader-navigationbuttonscontainer-navigationheaderindication'
                  onClick={()=> {

                    if ( props.viewport === "xs" ) {

                     const _planetnavigationtooltipcontainer = document.querySelectorAll(".keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer"); 
                     const _navigationtooltipcontainer = document.querySelectorAll(".keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer");
                     const _kycorebackgroundimage = document.querySelectorAll(".kycorelandingpage-backgroundimagecontainer");
                  
                     _kycorebackgroundimage[1].style.opacity = "1";
                     _kycorebackgroundimage[2].style.opacity = "0";
                     _kycorebackgroundimage[3].style.opacity = "0";
                     _kycorebackgroundimage[4].style.opacity = "0";
                     _kycorebackgroundimage[5].style.opacity = "0";

                     _navigationtooltipcontainer[0].style.display = "block";

                    }
                  }}>Planet Home</p>
                <button className="keyheader-navigationbuttonscontainer-navigationcolcontainer-aboutviewbutton"
                        onClick={(evt)=> {
                          const _navigationtooltipcontainer = document.querySelectorAll(".keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer");
                          _navigationtooltipcontainer[0].style.display = "block";
                        }}>
                  about
                </button>
              </Col>
              <Col className="keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer"
                  onMouseLeave={()=> {
                    if ( props.viewport !== "xs" ) {
                    const _navigationtooltipcontainer = document.querySelectorAll(".keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer");
                    _navigationtooltipcontainer[0].style.display = "none";
                    }
                  }}>
                <Col className="keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer-overflowscrollbarcontainer">
                  <p className="keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer-closebuttonheaderindication"
                     onClick={()=> {
                      const _navigationtooltipcontainer = document.querySelectorAll(".keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer");
                      _navigationtooltipcontainer[0].style.display = "none";
                     }} >
                    x
                  </p>
                  <p className="keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer-headerindication"
                     onClick={()=> {
                       props.threedimensionalplanetsviewcb((view)=> view = "Planet Home Astronaut")
                       const _3dmodal = document.getElementById("kycorelandingpage-coreloadingeffect-3dmodal");
                       _3dmodal.style.top = "50%";
                     }}>01. Being an Astronaut</p>
                  <p className="keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer-headerindication"
                      onClick={()=> {
                        props.threedimensionalplanetsviewcb((view)=> view = "Planet Home Environtment")
                        const _3dmodal = document.getElementById("kycorelandingpage-coreloadingeffect-3dmodal");
                         _3dmodal.style.top = "50%";
                       }}>02. Environtment</p>
                  <p className="keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer-headerindication"
                     onClick={()=> {
                      props.threedimensionalplanetsviewcb((view)=> view = "Planet Home Categories")
                        const _3dmodal = document.getElementById("kycorelandingpage-coreloadingeffect-3dmodal");
                        _3dmodal.style.top = "50%";
                       }}>03. Categories</p>
                  <p className="keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer-headerindication"
                     onClick={()=> {
                      props.threedimensionalplanetsviewcb((view)=> view = "Planet Home Specifications")
                        const _3dmodal = document.getElementById("kycorelandingpage-coreloadingeffect-3dmodal");
                        _3dmodal.style.top = "50%";
                      }}>04. Specifications</p>
                </Col>
              </Col>
          </Col>

          <Col xs={12}
               md={2}
               lg={2}
              className="keyheader-navigationbuttonscontainer-navigationcolcontainer">
            <Col className="keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationpositioningcontainer keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationpositioningcontainer2">
                
              <img src="../images/landingpage/planetsandclouds/planet2rmvdbg.png"
                   className="keyheader-navigationbuttonscontainer-navigationcolcontainer-3dplanet keyheader-navigationbuttonscontainer-navigationcolcontainer-3dplanet2"
                   alt="KY-IMAGE-PLANET"
                   onMouseEnter={()=> {

                    if ( props.viewport !== "xs" ) {

                      const _navigationtooltipcontainer = document.querySelectorAll(".keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer");
                      const _kycorebackgroundimage = document.querySelectorAll(".kycorelandingpage-backgroundimagecontainer");

                       _kycorebackgroundimage[1].style.opacity = "0";
                       _kycorebackgroundimage[2].style.opacity = "1";
                       _kycorebackgroundimage[3].style.opacity = "0";
                       _kycorebackgroundimage[4].style.opacity = "0";

                       _navigationtooltipcontainer[1].style.display = "block";

                    }

                  }}
                  onMouseLeave={()=> {

                    if ( props.viewport !== "xs" ) {

                      const _navigationtooltipcontainer = document.querySelectorAll(".keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer");
                      const _kycorebackgroundimage = document.querySelectorAll(".kycorelandingpage-backgroundimagecontainer");

                      _kycorebackgroundimage[1].style.opacity = "0";
                      _kycorebackgroundimage[2].style.opacity = "1";
                      _kycorebackgroundimage[3].style.opacity = "0";
                      _kycorebackgroundimage[4].style.opacity = "0";
                      _kycorebackgroundimage[5].style.opacity = "0";

                      _navigationtooltipcontainer[1].style.display = "none";

                    }

                  }}/>

              <img src="../images/landingpage/planetsandclouds/cloud5.png"
                    className="keyheader-navigationbuttonscontainer-navigationcolcontainer-cloud4"
                    alt="KY-IMAGE-PLANET"/>

              <img src="../images/landingpage/planetsandclouds/cloud4.png"
                    className="keyheader-navigationbuttonscontainer-navigationcolcontainer-cloud5"
                    alt="KY-IMAGE-PLANET"/>

              <img src="../images/landingpage/planetsandclouds/cloud1.png"
                    className="keyheader-navigationbuttonscontainer-navigationcolcontainer-cloud6"
                    alt="KY-IMAGE-PLANET"/>
                            
              <p className='keyheader-navigationbuttonscontainer-navigationheaderindication'
                onClick={()=> {
                  if ( props.viewport === "xs" ) {
                  const _planetnavigationtooltipcontainer = document.querySelectorAll(".keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer"); 
                  _planetnavigationtooltipcontainer[0].style.display = "block";
                  }
                }}>Planet Faq's</p>
                <button className="keyheader-navigationbuttonscontainer-navigationcolcontainer-aboutviewbutton"
                        onClick={(evt)=> {
                          const _navigationtooltipcontainer = document.querySelectorAll(".keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer");
                          _navigationtooltipcontainer[1].style.display = "block";
                        }}>
                          about
                </button>
            </Col>
            <Col className="keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer"
                onMouseLeave={()=> {
                  if ( props.viewport !== "xs" ) {
                  const _navigationtooltipcontainer = document.querySelectorAll(".keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer");
                  _navigationtooltipcontainer[1].style.display = "none";
                  }
                }}>
              <p className="keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer-closebuttonheaderindication"
                  onClick={(evt)=> {
                    const _navigationtooltipcontainer = document.querySelectorAll(".keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer");
                    _navigationtooltipcontainer[1].style.display = "none";
                  }}>x</p>
              <p className="keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer-headerindication">Explore Home planet</p>
              <p className="keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer-closebuttonheaderindication">x</p>
              <p className="keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer-headerindication">Explore Home planet</p>
              <p className="keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer-closebuttonheaderindication">x</p>
              <p className="keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer-headerindication">Explore Home planet</p>
              <p className="keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer-closebuttonheaderindication">x</p>
            </Col>
          </Col>

          <Col xs={12}
            md={2}
            lg={2}
            className="keyheader-navigationbuttonscontainer-navigationcolcontainer">
              <Col className="keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationpositioningcontainer keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationpositioningcontainer3">
                  
                <img src="../images/landingpage/planetsandclouds/planet3rmvdbg.png"
                      className="keyheader-navigationbuttonscontainer-navigationcolcontainer-3dplanet"
                      alt="KY-IMAGE-PLANET"
                      onMouseEnter={()=> {

                        if ( props.viewport !== "xs" ) {

                          const _navigationtooltipcontainer = document.querySelectorAll(".keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer");
                          const _kycorebackgroundimage = document.querySelectorAll(".kycorelandingpage-backgroundimagecontainer");

                          _kycorebackgroundimage[1].style.opacity = "0";
                          _kycorebackgroundimage[2].style.opacity = "0";
                          _kycorebackgroundimage[3].style.opacity = "1";
                          _kycorebackgroundimage[4].style.opacity = "0";
                          _kycorebackgroundimage[5].style.opacity = "0";

                          _navigationtooltipcontainer[2].style.display = "block";

                        }
                      }}
                      onMouseLeave={()=> {
                        if ( props.viewport !== "xs" ) {
                         const _navigationtooltipcontainer = document.querySelectorAll(".keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer");
                         _navigationtooltipcontainer[2].style.display = "none";
                        }
                      }}/>

              <p className='keyheader-navigationbuttonscontainer-navigationheaderindication'
                onClick={()=> {
                  if ( props.viewport === "xs" ) {
                  const _planetnavigationtooltipcontainer = document.querySelectorAll(".keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer"); 
                  _planetnavigationtooltipcontainer[0].style.display = "block";
                  }
                }}
                onClick={(evt)=> {
                  const _navigationtooltipcontainer = document.querySelectorAll(".keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer");
                  _navigationtooltipcontainer[2].style.display = "block";
                }}>Planet Community</p>
                <button className="keyheader-navigationbuttonscontainer-navigationcolcontainer-aboutviewbutton"
                         onClick={(evt)=> {
                          const _navigationtooltipcontainer = document.querySelectorAll(".keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer");
                          _navigationtooltipcontainer[2].style.display = "block";
                        }}>
                    about
                 </button>
              </Col>
              <Col className="keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer"
                  onMouseLeave={()=> {
                    if ( props.viewport !== "xs" ) {
                    const _navigationtooltipcontainer = document.querySelectorAll(".keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer");
                    _navigationtooltipcontainer[0].style.display = "none";
                    }
                  }}>
                <p className="keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer-closebuttonheaderindication"
                     onClick={(evt)=> {
                      const _navigationtooltipcontainer = document.querySelectorAll(".keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer");
                      _navigationtooltipcontainer[2].style.display = "none";
                    }}>
                  x
                </p>
                <p className="keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer-headerindication">Explore Home planet</p>
                <p className="keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer-closebuttonheaderindication">x</p>
                <p className="keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer-headerindication">Explore Home planet</p>
                <p className="keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer-closebuttonheaderindication">x</p>
                <p className="keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer-headerindication">Explore Home planet</p>
                <p className="keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer-closebuttonheaderindication">x</p>
              </Col>
          </Col>

          <Col xs={12}
               md={2}
               lg={2}
            className="keyheader-navigationbuttonscontainer-navigationcolcontainer">
              <Col className="keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationpositioningcontainer keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationpositioningcontainer4">
                  
                <img src="../images/landingpage/planetsandclouds/planet4rmvdbg.png"
                      className="keyheader-navigationbuttonscontainer-navigationcolcontainer-3dplanet"
                      alt="KY-IMAGE-PLANET"
                      onMouseEnter={()=> {
                        if ( props.viewport !== "xs" ) {

                          const _navigationtooltipcontainer = document.querySelectorAll(".keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer");
                          const _kycorebackgroundimage = document.querySelectorAll(".kycorelandingpage-backgroundimagecontainer");

                          _kycorebackgroundimage[1].style.opacity = "0";
                          _kycorebackgroundimage[2].style.opacity = "0";
                          _kycorebackgroundimage[3].style.opacity = "0";
                          _kycorebackgroundimage[4].style.opacity = "1";
                           _kycorebackgroundimage[5].style.opacity = "0";

                          _navigationtooltipcontainer[3].style.display = "block";

                        }
                      }}
                      onMouseLeave={()=> {
                        if ( props.viewport !== "xs" ) {
                        const _navigationtooltipcontainer = document.querySelectorAll(".keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer");
                        _navigationtooltipcontainer[3].style.display = "none";
                        }
                        }}/>

                <img src="../images/landingpage/planetsandclouds/cloud1.png"
                      className="keyheader-navigationbuttonscontainer-navigationcolcontainer-cloud10"
                      alt="KY-IMAGE-PLANET"/>

                <img src="../images/landingpage/planetsandclouds/cloud1.png"
                      className="keyheader-navigationbuttonscontainer-navigationcolcontainer-cloud11"
                      alt="KY-IMAGE-PLANET"/>

                <img src="../images/landingpage/planetsandclouds/cloud1.png"
                      className="keyheader-navigationbuttonscontainer-navigationcolcontainer-cloud12"
                      alt="KY-IMAGE-PLANET"/>
                              
                <p className='keyheader-navigationbuttonscontainer-navigationheaderindication'
                  onClick={()=> {
                    if ( props.viewport === "xs" ) {
                    const _planetnavigationtooltipcontainer = document.querySelectorAll(".keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer"); 
                    _planetnavigationtooltipcontainer[4].style.display = "block";
                    }
                  }}>Planet Marketing</p>
               <button className="keyheader-navigationbuttonscontainer-navigationcolcontainer-aboutviewbutton"
                        onClick={(evt)=> {
                          const _navigationtooltipcontainer = document.querySelectorAll(".keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer");
                          _navigationtooltipcontainer[3].style.display = "block";
                        }}>about</button>
              </Col>
              <Col className="keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer"
                  onMouseLeave={()=> {
                    if ( props.viewport !== "xs" ) {
                    const _navigationtooltipcontainer = document.querySelectorAll(".keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer");
                    _navigationtooltipcontainer[0].style.display = "none";
                    }
                  }}>
                <p className="keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer-closebuttonheaderindication"
                     onClick={(evt)=> {
                      const _navigationtooltipcontainer = document.querySelectorAll(".keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer");
                      _navigationtooltipcontainer[3].style.display = "none";
                    }}>x</p>
                <p className="keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer-headerindication">Explore Home planet</p>
                <p className="keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer-closebuttonheaderindication">x</p>
                <p className="keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer-headerindication">Explore Home planet</p>
                <p className="keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer-closebuttonheaderindication">x</p>
                <p className="keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer-headerindication">Explore Home planet</p>
                <p className="keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer-closebuttonheaderindication">x</p>
              </Col>
          </Col>

          <Col xs={12}
            md={2}
            lg={2}
            className="keyheader-navigationbuttonscontainer-navigationcolcontainer">
              <Col className="keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationpositioningcontainer keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationpositioningcontainer5">
                  
                <img src="../images/landingpage/planetsandclouds/planet1rmvdbg.png"
                      className="keyheader-navigationbuttonscontainer-navigationcolcontainer-3dplanet"
                      alt="KY-IMAGE-PLANET"
                       onMouseEnter={()=> {
                        if ( props.viewport !== "xs" ) {

                          const _navigationtooltipcontainer = document.querySelectorAll(".keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer");
                          const _kycorebackgroundimage = document.querySelectorAll(".kycorelandingpage-backgroundimagecontainer");

                          _kycorebackgroundimage[1].style.opacity = "0";
                          _kycorebackgroundimage[2].style.opacity = "0";
                          _kycorebackgroundimage[3].style.opacity = "0";
                          _kycorebackgroundimage[4].style.opacity = "0";
                          _kycorebackgroundimage[5].style.opacity = "1";

                          _navigationtooltipcontainer[4].style.display = "block";

                        }
                      }}
                     onMouseLeave={()=> {
                        if ( props.viewport !== "xs" ) {
                        const _navigationtooltipcontainer = document.querySelectorAll(".keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer");
                        _navigationtooltipcontainer[4].style.display = "none";
                        }
                        }}/>

                <img src="../images/landingpage/planetsandclouds/cloud1.png"
                      className="keyheader-navigationbuttonscontainer-navigationcolcontainer-cloud14"
                      alt="KY-IMAGE-PLANET"/>

                <img src="../images/landingpage/planetsandclouds/cloud1.png"
                      className="keyheader-navigationbuttonscontainer-navigationcolcontainer-cloud15"
                      alt="KY-IMAGE-PLANET"/>

                <img src="../images/landingpage/planetsandclouds/cloud1.png"
                      className="keyheader-navigationbuttonscontainer-navigationcolcontainer-cloud16"
                      alt="KY-IMAGE-PLANET"/>
                              
                <p className='keyheader-navigationbuttonscontainer-navigationheaderindication'
                  onClick={()=> {
                    if ( props.viewport === "xs" ) {
                    const _planetnavigationtooltipcontainer = document.querySelectorAll(".keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer"); 
                    _planetnavigationtooltipcontainer[4].style.display = "block";
                    }
                  }}>Planet Project's</p>
                 <button className="keyheader-navigationbuttonscontainer-navigationcolcontainer-aboutviewbutton"   
                         onClick={(evt)=> {
                            const _navigationtooltipcontainer = document.querySelectorAll(".keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer");
                            _navigationtooltipcontainer[4].style.display = "block";
                         }}>
                  about
                 </button>
              </Col>
              <Col className="keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer"
                  onMouseLeave={()=> {
                    if ( props.viewport !== "xs" ) {
                    const _navigationtooltipcontainer = document.querySelectorAll(".keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer");
                    _navigationtooltipcontainer[0].style.display = "none";
                    }
                  }}>
                <p className="keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer-closebuttonheaderindication"
                   onClick={()=> {
                     const _navigationtooltipcontainer = document.querySelectorAll(".keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer");
                     _navigationtooltipcontainer[4].style.display = "none";
                   }}>
                  x
                </p>
                <p className="keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer-headerindication">Explore Home planet</p>
                <p className="keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer-closebuttonheaderindication">x</p>
                <p className="keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer-headerindication">Explore Home planet</p>
                <p className="keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer-closebuttonheaderindication">x</p>
                <p className="keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer-headerindication">Explore Home planet</p>
                <p className="keyheader-navigationbuttonscontainer-navigationcolcontainer-navigationtooltipcontainer-closebuttonheaderindication">x</p>
              </Col>
          </Col>
          
      </Row>
     </Col>

{/* <Col xs={12}  
          md={12}
          lg={12}
          id="kycorelandingpage-xslaunchingeffectscrollingcontainer">
              

     </Col> */}

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
          <DataviewComponent viewport={props.viewport}
                             homedataview={props.homedataview}
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

    <Col id="kycorelandingpage-coreloadingeffect-launchoffloadingeffect">
      <img src="../images/landingpage/launchingoffs/fire.jpg"
           className="kycorelandingpage-coreloadingeffect-launchoffloadingeffect-backgroundimage"
           alt="KY-IMAGE-FIREBG"/>
      
    </Col>

    <Col id="kycorelandingpage-coreloadingeffect-3dmodal">

     <p id="kycorelandingpage-coreloadingeffect-3dmodal-closebuttonheaderindication"
        onClick={()=> {
          const _3dmodal = document.getElementById("kycorelandingpage-coreloadingeffect-3dmodal");
          _3dmodal.style.top = "200%";
        }}>x</p>

     <PlanetsThreeDModal threedimensionalplanetsview={props.threedimensionalplanetsview}
                         threedimensionalplanetsviewcb={props.threedimensionalplanetsviewcb} />

    </Col>

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

  
    <Row id="kycorelandingpage-socialmediaandplatformsnavigationindicator"> 

     <Col id="kycorelandingpage-socialmediaandplatformsnavigationindicator-positionindicatorcontainer">

      <Col className="kycorelandingpage-socialmediaandplatformsnavigationindicator-positionindicator"> 
      </Col>
        <Col className="kycorelandingpage-socialmediaandplatformsnavigationindicator-positionindicator"> 
        </Col>
        <Col className="kycorelandingpage-socialmediaandplatformsnavigationindicator-positionindicator"> 
        </Col>
        <Col className="kycorelandingpage-socialmediaandplatformsnavigationindicator-positionindicator"> 
        </Col>
        <Col className="kycorelandingpage-socialmediaandplatformsnavigationindicator-positionindicator"> 
        </Col>
        <Col className="kycorelandingpage-socialmediaandplatformsnavigationindicator-positionindicator"> 
        </Col>

     </Col>

     <Col id="kycorelandingpage-socialmediaandplatformsnavigationindicator-locationindicator">
      
        <img src="../images/landingpage/icons/spaceship.png"
             id="kycorelandingpage-socialmediaandplatformsnavigationindicator-locationindicator-spaceship"
             alt="KY-IMAGE-SPACESHIP"/>

        <Col id="kycorelandingpage-socialmediaandplatformsnavigationindicator-locationindicator-tooltipnavigationlocationindicationcontainer">
          <p className="kycorelandingpage-socialmediaandplatformsnavigationindicator-locationindicator-tooltipnavigationlocationindicationcontainer-closebuttonheaderindication">x</p>
          <p className="kycorelandingpage-socialmediaandplatformsnavigationindicator-locationindicator-tooltipnavigationlocationindicationcontainer-headerindication">Location indication</p>
        </Col>

     </Col>

    </Row>
   
    <Col id="kycorelandingpage-planetsextradetailscontainer">
      <Col id="kycorelandingpage-planetsextradetailscontainer-astronautplanetsextradetailscontainer-astronautmodal">
        <Row id="homenavigationsnippetcomponent-socialmedaiandplatformaccountsgridcontainer-planetsextradetails">
          <Col xs={12}
              md={12}
              lg={12}
              className="homenavigationsnippetcomponent-socialmedaiandplatformaccountsgridcontainer-colcontainer-planetsextradetails"
              id="homenavigationsnippetcomponent-socialmedaiandplatformaccountsgridcontainer-colcontainer-astronautdatacontainer-planetsextradetails">
             <button id="homenavigationsnippetcomponent-socialmedaiandplatformaccountsgridcontainer-colcontainer-astronautdatacontainer-planetsextradetails-togglebutton"
                     onClick={(evt)=> {
                      const _astronautplanetextradetailsmodal = document.getElementById("kycorelandingpage-planetsextradetailscontainer-astronautplanetsextradetailscontainer-astronautmodal"); 
                      const _astronautplanetsextradetails3dmodal =  document.getElementById("homenavigationsnippetcomponent-socialmedaiandplatformaccountsgridcontainer-planetsextradetails"); 
                      _astronautplanetsextradetails3dmodal.style.animation = "astronautplanetextradetailstransitionanimation 2s infinite";
                     _astronautplanetextradetailsmodal.style.left = "0%";
                     }}>
               x
             </button>
            <Col id="homenavigationsnippetcomponent-socialmedaiandplatformaccountsgridcontainer-colcontainer-astronautdatacontainer-astronautimagecontainer-planetsextradetails">
            <img src="../images/icons/socialmediaandplatforms/astronaut.png"
                  id="homenavigationsnippetcomponent-socialmedaiandplatformaccountsgridcontainer-astronautimage-planetsextradetails"
                  alt="KY-IMAGE-ASTRONAUT"
                  onMouseEnter={()=> {
                    if (props.viewport !== "xs")  {
                      const _astronautimagetooltip = document.getElementById("homenavigationsnippetcomponent-socialmedaiandplatformaccountsgridcontainer-colcontainer-astronautdatacontainer-astronautimagetooltipcontainer-planetsextradetails");
                      _astronautimagetooltip.style.display = "block";
                    }
                  }}
                  onMouseLeave={()=> {
                    if (props.viewport !== "xs")  {
                      const _astronautimagetooltip = document.getElementById("homenavigationsnippetcomponent-socialmedaiandplatformaccountsgridcontainer-colcontainer-astronautdatacontainer-astronautimagetooltipcontainer-planetsextradetails");
                      _astronautimagetooltip.style.display = "none";
                    }
                    
                    }}/>
            </Col>
            <Col id="homenavigationsnippetcomponent-socialmedaiandplatformaccountsgridcontainer-colcontainer-astronautdatacontainer-astronautimagetooltipcontainer-planetsextradetails">
              <p className="homenavigationsnippetcomponent-socialmedaiandplatformaccountsgridcontainer-colcontainer-astronautdatacontainer-astronautimagetooltipcontainer-closebuttonheaderindication-planetsextradetails">x</p>
              <h1 className="homenavigationsnippetcomponent-socialmedaiandplatformaccountsgridcontainer-colcontainer-astronautdatacontainer-astronautimagetooltipcontainer-headerindication-planetsextradetails">Astronaut as best example image</h1>     
              <br />
              <h4 className="homenavigationsnippetcomponent-socialmedaiandplatformaccountsgridcontainer-colcontainer-astronautdatacontainer-astronautimagetooltipcontainer-headerindication-planetsextradetails">Longing finding ways to earn, there a lot to consider in what to do, welding, planting, developing and investments</h4>
              <br />
              <h4 className="homenavigationsnippetcomponent-socialmedaiandplatformaccountsgridcontainer-colcontainer-astronautdatacontainer-astronautimagetooltipcontainer-headerindication-planetsextradetails">Are they not the same topic of building? if they are did together on a sequence?</h4>
              <br />
              <h4 className="homenavigationsnippetcomponent-socialmedaiandplatformaccountsgridcontainer-colcontainer-astronautdatacontainer-astronautimagetooltipcontainer-headerindication-planetsextradetails">You will now find to sustain everyone's finance helping them to survive, giving money to each member of the family making them happy</h4>
              <br />
              <h4 className="homenavigationsnippetcomponent-socialmedaiandplatformaccountsgridcontainer-colcontainer-astronautdatacontainer-astronautimagetooltipcontainer-headerindication-planetsextradetails">We all an astronaut on acting, yet must be done is realization not to bring Gas on Space instead, gather soil and trees to be with the Sun</h4>
            </Col>
          </Col>
          <Col xs={12}
              md={12}
              lg={12}
              className="homenavigationsnippetcomponent-socialmedaiandplatformaccountsgridcontainer-colcontainer-planetsextradetails">
          <Swiper slidesPerView={1}
                  id="homenavigationsnippetcomponent-socialmedaiandplatformaccountsgridcontainer-colcontainer-swiper-planetsextradetails">
            {
            [
              "",
              "../images/landingpage/astronaut/leaves.jpg",
              "../images/landingpage/astronaut/earth.jpg",
              "../images/landingpage/astronaut/people.jpg"
            ].map((contentimage, contentimageidx)=> {
              if ( contentimage === "" ) {
                return (
                  <SwiperSlide key={contentimageidx}
                              id="homenavigationsnippetcomponent-socialmedaiandplatformaccountsgridcontainer-colcontainer-swiperslide-topicthumbnail-planetsextradetails">
                    <h3 className="homenavigationsnippetcomponent-socialmedaiandplatformaccountsgridcontainer-colcontainer-swiperslide-topicthumbnail-headerindication-planetsextradetails">Changeable window</h3> 
                    <p className="homenavigationsnippetcomponent-socialmedaiandplatformaccountsgridcontainer-colcontainer-swiperslide-topicthumbnail-headerindication-planetsextradetails">swipe</p>
                </SwiperSlide>
                )
              } else {
                return (
                  <SwiperSlide key={contentimageidx}
                              className="homenavigationsnippetcomponent-socialmedaiandplatformaccountsgridcontainer-colcontainer-swiperslide-planetsextradetails">
                      <img src={contentimage}
                          className="homenavigationsnippetcomponent-socialmedaiandplatformaccountsgridcontainer-colcontainer-swiperslide-image-planetsextradetails"
                          alt="KY-IMAGE-CONTENT"/>
                  </SwiperSlide>
                )  
              }
            
            })
            }
          </Swiper>
          </Col>
        </Row>
      </Col>
      <Row id="kycorelandingpage-planetsextradetailscontainer-astronautplanetsextradetailscontainer-socialmediaplatformsmodal">

      <button id="kycorelandingpage-planetsextradetailscontainer-astronautplanetsextradetailscontainer-socialmediaplatformsmodal-socialmediaiconcontainer-imagetooltipcontainer-socialmediaplatformsmodalclosebutton"
              onClick={()=> {
               const _socialmediaandplatformsicons = document.getElementById("kycorelandingpage-planetsextradetailscontainer-astronautplanetsextradetailscontainer-socialmediaplatformsmodal");
               _socialmediaandplatformsicons.style.left = "0%";
              }}>
          x
      </button>

       {
        [
          "../images/icons/socialmediaandplatforms/facebook.png",
          "../images/icons/socialmediaandplatforms/gmail.png",
          "../images/icons/socialmediaandplatforms/youtube.png"
        ].map((socialmediaicon, socialmediaiconidx)=> {

        if ( socialmediaiconidx === 0 ) {
          return (
            <Col xs={12}
                 md={12}
                 lg={12}
                 key={socialmediaiconidx}
                 className="kycorelandingpage-planetsextradetailscontainer-astronautplanetsextradetailscontainer-socialmediaplatformsmodal-socialmediaiconcontainer"> 
              <Col className="kycorelandingpage-planetsextradetailscontainer-astronautplanetsextradetailscontainer-socialmediaplatformsmodal-socialmediaiconcontainer-imagecontainer">
               <img src={socialmediaicon}
                    className="kycorelandingpage-planetsextradetailscontainer-astronautplanetsextradetailscontainer-socialmediaplatformsmodal-socialmediaiconcontainer-socialmediaicon"
                    alt="KY-IMAGE-SOCIALMEDIAICON"
                    onClick={()=> {
                        const _astronautplanetextradetailssocialmediaplatformicontooltip3dmodal = document.querySelectorAll(".kycorelandingpage-planetsextradetailscontainer-astronautplanetsextradetailscontainer-socialmediaplatformsmodal-socialmediaiconcontainer-imagetooltipcontainer");
                        _astronautplanetextradetailssocialmediaplatformicontooltip3dmodal[socialmediaiconidx].style.display = "block";
                     }}/>
              </Col>
              <Col className="kycorelandingpage-planetsextradetailscontainer-astronautplanetsextradetailscontainer-socialmediaplatformsmodal-socialmediaiconcontainer-imagetooltipcontainer">
                <Col className="kycorelandingpage-planetsextradetailscontainer-astronautplanetsextradetailscontainer-socialmediaplatformsmodal-socialmediaiconcontainer-imagetooltipcontainer-closebuttoncontainer">
                  <button className="kycorelandingpage-planetsextradetailscontainer-astronautplanetsextradetailscontainer-socialmediaplatformsmodal-socialmediaiconcontainer-imagetooltipcontainer-closebutton"
                          onClick={()=> {
                            const _astronautplanetextradetailssocialmediaplatformicontooltip3dmodal = document.querySelectorAll(".kycorelandingpage-planetsextradetailscontainer-astronautplanetsextradetailscontainer-socialmediaplatformsmodal-socialmediaiconcontainer-imagetooltipcontainer");
                            _astronautplanetextradetailssocialmediaplatformicontooltip3dmodal[socialmediaiconidx].style.display = "none";
                          }}>
                    x
                  </button>
                </Col>
                <Col className="kycorelandingpage-planetsextradetailscontainer-astronautplanetsextradetailscontainer-socialmediaplatformsmodal-socialmediaiconcontainer-imagetooltipcontainer-explanationcontainer">
                  <p className="kycorelandingpage-planetsextradetailscontainer-astronautplanetsextradetailscontainer-socialmediaplatformsmodal-socialmediaiconcontainer-imagetooltipcontainer-explanationcontainer-headerindication">
                    To be renowned as one self-loving, so much, Truth is Truely Loving, that it's simplicity it will gather attention knowing how to protect each others no matter what content.  
                  </p>
                </Col>
              </Col>
            </Col>
          )
        }

        if ( socialmediaiconidx === 1 ) {
          return (
            <Col xs={12}
                 md={12}
                 lg={12}
                 key={socialmediaiconidx}
                 className="kycorelandingpage-planetsextradetailscontainer-astronautplanetsextradetailscontainer-socialmediaplatformsmodal-socialmediaiconcontainer"> 
              <Col className="kycorelandingpage-planetsextradetailscontainer-astronautplanetsextradetailscontainer-socialmediaplatformsmodal-socialmediaiconcontainer-imagecontainer">
               <img src={socialmediaicon}
                    className="kycorelandingpage-planetsextradetailscontainer-astronautplanetsextradetailscontainer-socialmediaplatformsmodal-socialmediaiconcontainer-socialmediaicon"
                    alt="KY-IMAGE-SOCIALMEDIAICON"
                    onClick={()=> {
                        const _astronautplanetextradetailssocialmediaplatformicontooltip3dmodal = document.querySelectorAll(".kycorelandingpage-planetsextradetailscontainer-astronautplanetsextradetailscontainer-socialmediaplatformsmodal-socialmediaiconcontainer-imagetooltipcontainer");
                        _astronautplanetextradetailssocialmediaplatformicontooltip3dmodal[socialmediaiconidx].style.display = "block";
                     }}/>
              </Col>
              <Col className="kycorelandingpage-planetsextradetailscontainer-astronautplanetsextradetailscontainer-socialmediaplatformsmodal-socialmediaiconcontainer-imagetooltipcontainer">
                <Col className="kycorelandingpage-planetsextradetailscontainer-astronautplanetsextradetailscontainer-socialmediaplatformsmodal-socialmediaiconcontainer-imagetooltipcontainer-closebuttoncontainer">
                  <button className="kycorelandingpage-planetsextradetailscontainer-astronautplanetsextradetailscontainer-socialmediaplatformsmodal-socialmediaiconcontainer-imagetooltipcontainer-closebutton"
                          onClick={()=> {
                            const _astronautplanetextradetailssocialmediaplatformicontooltip3dmodal = document.querySelectorAll(".kycorelandingpage-planetsextradetailscontainer-astronautplanetsextradetailscontainer-socialmediaplatformsmodal-socialmediaiconcontainer-imagetooltipcontainer");
                            _astronautplanetextradetailssocialmediaplatformicontooltip3dmodal[socialmediaiconidx].style.display = "none";
                          }}>
                    x
                  </button>
                </Col>
                <Col className="kycorelandingpage-planetsextradetailscontainer-astronautplanetsextradetailscontainer-socialmediaplatformsmodal-socialmediaiconcontainer-imagetooltipcontainer-explanationcontainer">
                  <p className="kycorelandingpage-planetsextradetailscontainer-astronautplanetsextradetailscontainer-socialmediaplatformsmodal-socialmediaiconcontainer-imagetooltipcontainer-explanationcontainer-headerindication">
                   Enjoying message's is such a FUN! Full pocket for a week! Confident being financial stable 4-ever! 
                  </p>
                </Col>
              </Col>
            </Col>
          )
        }

        if ( socialmediaiconidx === 2 ) {
          return (
            <Col xs={12}
                 md={12}
                 lg={12}
                 key={socialmediaiconidx}
                 className="kycorelandingpage-planetsextradetailscontainer-astronautplanetsextradetailscontainer-socialmediaplatformsmodal-socialmediaiconcontainer"> 
              <Col className="kycorelandingpage-planetsextradetailscontainer-astronautplanetsextradetailscontainer-socialmediaplatformsmodal-socialmediaiconcontainer-imagecontainer">
               <img src={socialmediaicon}
                    className="kycorelandingpage-planetsextradetailscontainer-astronautplanetsextradetailscontainer-socialmediaplatformsmodal-socialmediaiconcontainer-socialmediaicon"
                    alt="KY-IMAGE-SOCIALMEDIAICON"
                    onClick={()=> {
                        const _astronautplanetextradetailssocialmediaplatformicontooltip3dmodal = document.querySelectorAll(".kycorelandingpage-planetsextradetailscontainer-astronautplanetsextradetailscontainer-socialmediaplatformsmodal-socialmediaiconcontainer-imagetooltipcontainer");
                        _astronautplanetextradetailssocialmediaplatformicontooltip3dmodal[socialmediaiconidx].style.display = "block";
                     }}/>
              </Col>
              <Col className="kycorelandingpage-planetsextradetailscontainer-astronautplanetsextradetailscontainer-socialmediaplatformsmodal-socialmediaiconcontainer-imagetooltipcontainer">
                <Col className="kycorelandingpage-planetsextradetailscontainer-astronautplanetsextradetailscontainer-socialmediaplatformsmodal-socialmediaiconcontainer-imagetooltipcontainer-closebuttoncontainer">
                  <button className="kycorelandingpage-planetsextradetailscontainer-astronautplanetsextradetailscontainer-socialmediaplatformsmodal-socialmediaiconcontainer-imagetooltipcontainer-closebutton"
                          onClick={()=> {
                            const _astronautplanetextradetailssocialmediaplatformicontooltip3dmodal = document.querySelectorAll(".kycorelandingpage-planetsextradetailscontainer-astronautplanetsextradetailscontainer-socialmediaplatformsmodal-socialmediaiconcontainer-imagetooltipcontainer");
                            _astronautplanetextradetailssocialmediaplatformicontooltip3dmodal[socialmediaiconidx].style.display = "none";
                          }}>
                    x
                  </button>
                </Col>
                <Col className="kycorelandingpage-planetsextradetailscontainer-astronautplanetsextradetailscontainer-socialmediaplatformsmodal-socialmediaiconcontainer-imagetooltipcontainer-explanationcontainer">
                  <p className="kycorelandingpage-planetsextradetailscontainer-astronautplanetsextradetailscontainer-socialmediaplatformsmodal-socialmediaiconcontainer-imagetooltipcontainer-explanationcontainer-headerindication">
                    Mistake's is present everywhere! Here enjoy thoughful contents for a global change! 
                  </p>
                </Col>
              </Col>
            </Col>
          )
        }

        })
       }
      </Row>
      <Col id="kycorelandingpage-planetsextradetailscontainer-astronautplanetsextradetailscontainer-categoriesmodal">
        <button id="kycorelandingpage-planetsextradetailscontainer-astronautplanetsextradetailscontainer-categoriesmodalclosebutton"
              onClick={()=> {
               const _socialmediaandplatformsicons = document.getElementById("kycorelandingpage-planetsextradetailscontainer-astronautplanetsextradetailscontainer-categoriesmodal");
               _socialmediaandplatformsicons.style.left = "0%";
              }}>
          x
        </button>
        <img src="../images/icons/socialmediaandplatforms/3dbrain.png"
             id="kycorelandingpage-planetsextradetailscontainer-astronautplanetsextradetailscontainer-categoriesmodal-3diconbrain"
             alt="KY-IMAGE-3DBRAIN"/>
      </Col>
      <Row id="kycorelandingpage-planetsextradetailscontainer-astronautplanetsextradetailscontainer-specificationsgridmodal">
        {
          [
           {
            icon: "../images/icons/socialmediaandplatforms/website3dimage.png",
            description: "Get your own personal website :)"
           },
           {
           icon: "../images/icons/socialmediaandplatforms/website3dimage.png",
           description: "Get your own personal website :)"
           },
           {
            icon: "../images/icons/socialmediaandplatforms/cellphone3dimage.png",
            description: "Have an Mobile App theme on your own :)"
           },
           {
            icon: "../images/icons/socialmediaandplatforms/3dhouseimage.png",
            description: "New infastractures designs with KY :)"
           },
           {
            icon: "../images/icons/socialmediaandplatforms/3decarimage.png",
            description: "E-car service's :)"
           }
          ].map((specification, specificationidx)=> {
            if ( specificationidx === 0 ) {
              return (
                  <button id="kycorelandingpage-planetsextradetailscontainer-astronautplanetsextradetailscontainer-socialmediaplatformsmodal-socialmediaiconcontainer-imagetooltipcontainer-specificationsmodalclosebutton"
                          onClick={()=> {
                            const _socialmediaandplatformsicons = document.getElementById("kycorelandingpage-planetsextradetailscontainer-astronautplanetsextradetailscontainer-specificationsgridmodal");
                            _socialmediaandplatformsicons.style.left = "0%";
                          }}>
                    x
                  </button>
              )
            } else {
              return (
                <Col key={specificationidx}
                     xs={12}
                     md={12}
                     lg={12}
                     className="kycorelandingpage-planetsextradetailscontainer-astronautplanetsextradetailscontainer-specificationscolcontainer">
                  <img src={specification.icon}
                       className="kycorelandingpage-planetsextradetailscontainer-astronautplanetsextradetailscontainer-specificationscolcontainer-iconimage"
                       alt="KY-IMAGE-ICON" />
                  <p className="kycorelandingpage-planetsextradetailscontainer-astronautplanetsextradetailscontainer-specificationscolcontainer-specificationheaderindication">
                    {specification.description}
                  </p>
                </Col>
              )
            }
          })
        }
      </Row>
    </Col>

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

function PlanetsThreeDModal(props) {

 if ( props.threedimensionalplanetsview === "Planet Home Astronaut" ) {
  return (
   <Row className="threedimensionalmodalplanetsview">
    <Col xs={12}
         md={4}
         lg={4}
         className="threedimensionalmodalplanetsview-headercontainer">
      <p className="threedimensional-headerindication">Being an Astronaut</p>
    </Col>
    <Col xs={12}
         md={8}
         lg={8}
         className="threedimensionalmodalplanetsview-contentcontainer">
       <p className="threedimensional-headerindication">Are you the one also desiring to be an aastronaut?</p>
       <p className="threedimensional-headerindication">See the images on this modal with this topic <button className="threedimensional-topicviewbutton"
                                                                                                             onClick={()=> { 
                                                                                                              const _astronautplanetextradetailsmodal = document.getElementById("kycorelandingpage-planetsextradetailscontainer-astronautplanetsextradetailscontainer-astronautmodal");
                                                                                                              const _astronautplanetsextradetails3dmodal = document.getElementById("homenavigationsnippetcomponent-socialmedaiandplatformaccountsgridcontainer-planetsextradetails");
                                                                                                              _astronautplanetextradetailsmodal.style.left = "105%";
                                                                                                              setTimeout(()=> { 
                                                                                                                _astronautplanetsextradetails3dmodal.style.animation = "astronautplanetextradetailstransitionanimationnone 5s infinite";
                                                                                                              }, 11000)
                                                                                                             }}>drop view modal</button></p>
       <p className="threedimensional-headerindication">Concers will be about Unity and Global warming</p>
    </Col>
   </Row>
   )
 }

 if ( props.threedimensionalplanetsview === "Planet Home Environtment" ) {
  return (
   <Row className="threedimensionalmodalplanetsview">
    <Col xs={12}
         md={4}
         lg={4}
         className="threedimensionalmodalplanetsview-headercontainer">
      <p className="threedimensional-headerindication">Environment</p>
    </Col>
    <Col xs={12}
         md={8}
         lg={8}
         className="threedimensionalmodalplanetsview-contentcontainer">
       <p className="threedimensional-headerindication">A Home means what surrouds us. What surrounds us we must be connected to the same feeling, a topic speaking our Hearts. Popular platforms being used today. Contents may be different from attention, How's your Environtment? <span className="threedimensional-buttonheaderindication"
                                                                                                                                                                                                                                                                                             onClick={()=> {
                                                                                                                                                                                                                                                                                              const _socialmediaandplatformsicons = document.getElementById("kycorelandingpage-planetsextradetailscontainer-astronautplanetsextradetailscontainer-socialmediaplatformsmodal");
                                                                                                                                                                                                                                                                                              _socialmediaandplatformsicons.style.left = "105%";
                                                                                                                                                                                                                                                                                             }}>View platforms</span></p>
    </Col>
   </Row>
   )
 }

 if ( props.threedimensionalplanetsview === "Planet Home Categories" ) {
  return (
   <Row className="threedimensionalmodalplanetsview">
    <Col xs={12}
         md={4}
         lg={4}
         className="threedimensionalmodalplanetsview-headercontainer">
      <p className="threedimensional-headerindication">Categories</p>
    </Col>
    <Col xs={12}
         md={8}
         lg={8}
         className="threedimensionalmodalplanetsview-contentcontainer">
       <p className="threedimensional-headerindication">Importance!!! Also included a Market, Mapping, Research and People categories aside from managing Website's, Mobile Apps, Building and E'car service's. <span className="threedimensional-buttonheaderindication"
                                                                                                                                                                                                                      onClick={()=> {
                                                                                                                                                                                                                      const _socialmediaandplatformsicons = document.getElementById("kycorelandingpage-planetsextradetailscontainer-astronautplanetsextradetailscontainer-categoriesmodal");
                                                                                                                                                                                                                      _socialmediaandplatformsicons.style.left = "105%";
                                                                                                                                                                                                                      }}>Particepate.</span></p>
    </Col>
   </Row>
   )
 }

 if ( props.threedimensionalplanetsview === "Planet Home Specifications" ) {
  return (
   <Row className="threedimensionalmodalplanetsview">
    <Col xs={12}
         md={4}
         lg={4}
         className="threedimensionalmodalplanetsview-headercontainer">
      <p className="threedimensional-headerindication">Specifications</p>
    </Col>
    <Col xs={12}
         md={8}
         lg={8}
         className="threedimensionalmodalplanetsview-contentcontainer">
       <p className="threedimensional-headerindication">What category again? Pretending, See what as much you can to each individual categories on this Planet with it's simpliest specifications with efforts and beyond expectations. <span className="threedimensional-buttonheaderindication"
                                                                                                                                                                                                                      onClick={()=> {
                                                                                                                                                                                                                      const _socialmediaandplatformsicons = document.getElementById("kycorelandingpage-planetsextradetailscontainer-astronautplanetsextradetailscontainer-specificationsgridmodal");
                                                                                                                                                                                                                      _socialmediaandplatformsicons.style.left = "105%";
                                                                                                                                                                                                                      }}>PERCENT.</span></p>
    </Col>
   </Row>
   )
 }

}