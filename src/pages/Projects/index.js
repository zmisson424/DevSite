import React, { Component } from "react";
import styled from "styled-components";
import { colors } from "../../config";

import { Card, CardTitle, CardText } from "reactstrap";

const StyledCard = styled(Card)`
  margin-top: 20px;
  padding: 10px;
`;

class Projects extends Component {
  render() {
    return (
      <div>
        <StyledCard>
          <CardTitle>Ohio State Geog 5201 Portfolio</CardTitle>
          <CardText>
            An overview of all the projects created in Geog 5201. It shows
            projects utilizing ArcGIS, ArcGIS Pro, QGIS, ArcScene, and ArcWeb.
          </CardText>
        </StyledCard>

        <StyledCard>
          <CardTitle>RentmindMe</CardTitle>
          <CardText>
            A new WebApp launching soon. More information to follow. This
            application utilizes a wide range of developing tools. It is a
            React/Redux based web app. It operates using Firebase for database,
            storage, web hoting, authorization. It also uses Checkbook.io and
            MailChimp
          </CardText>
        </StyledCard>

        <StyledCard>
          <CardTitle>Learning Express Data Utility</CardTitle>
          <CardText>
            A program based in Java that runs data managment reports.
          </CardText>
        </StyledCard>

        <StyledCard>
          <CardTitle>Bliss Life + Style</CardTitle>
          <CardText>A website built for a local gift accessory store.</CardText>
        </StyledCard>
      </div>
    );
  }
}

export default Projects;
