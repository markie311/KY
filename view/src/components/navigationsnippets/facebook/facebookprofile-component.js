import React from "react";

import { Row, Col } from "react-bootstrap";

import "../../../styles/navigationsnippets/facebook/facebookprofile.scss";

export default function FacebookprofileComponent() {
 return ( 
  <Row id="facebookprofilecomponent">

    <Col xs={12}
         md={6}
         lg={6}
         className="facebookprofilecomponent-contentcontainer-facebookprofilepicturecontainer-colcontainer">
      <Col id="facebookprofilecomponent-contentcontainer-facebookprofilepicturelayoutcontainer">
       <Col id="facebookprofilecomponent-contentcontainer-facebookprofilepicturelayoutcontainer-imagecontainer">
        <img src="../images/facebook/facebookprofilepicture.jpg"
             id="facebookprofilecomponent-contentcontainer-facebookprofilepicture"
            alt="KY-IMAGE-FACEBOOKPROFILEPICTURE"/>
       </Col>
       <Col id="facebookprofilecomponent-contentcontainer-facebookprofilepicturelayoutcontainer-imagemodalcontainer">
       </Col>
      </Col>
    </Col>

    <Col xs={12}
         md={6}
         lg={6}
         className="facebookprofilecomponent-contentcontainer-facebookdetailscontainer">
       <p className="facebookprofilecomponent-contentcontainer-headerindication">Joined Facebook: March 1, 2024</p>
       <p className="facebookprofilecomponent-contentcontainer-headerindication">Purpose: Contents</p>
       <p className="facebookprofilecomponent-contentcontainer-headerindication">Facebook name: Mark Beloy</p>
    </Col>

    <Col xs={12}
         md={12}
         lg={12}
         className="facebookprofilecomponent-contentcontainer">
      <p className="facebookprofilecomponent-contentcontainer-headerindication">First Facebook created was solely intentioned wayback 2015 and how it was said was only posting to gain attention being a silent person wanting to blend in the Environment as teen.</p>
      <p className="facebookprofilecomponent-contentcontainer-headerindication">Time pass by, it's 2021 now and the second Facebook with the same name Mark Beloy was created for a purpose wanting to show more eagerness to develop as person. It give's releif posting each day after studying online because it was Covid pandemic on that time. Each post's contents are always excercise, learning new things like cooking, singing, dancing and about programming studies.</p>
      <p className="facebookprofilecomponent-contentcontainer-headerindication">The third Facebook with the same name Mark Beloy is what data shown here, it's purpose was to add new friend's while reaching Family member's for upcoming contents.</p>
    </Col>

  </Row>
 )
}