import React, { useState } from "react";

import { Row, Col, Spinner } from "react-bootstrap";

import "../../../styles/landingpage/dataview/dataview.scss";

import AstronautComponent from "../../navigationsnippets/home/astronaut-component.js";
import FacebookprofileComponent from "../../navigationsnippets/facebook/facebookprofile-component.js";
import NavigationSnippetComponent from "../../landingpage/snippets/navigationsnippet-component.js";

function simplelaunchofffiredisplay() {

  const _launchinhofffirebg = document.getElementById("kycorelandingpage-coreloadingeffect-launchoffloadingeffect");

  _launchinhofffirebg.style.top = "0%";
  _launchinhofffirebg.style.opacity = "1";

}

function donesimplelaunchofffiredisplay() {

  const _launchinhofffirebg = document.getElementById("kycorelandingpage-coreloadingeffect-launchoffloadingeffect");

   setTimeout( ()=> {
    _launchinhofffirebg.style.opacity = "0";
    compromisedonesimplelaunchofffiredisplay();
   }, 5000)

}

function compromisedonesimplelaunchofffiredisplay() {

  const _launchinhofffirebg = document.getElementById("kycorelandingpage-coreloadingeffect-launchoffloadingeffect");

   setTimeout( ()=> {
    _launchinhofffirebg.style.top = "-100%";
   }, 6000)

}





export default function DataviewComponent(props) {

 if ( props.homedataview === "Home") {
  return (   
    <Col id="dataview"> 
      <DataviewHomeComponent  homedataview={props.homedataview}
                              homedataviewcb={props.homedataviewcb}
                              
                              socialmediaandplatformsdataview={props.socialmediaandplatformsdataview}
                              socialmediaandplatformsdataviewcb={props.socialmediaandplatformsdataviewcb}/>
    </Col>
   )
 }

 if ( props.homedataview === "Facebook") {
  return (   
    <Col id="dataview"> 
      <DataviewFacebookComponent homedataview={props.homedataview}
                                 homedataviewcb={props.homedataviewcb}
                                 
                                 socialmediaandplatformsdataview={props.socialmediaandplatformsdataview}
                                 socialmediaandplatformsdataviewcb={props.socialmediaandplatformsdataviewcb}/>
    </Col>
   )
 }

}

function DataviewHomeComponent(props) {

  const [skillscompilationwebsitedevelopment, skillscompilationwebsitedevelopmentcb] = useState("skills");

  const [socialmediaandplatformsdataview, socialmediaandplatformsdataviewcb] = useState("facebook");

  const [socialmediaandplatformsrapportdataview, socialmediaandplatformsrapportdataviewcb] = useState("facebook")

 return (
  <Row id="homesnippetcomponent">
    <Col xs={12}
         md={3}
         lg={3}
         className="homesnippetcomponent-colcontainer-datamaininformationcontainer">
       <AstronautComponent />
       <FacebookprofileComponent />
    </Col>
    <Col xs={12}
         md={9}
         lg={9}
        className="homesnippetcomponent-colcontainer">
     <Row id="homesnippetcomponent-colcontainer-gridcontainer">

      <Col xs={12}
           md={8}
           lg={8}
           className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer">


        <Row id="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsgridcontainer">
          
          {
           [
            {
              icon: "",
              tooltipheaderindication: "go back to astronaut data display"
            },
            {
              icon: "../images/icons/socialmediaandplatforms/astronaut.png",
              tooltipheaderindication: "go back to astronaut data display"
            },
            {
              icon: "../images/icons/socialmediaandplatforms/facebook.png",
              tooltipheaderindication: "go back to facebook data display"
            },
            {
              icon: "../images/icons/socialmediaandplatforms/gmail.png",
              tooltipheaderindication: "go back to gmail data display"
            },
            {
              icon: "../images/icons/socialmediaandplatforms/youtube.png",
              tooltipheaderindication: "go back to youtube data display"
            },
            {
              icon: "../images/icons/socialmediaandplatforms/letter-x.png",
              tooltipheaderindication: "go back to Xirbit data display"
            },
            {
              icon: "../images/icons/socialmediaandplatforms/letter-g.png",
              tooltipheaderindication: "go back to Gambebook data display"
            },
           ].map((icon, iconidx)=> {
            if ( iconidx ===  0 ) {
              return (
                <Col xs={12}
                     md={12}
                     lg={12}
                     id="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsgridcontainer-notificationcontainer">
                  <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsgridcontainer-notificationcontainer-notificationheaderindication"></p>
                  <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsgridcontainer-notificationcontainer-notificationheaderindication">Arrival at Planet Home</p>
                  <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsgridcontainer-notificationcontainer-notificationheaderindication">Scroll to gather data here.</p>
                  <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsgridcontainer-notificationcontainer-notificationheaderindication">Current location: Base landing</p>
                </Col>
              )
            } else {
              return (
                <Col key={iconidx}
                     xs={4}
                     md={1}
                     lg={1}
                     className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsgridcontainer-colcontainer">
                     <Col className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsgridcontainer-colcontainer-imagecontainer">
                     <img src={icon.icon} 
                          className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsgridcontainer-icon"
                          alt="KY-IMAGE-ICON"
                          onClick={()=> {

                           const _astronautcpmponentcontainer = document.getElementById("homenavigationsnippetcomponent-socialmedaiandplatformaccountsgridcontainer");
                           const _socialmediaandplatformshomedatamodal =   document.querySelector(".socilamediaandplatformshomedataview")
                           const _socialmediaandplatformsrapporthomedatamodal =  document.querySelector(".socilamediaandplatformsrapportdataview-home")
                           const _facebookprofilecomponentcontainer =  document.getElementById("facebookprofilecomponent");
                           const _socialmediaandplatformsfacebookdatamodal =   document.querySelector(".socialmediaandplatformsfacebookdataview")
                           const _socialmediaandplatformsrapportfacebookdatamodal =  document.querySelector(".socilamediaandplatformsrapportdataview-facebook")
   
                           const _skillscompilationcontainer = document.querySelectorAll(".homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer");
                           const _skillspecificationcontainer = document.querySelectorAll(".homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationspecificationcontainer");
   
                           switch(iconidx) {
                             case 1:

                              simplelaunchofffiredisplay();
                              donesimplelaunchofffiredisplay();

                            //   props.socialmediaandplatformsdataviewcb((view)=> view = "home");
                           //   _astronautcpmponentcontainer.style.top = "0%";
                           //   _facebookprofilecomponentcontainer.style.left = "-105%";
                           //   _socialmediaandplatformshomedatamodal.style.top = "0%";
                           //   _socialmediaandplatformsfacebookdatamodal.style.top = "100%";
                           //   _socialmediaandplatformsrapporthomedatamodal.style.top = "-3%";
                           //   _socialmediaandplatformsrapportfacebookdatamodal.style.top = "100%";
                           //   _skillscompilationcontainer[0].style.height = "23%"; 
                           //   skillscompilationwebsitedevelopmentcb((view)=> view = "skills")
                             break;
                             case 2:
                              alert("Synced")
                            //   props.socialmediaandplatformsdataviewcb((view)=> view = "facebook");
                          //  _facebookprofilecomponentcontainer.style.left = "0%";
                          //  _astronautcpmponentcontainer.style.top = "100%";
                          //  _socialmediaandplatformshomedatamodal.style.top = "100%";
                          //  _socialmediaandplatformsfacebookdatamodal.style.top = "0%";
                          //  _socialmediaandplatformsrapporthomedatamodal.style.top = "100%";
                          //  _socialmediaandplatformsrapportfacebookdatamodal.style.top = "0%";
                             break;
                             default:
                            }
   
                            }
                          }
                          onMouseEnter={()=> {
                           const _navigationimagetooltip = document.querySelectorAll(".homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsgridcontainer-colcontainer-tooltipcontainer");
                           _navigationimagetooltip[iconidx].style.display = "block";
                         }}
                         onMouseLeave={()=> {
                             const _navigationimagetooltip = document.querySelectorAll(".homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsgridcontainer-colcontainer-tooltipcontainer");
                             _navigationimagetooltip[iconidx].style.display = "none";
                           }}/>
                     </Col>
                     <Col className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsgridcontainer-colcontainer-tooltipcontainer">
                     <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsgridcontainer-colcontainer-tooltipcontainer-closebuttonheaderindication">x</p>
                     <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsgridcontainer-colcontainer-tooltipcontainer-headerindication">{icon.tooltipheaderindication}</p>
                   </Col>
                </Col>
              )
            }
           })
          }
        </Row>
        
        <Row id="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsdatagridcontainer">

           <SocialmediaAndPlatformsHomeDataView skillscompilationwebsitedevelopment={skillscompilationwebsitedevelopment}
                                                skillscompilationwebsitedevelopmentcb={skillscompilationwebsitedevelopmentcb} />

           <SocialmediaAndPlatformsFacebookDataView skillscompilationwebsitedevelopment={skillscompilationwebsitedevelopment}
                                                    skillscompilationwebsitedevelopmentcb={skillscompilationwebsitedevelopmentcb} />

        </Row>

      </Col>

      <Col xs={12}
           md={4}
           lg={4}
           className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer"
           id="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationsnippetcontainer">
 
       <SocialmediaAndPlatformsRapportHomeDataView skillscompilationwebsitedevelopment={skillscompilationwebsitedevelopment}/> 

       <SocialmediaAndPlatformsRapportFacebookDataView />
      

      </Col>

     </Row>
    </Col>
  </Row>
 )
}

function SocialmediaAndPlatformsHomeDataView(props) {
  return (
    <Col className="socilamediaandplatformshomedataview"> 
     <Row id="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsdatagridcontainer-navigationlayoutcontainer">
      <Col xs={12}
           md={6}
           lg={6}
           id="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsdatagridcontainer-navigationcontainer">
        <p id="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsdatagridcontainer-navigationcontainer-headerindication">Progress</p>
      </Col>
     </Row>
     <Row id="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsdatagridcontainer-navigationdatacontainer">
      <Col xs={12}
            md={6}
            lg={6}
            className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsdatagridcontainer-navigationdatacontainer-progresscollayoutcontainer">
        <Row className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsdatagridcontainer-navigationdatacontainer-progresscolgridtcontainer">
          <Col xs={12}
                md={6}
                lg={6} 
              className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsdatagridcontainer-navigationdatacontainer-progresscollayoutcontainer-colcontainer">
              <Col className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsdatagridcontainer-navigationdatacontainer-progresscollayoutcontainer-colcontainer-datacontainer"
                  onMouseEnter={()=> {
                    const _skillscompilationcontainer = document.querySelectorAll(".homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer");
                    const _skillspecificationcontainer = document.querySelectorAll(".homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationspecificationcontainer");
                 
                    props.skillscompilationwebsitedevelopmentcb((view)=> view = "skills specification")
                      _skillscompilationcontainer[0].style.height = "100%"; 
                    //   _skillspecificationcontainer[0].style.height = "100%"; 
                  }}
                  onMouseLeave={()=> {
                    const _skillscompilationcontainer = document.querySelectorAll(".homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer");
                    const _skillspecificationcontainer = document.querySelectorAll(".homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationspecificationcontainer");
                    //  _skillscompilationcontainer[0].style.height = "23%"; 
                    
                    }}>
                <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsdatagridcontainer-navigationdatacontainer-progresscollayoutcontainer-colcontainer-datacontainer-headerindication">Website development</p>
              </Col>
          </Col>
          <Col xs={12}
                md={6}
                lg={6}
              className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsdatagridcontainer-navigationdatacontainer-progresscollayoutcontainer-colcontainer">
              <Col className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsdatagridcontainer-navigationdatacontainer-progresscollayoutcontainer-colcontainer-datacontainer">
                <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsdatagridcontainer-navigationdatacontainer-progresscollayoutcontainer-colcontainer-datacontainer-headerindication">Mobile application development</p>
              </Col>
          </Col>
          <Col xs={12}
                md={6}
                lg={6}
              className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsdatagridcontainer-navigationdatacontainer-progresscollayoutcontainer-colcontainer">
              <Col className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsdatagridcontainer-navigationdatacontainer-progresscollayoutcontainer-colcontainer-datacontainer">
                <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsdatagridcontainer-navigationdatacontainer-progresscollayoutcontainer-colcontainer-datacontainer-headerindication">Building construction</p>
              </Col>
          </Col>
          <Col xs={12}
                md={6}
                lg={6}
                className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsdatagridcontainer-navigationdatacontainer-progresscollayoutcontainer-colcontainer">
              <Col className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsdatagridcontainer-navigationdatacontainer-progresscollayoutcontainer-colcontainer-datacontainer">
                <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsdatagridcontainer-navigationdatacontainer-progresscollayoutcontainer-colcontainer-datacontainer-headerindication">E-car service's</p>
              </Col>
          </Col>
          </Row>
        </Col>
      <Col xs={12}
            md={6}
            lg={6}
            className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsdatagridcontainer-navigationdatacontainer-progresscollayoutcontainer">
        <Row className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsdatagridcontainer-navigationdatacontainer-progresscolgridtcontainer">
          <Col xs={12}
              md={6}
              lg={6} 
              className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsdatagridcontainer-navigationdatacontainer-progresscollayoutcontainer-colcontainer">
          <Col className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsdatagridcontainer-navigationdatacontainer-progresscollayoutcontainer-colcontainer-datacontainer">
                <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsdatagridcontainer-navigationdatacontainer-progresscollayoutcontainer-colcontainer-datacontainer-headerindication">Marketing</p>
          </Col>
          </Col>
          <Col xs={12}
              md={6}
              lg={6}
              className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsdatagridcontainer-navigationdatacontainer-progresscollayoutcontainer-colcontainer">
            <Col className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsdatagridcontainer-navigationdatacontainer-progresscollayoutcontainer-colcontainer-datacontainer">
                <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsdatagridcontainer-navigationdatacontainer-progresscollayoutcontainer-colcontainer-datacontainer-headerindication">Mapping and deployments</p>
            </Col>
          </Col>
          <Col xs={12}
              md={6}
              lg={6}
              className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsdatagridcontainer-navigationdatacontainer-progresscollayoutcontainer-colcontainer">
            <Col className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsdatagridcontainer-navigationdatacontainer-progresscollayoutcontainer-colcontainer-datacontainer">
                <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsdatagridcontainer-navigationdatacontainer-progresscollayoutcontainer-colcontainer-datacontainer-headerindication">Research</p>
            </Col>
          </Col>
          <Col xs={12}
              md={6}
              lg={6}
              className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsdatagridcontainer-navigationdatacontainer-progresscollayoutcontainer-colcontainer">
          <Col className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsdatagridcontainer-navigationdatacontainer-progresscollayoutcontainer-colcontainer-datacontainer">
                <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsdatagridcontainer-navigationdatacontainer-progresscollayoutcontainer-colcontainer-datacontainer-headerindication">People</p>
          </Col>
          </Col>
        </Row>
      </Col>
     </Row>
    </Col>
   )
}

function SocialmediaAndPlatformsFacebookDataView() {
  return (
<Col className="socialmediaandplatformsfacebookdataview"> 
    <Row id="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsdatagridcontainer-navigationlayoutcontainer">
     <Col xs={6}
           md={6}
           lg={6}
           id="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsdatagridcontainer-navigationcontainer">
       <p id="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsdatagridcontainer-navigationcontainer-headerindication">Contents</p>
     </Col>
    </Row>
    <Row id="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsdatagridcontainer-navigationdatacontainer">
     <Col xs={12}
           md={6}
           lg={6}
           className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsdatagridcontainer-navigationdatacontainer-progresscollayoutcontainer">
       <Row className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsdatagridcontainer-navigationdatacontainer-progresscolgridtcontainer">

         <Col xs={12}
               md={6}
               lg={6} 
             className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsdatagridcontainer-navigationdatacontainer-progresscollayoutcontainer-colcontainer">
             <Col className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsdatagridcontainer-navigationdatacontainer-progresscollayoutcontainer-colcontainer-facebooksocialmediaandplatformsdatacontainer"
                 >
               <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsdatagridcontainer-navigationdatacontainer-progresscollayoutcontainer-colcontainer-datacontainer-facebooksocialmediaandplatformsheaderindication">MYSELF</p>
             </Col>
         </Col>

         <Col xs={12}
               md={6}
               lg={6} 
             className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsdatagridcontainer-navigationdatacontainer-progresscollayoutcontainer-colcontainer">
             <Col className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsdatagridcontainer-navigationdatacontainer-progresscollayoutcontainer-colcontainer-facebooksocialmediaandplatformsdatacontainer">
               <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsdatagridcontainer-navigationdatacontainer-progresscollayoutcontainer-colcontainer-datacontainer-facebooksocialmediaandplatformsheaderindication">Environment</p>
             </Col>
         </Col>
       
         <Col xs={12}
               md={6}
               lg={6} 
             className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsdatagridcontainer-navigationdatacontainer-progresscollayoutcontainer-colcontainer">
             <Col className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsdatagridcontainer-navigationdatacontainer-progresscollayoutcontainer-colcontainer-facebooksocialmediaandplatformsdatacontainer">
               <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsdatagridcontainer-navigationdatacontainer-progresscollayoutcontainer-colcontainer-datacontainer-facebooksocialmediaandplatformsheaderindication">Practice's</p>
             </Col>
         </Col>
       

         <Col xs={12}
               md={6}
               lg={6} 
             className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsdatagridcontainer-navigationdatacontainer-progresscollayoutcontainer-colcontainer">
             <Col className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsdatagridcontainer-navigationdatacontainer-progresscollayoutcontainer-colcontainer-facebooksocialmediaandplatformsdatacontainer">
               <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsdatagridcontainer-navigationdatacontainer-progresscollayoutcontainer-colcontainer-datacontainer-facebooksocialmediaandplatformsheaderindication">Businesse's</p>
             </Col>
         </Col>

         </Row>
       </Col>
     <Col xs={12}
           md={6}
           lg={6}
           className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsdatagridcontainer-navigationdatacontainer-progresscollayoutcontainer">
       <Row className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsdatagridcontainer-navigationdatacontainer-progresscolgridtcontainer">
  
       <Col xs={12}
               md={6}
               lg={6} 
             className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsdatagridcontainer-navigationdatacontainer-progresscollayoutcontainer-colcontainer">
             <Col className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsdatagridcontainer-navigationdatacontainer-progresscollayoutcontainer-colcontainer-facebooksocialmediaandplatformsdatacontainer">
               <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsdatagridcontainer-navigationdatacontainer-progresscollayoutcontainer-colcontainer-datacontainer-facebooksocialmediaandplatformsheaderindication">Platforms</p>
             </Col>
         </Col>
         <Col xs={12}
               md={6}
               lg={6} 
             className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsdatagridcontainer-navigationdatacontainer-progresscollayoutcontainer-colcontainer">
             <Col className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsdatagridcontainer-navigationdatacontainer-progresscollayoutcontainer-colcontainer-facebooksocialmediaandplatformsdatacontainer">
               <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsdatagridcontainer-navigationdatacontainer-progresscollayoutcontainer-colcontainer-datacontainer-facebooksocialmediaandplatformsheaderindication">Contents</p>
             </Col>
         </Col>
         <Col xs={12}
               md={6}
               lg={6} 
             className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsdatagridcontainer-navigationdatacontainer-progresscollayoutcontainer-colcontainer">
             <Col className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsdatagridcontainer-navigationdatacontainer-progresscollayoutcontainer-colcontainer-facebooksocialmediaandplatformsdatacontainer">
               <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsdatagridcontainer-navigationdatacontainer-progresscollayoutcontainer-colcontainer-datacontainer-facebooksocialmediaandplatformsheaderindication">Research</p>
             </Col>
         </Col>
         <Col xs={12}
               md={6}
               lg={6} 
             className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsdatagridcontainer-navigationdatacontainer-progresscollayoutcontainer-colcontainer">
             <Col className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsdatagridcontainer-navigationdatacontainer-progresscollayoutcontainer-colcontainer-facebooksocialmediaandplatformsdatacontainer">
               <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-socialmediaandplatformsdatagridcontainer-navigationdatacontainer-progresscollayoutcontainer-colcontainer-datacontainer-facebooksocialmediaandplatformsheaderindication">People</p>
             </Col>
         </Col>
       </Row>
     </Col>
    </Row>
    </Col>
  )
}

function SocialmediaAndPlatformsRapportHomeDataView(props) {
  return (
  <Col className="socilamediaandplatformsrapportdataview-home">
  {
  [
   {
    compilationheader: "Webiste development"
   },
   {
    compilationheader: "Mobile application development"
   },
   {
    compilationheader: "Building construction"
   },
   {
    compilationheader: "E-car service's"
   }
  ].map((skillscompilation, skillscompilationidx)=> {

    if ( skillscompilationidx === 0 ) {
      return (
       <Col key={skillscompilationidx}
           className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer">
          {
          props.skillscompilationwebsitedevelopment === "skills" ? 
          (
            <React.Fragment>               
             <Col className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer"> 

              <div class="circle-wrap" 
                  onMouseEnter={()=> {
                    const _skillscompilationtooltipcontainer = document.querySelectorAll(".homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer");
                    _skillscompilationtooltipcontainer [skillscompilationidx].style.display = "block";
                  }}
                  onMouseLeave={()=> {
                      // const  _skillscompilationtooltipcontainer= document.querySelectorAll(".homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer");
                    //  _skillscompilationtooltipcontainer[skillscompilationidx].style.display = "none";
                    }}>

                <div class="circle">

                  <div class="mask full">
                  <div class="fill">

                  </div>
                  </div>

                <div class="mask half">
                  <div class="fill">

                  </div>
                </div>

                <div class="inside-circle">
                80%
                </div>

                </div>

              </div>

              <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-headerindication">{skillscompilation.compilationheader}</p>

              </Col>
              <Col className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer"
                  onMouseLeave={()=> {
                      const  _skillscompilationtooltipcontainer= document.querySelectorAll(".homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer");
                      _skillscompilationtooltipcontainer[skillscompilationidx].style.display = "none";
                    }}> 
                <Row className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer">
                  <Col xs={12}
                        md={6}
                        lg={6}
                        className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer"> 
                    <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-closebuttonheaderindication">x</p>
                    <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindication">MARKUP PROGRAMMING LANGUAGE</p>
                    <Row className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationgridcontainer">
                      <Col xs={12}
                          md={6}
                          lg={6} 
                          className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationscontainer">
                        <Row className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationlayoutgridcontainer">
                          <Col  xs={12}
                                md={4}
                                lg={4}
                                className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationlayoutcontainer-headerindicationcontainer">
                            <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-subheaderindication"
                                onMouseEnter={()=> {
                                  const _programminglanguageindicationtooltipcontainer = document.querySelectorAll(".homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationcontainer-tooltipcontainer");
                                  _programminglanguageindicationtooltipcontainer[0].style.display = "block";
                                }}
                                onMouseLeave={()=> {
                                    const _programminglanguageindicationtooltipcontainer= document.querySelectorAll(".homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationcontainer-tooltipcontainer");
                                    _programminglanguageindicationtooltipcontainer[0].style.display = "none";
                                  }}>HTML</p>
                          </Col>
                          <Col xs={12}
                              md={8}
                              lg={8}
                              className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationlayoutcontainer-bargraphlayoutcontainer">
                            <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationlayoutcontainer-bargraphlayoutcontainer-bargraphpercentageheaderindication">40%</p>
                            <div className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationlayoutcontainer-bargraphlayoutcontainer-bargraphcontainer">
                            <div className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationlayoutcontainer-bargraphlayoutcontainer-bargraphbarindication-html"> 
                            </div>
                            </div>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs={12}
                          md={12}
                          lg={12}
                          className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationcontainer-tooltipcontainer">
                      <h1 className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationcontainer-tooltipcontainer-headerindication">HTML</h1>
                      <h6 className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationcontainer-tooltipcontainer-headerindication">(H) yper (T) ext (M) ark up (L) anguage</h6>
                      <br />
                      <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationcontainer-tooltipcontainer-subheaderindication">HTML or hyper markup language is programming language for creating website layout or a web page. A website consists 1 or more than web page that is created using HTML by its pre-defined programming code elements. HTML elements are all considered very important on a way they not only used for website structures because it also give's message to a brower what will be it's header, title and author like "<header></header>" html element.</p>
                      </Col>
                    </Row>
                    <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindication">STYLESHEET</p>

                    <Row className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationgridcontainer">
                      <Col xs={12}
                          md={6}
                          lg={6} 
                          className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationscontainer">
                        <Row className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationlayoutgridcontainer">
                          <Col  xs={12}
                                md={4}
                                lg={4}
                                className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationlayoutcontainer-headerindicationcontainer">
                            <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-subheaderindication"
                                onMouseEnter={()=> {
                                  const _programminglanguageindicationtooltipcontainer = document.querySelectorAll(".homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationcontainer-tooltipcontainer");
                                  _programminglanguageindicationtooltipcontainer[1].style.display = "block";
                                }}
                                onMouseLeave={()=> {
                                  const _programminglanguageindicationtooltipcontainer= document.querySelectorAll(".homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationcontainer-tooltipcontainer");
                                  _programminglanguageindicationtooltipcontainer[1].style.display = "none";
                                }}>CSS</p>
                          </Col>
                          <Col xs={12}
                              md={8}
                              lg={8}
                              className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationlayoutcontainer-bargraphlayoutcontainer">
                            <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationlayoutcontainer-bargraphlayoutcontainer-bargraphpercentageheaderindication">85%</p>
                            <div className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationlayoutcontainer-bargraphlayoutcontainer-bargraphcontainer">
                            <div className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationlayoutcontainer-bargraphlayoutcontainer-bargraphbarindication-css"> 
                            </div>
                            </div>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs={12}
                          md={12}
                          lg={12}
                          className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationcontainer-tooltipcontainer">
                      <h1 className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationcontainer-tooltipcontainer-headerindication">CSS</h1>
                      <h6 className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationcontainer-tooltipcontainer-headerindication">(C) ascading (S) tyle (S) heet</h6>
                      <br />
                      <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationcontainer-tooltipcontainer-subheaderindication">CSS abbreviation stands for cascading style sheets. Its really popular and most used in designing webpage through communication on HTML by using tags to evaluate which structure of webpage needs to be colored, layout, gridded, columned or even animation because CSS also can animated lines and container. By the name itself, as cascading, a website consists of several web page and it is possible on each webpage there is a CSS file included.</p>
                      </Col>
                    </Row>
                    <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindication">UI INTERACTION PROGRAMMING LANGUAGE</p>
                    <Row className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationgridcontainer">
                      <Col xs={12}
                          md={6}
                          lg={6} 
                          className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationscontainer">
                        <Row className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationlayoutgridcontainer">
                          <Col  xs={12}
                                md={4}
                                lg={4}
                                className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationlayoutcontainer-headerindicationcontainer">
                            <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-subheaderindication"
                                onMouseEnter={()=> {
                                  const _programminglanguageindicationtooltipcontainer = document.querySelectorAll(".homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationcontainer-tooltipcontainer");
                                  _programminglanguageindicationtooltipcontainer[2].style.display = "block";
                                }}
                                onMouseLeave={()=> {
                                    const _programminglanguageindicationtooltipcontainer= document.querySelectorAll(".homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationcontainer-tooltipcontainer");
                                    _programminglanguageindicationtooltipcontainer[2].style.display = "none";
                                  }}>JAVASCRIPT</p>
                          </Col>
                          <Col xs={12}
                              md={8}
                              lg={8}
                              className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationlayoutcontainer-bargraphlayoutcontainer">
                            <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationlayoutcontainer-bargraphlayoutcontainer-bargraphpercentageheaderindication">90%</p>
                            <div className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationlayoutcontainer-bargraphlayoutcontainer-bargraphcontainer">
                            <div className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationlayoutcontainer-bargraphlayoutcontainer-bargraphbarindication-js"> 
                            </div>
                            </div>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs={12}
                          md={12}
                          lg={12}
                          className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationcontainer-tooltipcontainer">
                      <h1 className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationcontainer-tooltipcontainer-headerindication">JS</h1>
                      <h6 className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationcontainer-tooltipcontainer-headerindication">(J) ava (S) cript</h6>
                      <br />
                      <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationcontainer-tooltipcontainer-subheaderindication">What is JavaScript and why we use? JavaScript (JS) is a cross-platform, object-oriented programming language used by developers to make web pages interactive. It allows developers to create dynamically updating content, use animations, pop-up menus, clickable buttons, control multimedia to self host or embed from other social platforms if allowed. By Javascript and it's current capabilities to animate and interact on HTML and CSS domain, it's achievable to have the best UI for all purpose's.</p>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={12}
                        md={6}
                        lg={6}
                        className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer">
                    <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindication">Other programming language</p>
                    <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindication">MARKUP PROGRAMMING LANGUAGE</p>
                    <Row className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationgridcontainer">
                      <Col xs={12}
                          md={6}
                          lg={6} 
                          className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationscontainer">
                        <Row className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationlayoutgridcontainer">
                          <Col  xs={12}
                                md={4}
                                lg={4}
                                className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationlayoutcontainer-headerindicationcontainer">
                            <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-subheaderindication"
                                onMouseEnter={()=> {
                                  const _programminglanguageindicationtooltipcontainer = document.querySelectorAll(".homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationcontainer-tooltipcontainer");
                                  _programminglanguageindicationtooltipcontainer[3].style.display = "block";
                                }}
                                onMouseLeave={()=> {
                                    const _programminglanguageindicationtooltipcontainer= document.querySelectorAll(".homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationcontainer-tooltipcontainer");
                                    _programminglanguageindicationtooltipcontainer[3].style.display = "none";
                                  }}>XML</p>
                          </Col>
                          <Col xs={12}
                              md={8}
                              lg={8}
                              className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationlayoutcontainer-bargraphlayoutcontainer">
                            <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationlayoutcontainer-bargraphlayoutcontainer-bargraphpercentageheaderindication">60%</p>
                            <div className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationlayoutcontainer-bargraphlayoutcontainer-bargraphcontainer">
                            <div className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationlayoutcontainer-bargraphlayoutcontainer-bargraphbarindication-html"> 
                            </div>
                            </div>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs={12}
                          md={12}
                          lg={12}
                          className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationcontainer-tooltipcontainer">
                      <h1 className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationcontainer-tooltipcontainer-headerindication">XML</h1>
                      <h6 className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationcontainer-tooltipcontainer-headerindication">(E) xtensible (M) ark up (L) anguage</h6>
                      <br />
                      <br />
                      <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationcontainer-tooltipcontainer-subheaderindication">Extensible Markup Language (XML) lets you define and store data in a shareable manner. XML supports information exchange between computer systems such as websites, databases, and third-party applications.  For two disparate systems to exchange information, they need to agree upon a file format. ( XML standardizes this process )</p>
                      </Col>
                    </Row>
                    <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindication">Styles</p>
                    <Row className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationgridcontainer">
                      <Col xs={12}
                          md={6}
                          lg={6} 
                          className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationscontainer">
                        <Row className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationlayoutgridcontainer">
                          <Col  xs={12}
                                md={4}
                                lg={4}
                                className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationlayoutcontainer-headerindicationcontainer">
                            <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-subheaderindication"
                                onMouseEnter={()=> {
                                  const _programminglanguageindicationtooltipcontainer = document.querySelectorAll(".homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationcontainer-tooltipcontainer");
                                  _programminglanguageindicationtooltipcontainer[4].style.display = "block";
                                }}
                                onMouseLeave={()=> {
                                    const _programminglanguageindicationtooltipcontainer= document.querySelectorAll(".homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationcontainer-tooltipcontainer");
                                    _programminglanguageindicationtooltipcontainer[4].style.display = "none";
                                  }}>Jquery</p>
                          </Col>
                          <Col xs={12}
                              md={8}
                              lg={8}
                              className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationlayoutcontainer-bargraphlayoutcontainer">
                            <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationlayoutcontainer-bargraphlayoutcontainer-bargraphpercentageheaderindication">90%</p>
                            <div className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationlayoutcontainer-bargraphlayoutcontainer-bargraphcontainer">
                            <div className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationlayoutcontainer-bargraphlayoutcontainer-bargraphbarindication-html"> 
                            </div>
                            </div>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs={12}
                          md={12}
                          lg={12}
                          className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationcontainer-tooltipcontainer">
                      <h1 className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationcontainer-tooltipcontainer-headerindication">JQUERY</h1>
                      <h6 className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationcontainer-tooltipcontainer-headerindication">jQuery</h6>
                      <br />
                      <br />
                      <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationcontainer-tooltipcontainer-subheaderindication">Jquery is a lightweight, "write less, do more", JavaScript library or more of an extension for optimization. The purpose of jQuery is to make it much easier to use JavaScript on your website. jQuery takes a lot of common tasks that require many lines of JavaScript code to accomplish, and wraps them into methods that you can call with a single line of code.</p>
                      </Col>
                    </Row>
                    <Row className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationgridcontainer">
                      <Col xs={12}
                          md={6}
                          lg={6} 
                          className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationscontainer">
                        <Row className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationlayoutgridcontainer">
                          <Col  xs={12}
                                md={4}
                                lg={4}
                                className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationlayoutcontainer-headerindicationcontainer">
                            <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-subheaderindication"
                                onMouseEnter={()=> {
                                  const _programminglanguageindicationtooltipcontainer = document.querySelectorAll(".homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationcontainer-tooltipcontainer");
                                  _programminglanguageindicationtooltipcontainer[5].style.display = "block";
                                }}
                                onMouseLeave={()=> {
                                    const _programminglanguageindicationtooltipcontainer= document.querySelectorAll(".homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationcontainer-tooltipcontainer");
                                    _programminglanguageindicationtooltipcontainer[5].style.display = "none";
                                  }}>SCSS</p>
                          </Col>
                          <Col xs={12}
                              md={8}
                              lg={8}
                              className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationlayoutcontainer-bargraphlayoutcontainer">
                            <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationlayoutcontainer-bargraphlayoutcontainer-bargraphpercentageheaderindication">40%</p>
                            <div className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationlayoutcontainer-bargraphlayoutcontainer-bargraphcontainer">
                            <div className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationlayoutcontainer-bargraphlayoutcontainer-bargraphbarindication-html"> 
                            </div>
                            </div>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs={12}
                          md={12}
                          lg={12}
                          className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationcontainer-tooltipcontainer">
                      <h1 className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationcontainer-tooltipcontainer-headerindication">SCSS</h1>
                      <h6 className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationcontainer-tooltipcontainer-headerindication">(S) assy (C) ascading (S) tyle (S) heet</h6>
                      <br />
                      <br />
                      <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-headerindicationcontainer-tooltipcontainer-subheaderindication">The term SCSS is an acronym for Sassy Cascading Style Sheets. It is basically a more advanced and evolved variant of the CSS language. SCSS when used as on stylesheets it's like the same of the pure CSS yet it is more appropriate to use when desiring a large and big amount of data to used on smaller file storage.</p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </React.Fragment>
          )
          : 
          (
          <Col key={skillscompilationidx}
               className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationspecificationcontainer">

             <Col className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationspecificationcontainer-layoutcontainer-websitespecificationsandorders">
              <Col className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationspecificationcontainer-layoutcontainer-headerindicationcontainer">
                <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationspecificationcontainer-headerindication"
                   onMouseEnter={()=> {
                     const _websiteorderspecificationtooltipcontainer = document.querySelectorAll(".homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationspecificationcontainer-layoutcontainer-tooltipcontainer");
                     _websiteorderspecificationtooltipcontainer[0].style.display = "block";
                   }}>Website specificatons and orders</p>
              </Col>
              <Col className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationspecificationcontainer-layoutcontainer-tooltipcontainer"
                   onMouseLeave={()=> {
                     const _websiteorderspecificationtooltipcontainer = document.querySelectorAll(".homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationspecificationcontainer-layoutcontainer-tooltipcontainer");
                    _websiteorderspecificationtooltipcontainer[0].style.display = "none";
                   }}>
                 <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationspecificationcontainer-layoutcontainer-tooltipcontainer-closebuttonheaderindication">x</p>
                 <h3 className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationspecificationcontainer-layoutcontainer-tooltipcontainer-headerindication">Website specification</h3>
                 <p></p>
                 <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationspecificationcontainer-layoutcontainer-tooltipcontainer-headerindication">" On website specification what you want will be achievable yet only on the listed price because there are some designs that is a want, so complicated to program and develop. It is a recommendation to go to consults before to communicate and payments will be done last after your own www. domain name is viewed on a browser on mobiles, tablets, laptops and computers. There is also some templates here included to be enjoyabled viewed. "</p>
              </Col>
             </Col>

             <Col className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationspecificationcontainer-layoutcontainer-currentorders">
              <Col className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationspecificationcontainer-layoutcontainer-headerindicationcontainer">
                <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationspecificationcontainer-headerindication"
                   onMouseEnter={()=> {
                    const _websiteorderspecificationtooltipcontainer = document.querySelectorAll(".homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationspecificationcontainer-layoutcontainer-tooltipcontainer");
                    _websiteorderspecificationtooltipcontainer[1].style.display = "block";
                  }}>Current orders</p>
                <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationspecificationcontainer-headerindication"
                   onMouseEnter={()=> {
                     const _websiteorderspecificationtooltipcontainer = document.querySelectorAll(".homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationspecificationcontainer-layoutcontainer-tooltipcontainer");
                     _websiteorderspecificationtooltipcontainer[1].style.display = "block";
                   }}>0 out of 3</p>
              </Col>
              <Col className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationspecificationcontainer-layoutcontainer-tooltipcontainer"
                   onMouseLeave={()=> {
                     const _websiteorderspecificationtooltipcontainer = document.querySelectorAll(".homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationspecificationcontainer-layoutcontainer-tooltipcontainer");
                    _websiteorderspecificationtooltipcontainer[1].style.display = "none";
                   }}>
                  <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationspecificationcontainer-layoutcontainer-tooltipcontainer-closebuttonheaderindication">x</p>
                 <h3 className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationspecificationcontainer-layoutcontainer-tooltipcontainer-headerindication">Why out of 3?</h3>
                 <br />
                 <br />
                 <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationspecificationcontainer-layoutcontainer-tooltipcontainer-headerindication">" To develop is not that easy and experience's will tell when it's fast done and layout perfectly for change, update and adding contents on a background. Included a reseved queuing a decision personally was followed to wait for some reasons e.g marketing, symphaty. "</p>
              </Col>
             </Col>

             <Col className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationspecificationcontainer-layoutcontainer-queue">
              <Col className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationspecificationcontainer-layoutcontainer-headerindicationcontainer">
                <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationspecificationcontainer-headerindication"
                  onMouseEnter={()=> {
                    const _websiteorderspecificationtooltipcontainer = document.querySelectorAll(".homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationspecificationcontainer-layoutcontainer-tooltipcontainer");
                   _websiteorderspecificationtooltipcontainer[2].style.display = "block";
                  }}>On queue, 0 reserved</p>
                <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationspecificationcontainer-headerindication"
                   onMouseEnter={()=> {
                     const _websiteorderspecificationtooltipcontainer = document.querySelectorAll(".homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationspecificationcontainer-layoutcontainer-tooltipcontainer");
                     _websiteorderspecificationtooltipcontainer[2].style.display = "block";
                   }}>By date sequence website ordered</p>
              </Col>
              <Col className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationspecificationcontainer-layoutcontainer-tooltipcontainer"
                     onMouseLeave={()=> {
                      const _websiteorderspecificationtooltipcontainer = document.querySelectorAll(".homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationspecificationcontainer-layoutcontainer-tooltipcontainer");
                     _websiteorderspecificationtooltipcontainer[2].style.display = "none";
                    }}>
                 <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationspecificationcontainer-layoutcontainer-tooltipcontainer-closebuttonheaderindication">x</p>
                 <h3 className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationspecificationcontainer-layoutcontainer-tooltipcontainer-headerindication">A decision followed</h3>
                 <br />
                 <br />
                 <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationspecificationcontainer-layoutcontainer-tooltipcontainer-headerindication">" As a personal decision followed to wait on queuing when there is still someone that their platforms are develop for some reasons e.g marketing, symphaty, there was a communication that can be used so experience's will meet all expectations. "</p>
              </Col>
             </Col>

             <Col className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationspecificationcontainer-layoutcontainer-currentdevelopers">
              <Col className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationspecificationcontainer-layoutcontainer-headerindicationcontainer">
                <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationspecificationcontainer-headerindication">Current developers</p>
                <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationspecificationcontainer-headerindication"
                   onMouseEnter={()=> {
                    const _websiteorderspecificationtooltipcontainer = document.querySelectorAll(".homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationspecificationcontainer-layoutcontainer-currentdeveloperstooltipcontainer");
                    const _websiteorderspecificationkyprofilepicturetooltipcontainer = document.querySelectorAll(".homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationspecificationcontainer-layoutcontainer-currentdeveloperstooltipcontainer-kyprofilepictureandmottotooltipcontainer");
                    _websiteorderspecificationtooltipcontainer[0].style.display = "block";
                    _websiteorderspecificationkyprofilepicturetooltipcontainer[0].style.display = "block";
                  }}>Mark Beloy, <span className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationspecificationcontainer-titleheaderindication">Owner</span></p>
              </Col>
              <Col className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationspecificationcontainer-layoutcontainer-currentdeveloperstooltipcontainer">
                 <Col className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationspecificationcontainer-layoutcontainer-currentdeveloperstooltipcontainer-detailscontainer">
                   <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationspecificationcontainer-layoutcontainer-tooltipcontainer-closebuttonheaderindication">x</p>
                   <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationspecificationcontainer-layoutcontainer-currentdeveloperstooltipcontainer-detailscontainer-headerindication">Position, owner</p>
                   <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationspecificationcontainer-layoutcontainer-currentdeveloperstooltipcontainer-detailscontainer-headerindication">KY development, 18/03/2024</p>
                   <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationspecificationcontainer-layoutcontainer-currentdeveloperstooltipcontainer-detailscontainer-headerindication"
                      onMouseEnter={()=> {
                        const _websiteorderspecificationtooltipcontainer = document.querySelectorAll(".homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationspecificationcontainer-layoutcontainer-currentdeveloperstooltipcontainer-kyprofilepictureandmottotooltipcontainer");
                        _websiteorderspecificationtooltipcontainer[0].style.display = "block";
                      }}>KY profile picture</p>
                 </Col> 
                 <Col className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationspecificationcontainer-layoutcontainer-currentdeveloperstooltipcontainer-kyprofilepictureandmottotooltipcontainer"
                      onMouseLeave={()=> {
                         const _websiteorderspecificationtooltipcontainer = document.querySelectorAll(".homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationspecificationcontainer-layoutcontainer-currentdeveloperstooltipcontainer");
                         _websiteorderspecificationtooltipcontainer[0].style.display = "none";
                       }}>
                    <Col className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationspecificationcontainer-layoutcontainer-currentdeveloperstooltipcontainer-kyprofilepictureandmottotooltipcontainer-profilepicturecontainer">
                        <Col className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationspecificationcontainer-layoutcontainer-currentdeveloperstooltipcontainer-kyprofilepictureandmottotooltipcontainer-profilepicturecontainer-picturelayoutcontainer">
                        </Col>
                        <Col className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationspecificationcontainer-layoutcontainer-currentdeveloperstooltipcontainer-kyprofilepictureandmottotooltipcontainer-profilepicturecontainer-picturemodalcontainer">
                        </Col>
                    </Col>
                    <Col className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationspecificationcontainer-layoutcontainer-currentdeveloperstooltipcontainer-kyprofilepictureandmottotooltipcontainer-descriptioncontainer">
                    </Col>
                 </Col>
              </Col>
             </Col>

             <Col className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationspecificationcontainer-layoutcontainer-posibilities">
              <Col className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationspecificationcontainer-layoutcontainer-possibilitiesheaderindicationcontainer">
                <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationspecificationcontainer-headerindication">Possibilitie's</p>
                 <Row className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationspecificationcontainer-layoutcontainer-posibilitiesgridheaderindicationcontainer">
                 {
                 [
                  "E-commerce",
                  "Portfolio",
                  "Blogs",
                   "Vlogs",
                   "Busines website",
                   "Media website",
                   "Personal website",
                   "Nonprofit website",
                   "News website",
                   "Educational website",
                   "Forum website",
                   "Brochure website",
                   "Crowfunding website",
                   "Landing page website",
                   "Portal website",
                   "Membership website",
                   "Photo sharing website",
                   "Business website",
                   "Community forum website",
                   "Wiki website",
                   "Event website"
                 ].map((websitepossibilities, websitepossibilitiesidx)=> {
                  return (
                   <Col xs={12}
                        md={12}
                        lg={12}
                        className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationspecificationcontainer-layoutcontainer-posibilitiesgridheaderindicationcontainer-colcontainer">
                     <Col className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationspecificationcontainer-layoutcontainer-posibilitiesgridheaderindicationcontainer-colcontainer-websitepossibilitiescontainer">
                       <span key={websitepossibilitiesidx}
                             className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationspecificationcontainer-websitepossibilitiesheaderindication"
                             onMouseEnter={()=> {
                              const _websiteorderspecificationtooltipcontainer = document.querySelectorAll(".homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationspecificationcontainer-layoutcontainer-websitepossibilitiesspecificationtooltipcontainer");
                              _websiteorderspecificationtooltipcontainer[0].style.display = "block";
                            }}>
                              {websitepossibilities}
                      </span>
                     </Col>
                    </Col>
                  )
                 })
                 }
                 </Row>
              </Col>
              <Col className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationspecificationcontainer-layoutcontainer-websitepossibilitiesspecificationtooltipcontainer"
                   onMouseLeave={()=> {
                    const _websiteorderspecificationtooltipcontainer = document.querySelectorAll(".homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationspecificationcontainer-layoutcontainer-websitepossibilitiesspecificationtooltipcontainer");
                    _websiteorderspecificationtooltipcontainer[0].style.display = "none";
                  }}>
               <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationspecificationcontainer-layoutcontainer-tooltipcontainer-closebuttonheaderindication">x</p> 
              </Col>
             </Col>

           </Col>
          )
        }
       </Col>     
       )
    } 

      if ( skillscompilationidx === 1 ) {
        return (
         <Col key={skillscompilationidx}
              className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer">
        <Col className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer">

        <div class="circle-wrap"
             onMouseEnter={()=> {
               const _skillscompilationtooltipcontainer = document.querySelectorAll(".homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer");
               _skillscompilationtooltipcontainer [skillscompilationidx].style.display = "block";
             }}
             onMouseLeave={()=> {
                // const  _skillscompilationtooltipcontainer= document.querySelectorAll(".homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer");
               //  _skillscompilationtooltipcontainer[skillscompilationidx].style.display = "none";
               }}>

           <div class="circle">

            <div class="mask full">
             <div class="fill">

             </div>
             </div>

           <div class="mask half">
            <div class="fill">

            </div>
          </div>

          <div class="inside-circle">
           80%
          </div>

          </div>

        </div>

        <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-headerindication">{skillscompilation.compilationheader}</p>

        </Col>
        <Col className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer"
             onMouseLeave={()=> {
                 const  _skillscompilationtooltipcontainer= document.querySelectorAll(".homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer");
                _skillscompilationtooltipcontainer[skillscompilationidx].style.display = "none";
              }}> 
            <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-madclosebuttonheaderindication">x</p>
          <Col id="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-reactjslogocontainer">
            <Col id="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-reactjslogocontainer-imagecontainer">
             <img src="../images/logo/reactjs/reactjslogo.png"
                 id="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-reactjslogocontainer-logo"
                 alt="KY-IMAGE-REACTJSLOGO"/>
            </Col>
            <Col id="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-reactjslogocontainer-imagecontainer-tooltipcontainer">
              <Col id="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-reactjslogocontainer-imagecontainer-tooltipcontainer-imagecontainer">
              <img src="../images/logo/reactjs/reactnativelogo.png"
                 id="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-reactjslogocontainer-reactnativelogo"
                 alt="KY-IMAGE-REACTJSLOGO"/>
              </Col>
              <Col id="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-reactjslogocontainer-imagecontainer-tooltipcontainer-descriptioncontainer">
              <p  className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-reactjslogoskillsdescriptioncontainer-headerindication">A based mobile application framework using ReactJS</p>
               <p  className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-reactjslogoskillsdescriptioncontainer-headerindication">React utilizes HTML, CSS, and JavaScript to create interactive user interfaces, whereas React Native utilizes APIs and native UI components to build mobile applications. What is React Native used for? React Native (also known as RN) is a popular JavaScript-based mobile app framework that allows you to build natively-rendered mobile apps for iOS and Android. The framework lets you create an application for various platforms by using the same codebase.</p>
              </Col>
            </Col>
           </Col>
          <Col id="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-reactjslogoskillsdescriptioncontainer">
            <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-reactjslogoskillsdescriptioncontainer-headerindication">A JS library used in React Native that HTML tags are converted into view and text</p>
            <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-reactjslogoskillsdescriptioncontainer-headerindication">React is a library for building composable user interfaces. It encourages the creation of reusable UI components that present data that changes over time. React is a powerful JavaScript UI library for creating modern applications.</p>
          </Col>
        </Col>
        </Col>
        )
      }

      if ( skillscompilationidx === 2 ) {
        return (
         <Col key={skillscompilationidx}
            className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer">
        <Col className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer">

        <div class="circle-wrap"
             onMouseEnter={()=> {
               const _skillscompilationtooltipcontainer = document.querySelectorAll(".homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer");
               _skillscompilationtooltipcontainer [skillscompilationidx].style.display = "block";
             }}
             onMouseLeave={()=> {
                // const  _skillscompilationtooltipcontainer= document.querySelectorAll(".homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer");
               //  _skillscompilationtooltipcontainer[skillscompilationidx].style.display = "none";
               }}>

           <div class="circle">

            <div class="mask full">
             <div class="fill">

             </div>
             </div>

           <div class="mask half">
            <div class="fill">

            </div>
          </div>

          <div class="inside-circle">
           80%
          </div>

          </div>

        </div>

        <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-headerindication">{skillscompilation.compilationheader}</p>

        </Col>
        <Col className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer"
             onMouseLeave={()=> {
                 const  _skillscompilationtooltipcontainer= document.querySelectorAll(".homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer");
                _skillscompilationtooltipcontainer[skillscompilationidx].style.display = "none";
              }}> 
            <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-madclosebuttonheaderindication">x</p>
          <Col id="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-reactjslogocontainer">
            <Col id="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-reactjslogocontainer-imagecontainer">
             <img src="../images/logo/reactjs/reactjslogo.png"
                 id="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-reactjslogocontainer-logo"
                 alt="KY-IMAGE-REACTJSLOGO"/>
            </Col>
            <Col id="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-reactjslogocontainer-imagecontainer-tooltipcontainer">
              <Col id="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-reactjslogocontainer-imagecontainer-tooltipcontainer-imagecontainer">
              <img src="../images/logo/reactjs/reactnativelogo.png"
                 id="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-reactjslogocontainer-reactnativelogo"
                 alt="KY-IMAGE-REACTJSLOGO"/>
              </Col>
              <Col id="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-reactjslogocontainer-imagecontainer-tooltipcontainer-descriptioncontainer">
              <p  className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-reactjslogoskillsdescriptioncontainer-headerindication">A based mobile application framework using ReactJS</p>
               <p  className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-reactjslogoskillsdescriptioncontainer-headerindication">React utilizes HTML, CSS, and JavaScript to create interactive user interfaces, whereas React Native utilizes APIs and native UI components to build mobile applications. What is React Native used for? React Native (also known as RN) is a popular JavaScript-based mobile app framework that allows you to build natively-rendered mobile apps for iOS and Android. The framework lets you create an application for various platforms by using the same codebase.</p>
              </Col>
            </Col>
           </Col>
          <Col id="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-reactjslogoskillsdescriptioncontainer">
            <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-reactjslogoskillsdescriptioncontainer-headerindication">A JS library used in React Native that HTML tags are converted into view and text</p>
            <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-reactjslogoskillsdescriptioncontainer-headerindication">React is a library for building composable user interfaces. It encourages the creation of reusable UI components that present data that changes over time. React is a powerful JavaScript UI library for creating modern applications.</p>
          </Col>
        </Col>
        </Col>
        )
      }

      if ( skillscompilationidx === 3 ) {
        return (
         <Col key={skillscompilationidx}
            className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer">
        <Col className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer">

        <div class="circle-wrap"
             onMouseEnter={()=> {
               const _skillscompilationtooltipcontainer = document.querySelectorAll(".homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer");
               _skillscompilationtooltipcontainer [skillscompilationidx].style.display = "block";
             }}
             onMouseLeave={()=> {
                // const  _skillscompilationtooltipcontainer= document.querySelectorAll(".homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer");
               //  _skillscompilationtooltipcontainer[skillscompilationidx].style.display = "none";
               }}>

           <div class="circle">

            <div class="mask full">
             <div class="fill">

             </div>
             </div>

           <div class="mask half">
            <div class="fill">

            </div>
          </div>

          <div class="inside-circle">
           80%
          </div>

          </div>

        </div>

        <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-headerindication">{skillscompilation.compilationheader}</p>

        </Col>
        <Col className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer"
             onMouseLeave={()=> {
                 const  _skillscompilationtooltipcontainer= document.querySelectorAll(".homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer");
                _skillscompilationtooltipcontainer[skillscompilationidx].style.display = "none";
              }}> 
            <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-gridcontainer-colcontainer-madclosebuttonheaderindication">x</p>
          <Col id="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-reactjslogocontainer">
            <Col id="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-reactjslogocontainer-imagecontainer">
             <img src="../images/logo/reactjs/reactjslogo.png"
                 id="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-reactjslogocontainer-logo"
                 alt="KY-IMAGE-REACTJSLOGO"/>
            </Col>
            <Col id="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-reactjslogocontainer-imagecontainer-tooltipcontainer">
              <Col id="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-reactjslogocontainer-imagecontainer-tooltipcontainer-imagecontainer">
              <img src="../images/logo/reactjs/reactnativelogo.png"
                 id="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-reactjslogocontainer-reactnativelogo"
                 alt="KY-IMAGE-REACTJSLOGO"/>
              </Col>
              <Col id="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-reactjslogocontainer-imagecontainer-tooltipcontainer-descriptioncontainer">
              <p  className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-reactjslogoskillsdescriptioncontainer-headerindication">A based mobile application framework using ReactJS</p>
               <p  className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-reactjslogoskillsdescriptioncontainer-headerindication">React utilizes HTML, CSS, and JavaScript to create interactive user interfaces, whereas React Native utilizes APIs and native UI components to build mobile applications. What is React Native used for? React Native (also known as RN) is a popular JavaScript-based mobile app framework that allows you to build natively-rendered mobile apps for iOS and Android. The framework lets you create an application for various platforms by using the same codebase.</p>
              </Col>
            </Col>
           </Col>
          <Col id="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-reactjslogoskillsdescriptioncontainer">
            <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-reactjslogoskillsdescriptioncontainer-headerindication">A JS library used in React Native that HTML tags are converted into view and text</p>
            <p className="homesnippetcomponent-colcontainer-gridcontainer-colcontainer-skillscompilationcontainer-layoutcontainer-tooltipcontainer-reactjslogoskillsdescriptioncontainer-headerindication">React is a library for building composable user interfaces. It encourages the creation of reusable UI components that present data that changes over time. React is a powerful JavaScript UI library for creating modern applications.</p>
          </Col>
        </Col>
        </Col>
        )
      }

  })
 }
  </Col>
  )
}

function SocialmediaAndPlatformsRapportFacebookDataView(props) {
 return (
  <Col className="socilamediaandplatformsrapportdataview-facebook">
    <p className="socilamediaandplatformsdataview-headerindication">CURRENT FRIENDS ON FACEBOOK</p>
    <p className="socilamediaandplatformsdataview-headerindication">10</p>
    <p className="socilamediaandplatformsdataview-headerindication">CURRENT FOLLOWER'S</p>
    <p className="socilamediaandplatformsdataview-headerindication">10</p>
    <p className="socilamediaandplatformsdataview-headerindication">Facebook monitization</p>
    <p className="socilamediaandplatformsdataview-headerindication">Ineligibility</p>
    <p className="socilamediaandplatformsdataview-headerindication">FRIENDS USUAL LOCATION</p>
    <ul>
    <li className="socilamediaandplatformsdataview-headerindication">Cagayan de Oro city, Philippines

    </li>
    <li className="socilamediaandplatformsdataview-headerindication">Davao city, Philippines</li>
    </ul>

    <br />

    <a href="https://www.facebook.com/profile.php?id=61550771453862"
      className="socilamediaandplatformsdataview-facebookcommunitylinkheaderindication">Follow my facebook community</a>

    <br />
      <a href="https://www.facebook.com/profile.php?id=61550771453862"
      className="socilamediaandplatformsdataview-facebookmarketplacelinkheaderindication">Follow my Facebook market place</a>

    <br />

    <a href="https://www.facebook.com/profile.php?id=61550771453862"
      className="socilamediaandplatformsdataview-facebooklinkheaderindication">FOLLOW ME ON FACEBOOK</a>

      <br />

  </Col>
 )

}

function DataviewFacebookComponent() {
 return (
  <Col id="facebooksnippetcomponent">
  </Col>
 )
}

function DataviewFaqsComponent() {
  return (
  <Row id="faqssnippetcomponent"> 
    <Col
         md={3}
         lg={3}
         className="faqssnippetcomponent-colcontainer-content">
      <h1>Random text</h1>
    </Col>

  </Row>
  )
 }

 function DataviewVideoComponent() {
  return (
   <Row>
     <h1>Data view video component</h1>
   </Row>
  )
 }

 function DataViewKYComponent() {
  return (
   <Row>
     <h1>Data view KY component</h1>
   </Row>
  ) 
 }

 function DataviewMarketingComponent() {
  return (
   <Row>
     <h1>Data view marketing component</h1>
   </Row>
  )
 }

 function DataviewProjectComponent() {
  return (
   <Row>
     <h1>Data view projects component</h1>
   </Row>
  )
 }

 function DataviewIComponent() {
  return (
   <Row>
    <h1>Data view I component</h1>
   </Row>
  )

}