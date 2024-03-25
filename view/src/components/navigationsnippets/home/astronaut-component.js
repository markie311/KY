import React from "react";

import { Row, Col } from "react-bootstrap";

import "../../../styles/navigationsnippets/home/astronaut.scss";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

export default function AstronautComponent() {
 return (
   <Row id="homenavigationsnippetcomponent-socialmedaiandplatformaccountsgridcontainer">
    <Col xs={12}
         md={12}
         lg={12}
         cassName="homenavigationsnippetcomponent-socialmedaiandplatformaccountsgridcontainer-colcontainer"
         id="homenavigationsnippetcomponent-socialmedaiandplatformaccountsgridcontainer-colcontainer-astronautdatacontainer">
      <Col id="homenavigationsnippetcomponent-socialmedaiandplatformaccountsgridcontainer-colcontainer-astronautdatacontainer-astronautimagecontainer">
       <img src="../images/icons/socialmediaandplatforms/astronaut.png"
            id="homenavigationsnippetcomponent-socialmedaiandplatformaccountsgridcontainer-astronautimage"
            alt="KY-IMAGE-ASTRONAUT"
            onMouseEnter={()=> {
              const _astronautimagetooltip = document.getElementById("homenavigationsnippetcomponent-socialmedaiandplatformaccountsgridcontainer-colcontainer-astronautdatacontainer-astronautimagetooltipcontainer");
              _astronautimagetooltip.style.display = "block";
            }}
            onMouseLeave={()=> {
                const _astronautimagetooltip = document.getElementById("homenavigationsnippetcomponent-socialmedaiandplatformaccountsgridcontainer-colcontainer-astronautdatacontainer-astronautimagetooltipcontainer");
                _astronautimagetooltip.style.display = "none";
              }}/>
      </Col>
      <Col id="homenavigationsnippetcomponent-socialmedaiandplatformaccountsgridcontainer-colcontainer-astronautdatacontainer-astronautimagetooltipcontainer">
         <p className="homenavigationsnippetcomponent-socialmedaiandplatformaccountsgridcontainer-colcontainer-astronautdatacontainer-astronautimagetooltipcontainer-closebuttonheaderindication">x</p>
         <h1 className="homenavigationsnippetcomponent-socialmedaiandplatformaccountsgridcontainer-colcontainer-astronautdatacontainer-astronautimagetooltipcontainer-headerindication">Astronaut as best example image</h1>     
         <br />
         <h4 className="homenavigationsnippetcomponent-socialmedaiandplatformaccountsgridcontainer-colcontainer-astronautdatacontainer-astronautimagetooltipcontainer-headerindication">Longing finding ways to earn, there a lot to consider in what to do, welding, planting, developing and investments</h4>
         <br />
         <h4 className="homenavigationsnippetcomponent-socialmedaiandplatformaccountsgridcontainer-colcontainer-astronautdatacontainer-astronautimagetooltipcontainer-headerindication">Are they not the same topic of building? if they are did together on a sequence?</h4>
         <br />
         <h4 className="homenavigationsnippetcomponent-socialmedaiandplatformaccountsgridcontainer-colcontainer-astronautdatacontainer-astronautimagetooltipcontainer-headerindication">You will now find to sustain everyone's finance helping them to survive, giving money to each member of the family making them happy</h4>
         <br />
         <h4 className="homenavigationsnippetcomponent-socialmedaiandplatformaccountsgridcontainer-colcontainer-astronautdatacontainer-astronautimagetooltipcontainer-headerindication">We all an astronaut on acting, yet must be done is realization not to bring Gas on Space instead, gather soil and trees to be with the Sun</h4>
      </Col>
    </Col>
    <Col xs={12}
         md={12}
         lg={12}
         className="homenavigationsnippetcomponent-socialmedaiandplatformaccountsgridcontainer-colcontainer">
     <Swiper slidesPerView={1}
             id="homenavigationsnippetcomponent-socialmedaiandplatformaccountsgridcontainer-colcontainer-swiper">
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
                         id="homenavigationsnippetcomponent-socialmedaiandplatformaccountsgridcontainer-colcontainer-swiperslide-topicthumbnail">
              <h3 className="homenavigationsnippetcomponent-socialmedaiandplatformaccountsgridcontainer-colcontainer-swiperslide-topicthumbnail-headerindication">Changeable window</h3> 
              <p className="homenavigationsnippetcomponent-socialmedaiandplatformaccountsgridcontainer-colcontainer-swiperslide-topicthumbnail-headerindication">swipe</p>
           </SwiperSlide>
           )
         } else {
          return (
            <SwiperSlide key={contentimageidx}
                         className="homenavigationsnippetcomponent-socialmedaiandplatformaccountsgridcontainer-colcontainer-swiperslide">
                <img src={contentimage}
                     className="homenavigationsnippetcomponent-socialmedaiandplatformaccountsgridcontainer-colcontainer-swiperslide-image"
                     alt="KY-IMAGE-CONTENT"/>
            </SwiperSlide>
           )  
         }
      
       })
      }
    </Swiper>
    </Col>
   </Row>
 )
}