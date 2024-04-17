import React, {
                useState,
                useEffect
              } from "react";

import { Routes, 
         Route
 } from 'react-router-dom';

import { Container } from "react-bootstrap";

import "./styles/kycore.scss";

import KYcoreLandingPage from "./components/kycorelandingpage-component.js";

function KYcore() {

  const [viewport, viewportcb] = useState('xs');

  const $xsviewport= window.matchMedia('(max-width: 600px)');
  const $mdviewport = window.matchMedia('(min-width: 992px)');  
  const $lgviewport = window.matchMedia('(min-width: 1200px)');

  const [dataloaderscreenisloading, dataloaderscreenisloadingcb]= useState(false);

  const [socialmediaandplatformsdataview, socialmediaandplatformsdataviewcb] = useState("home");
 
  const [homedataview, homedataviewcb] = useState("Home");

  const [threedimensionalplanetsview, threedimensionalplanetsviewcb] = useState("Astronaut");
  
  const $viewportscreenbreakpoints = {
    xsviewportscreenbreakpoint: async () => {
      $xsviewport.addListener($viewportscreenbreakpoints.xsviewportscreenbreakpoint);
      if ($xsviewport.matches) {
        viewportcb((viewport)=> viewport = 'xs')
      }
    },
    mdviewportscreenbreakpoint: async () => {
      $mdviewport.addListener($viewportscreenbreakpoints.mdviewportscreenbreakpoint);
      if ($mdviewport.mathces) {
        viewportcb((viewport)=> viewport = 'md')
      }
    },
    lgviewportscreenbreakpoint: async () => {
      $lgviewport.addListener($viewportscreenbreakpoints.lgviewportscreenbreakpoint);
      if ($lgviewport.matches) {
        viewportcb((viewport)=> viewport = 'lg')
      }
    }
  } 

  useEffect(()=> {
    $viewportscreenbreakpoints.xsviewportscreenbreakpoint();
    $viewportscreenbreakpoints.mdviewportscreenbreakpoint();
    $viewportscreenbreakpoints.lgviewportscreenbreakpoint();
    //getUIUserAuthenticationData()
    //getDatabaseData()
  }, [$xsviewport, $mdviewport, $lgviewport, viewport]);

  return (
     <Container id="kycore"
                fluid>
       <Routes>
         <Route path='/'
                element={<KYcoreLandingPage viewport={viewport}
                                            dataloaderscreenisloading={dataloaderscreenisloading}
                                            dataloaderscreenisloadingcb={dataloaderscreenisloadingcb}
                                            homedataview={homedataview}
                                            homedataviewcb={homedataviewcb} 
                                            
                                            socialmediaandplatformsdataview={socialmediaandplatformsdataview}
                                            socialmediaandplatformsdataviewcb={socialmediaandplatformsdataviewcb}
                                            
                                            threedimensionalplanetsview={threedimensionalplanetsview}
                                            threedimensionalplanetsviewcb={threedimensionalplanetsviewcb}/>}>
         </Route>
    </Routes>
     </Container>
  );
}

export default KYcore;
