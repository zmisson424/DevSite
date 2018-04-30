import React, { Component } from "react";
import styled from "styled-components";
import { colors } from "../../config";
import { Link } from "react-router-dom";

import OSU from "../../media/ohiostate.png";
import Soon from "../../media/comingsoon.png";
import LE from "../../media/learningexpress.png";
import Bliss from "../../media/bliss.jpg";

import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  Row,
  Col,
  Button
} from "reactstrap";

const StyledCard = styled(Card)`
  margin-top: 20px;
  padding: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.27);
  }
`;

const StyledTitle = styled(CardTitle)`
  color: #000066;
  font-size: 32px;
  margin-top: 15px;
  margin-left: 20px;
  margin-bottom: 25px !important;
`;

const StyledButton = styled(Button)`
  background-color: #000066 !important;
  margin-left: 25%;
  margin-bottom: 20px;
  width: 50%;
  height: 50px;
  position: absolute;
  bottom: 0;

  &:hover {
    background-color: #0d47a1 !important;
  }
`;

const StyledImage = styled(CardImg)`
  max-height: 300px;
  max-width: 100%;
`;

const StyledText = styled(CardText)`
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px !important;
`;

const StyledLink = styled(Link)`
  background-color: #000066 !important;
  margin-left: 25%;
  margin-bottom: 20px;
  width: 50%;
  height: 50px;
  position: absolute;
  bottom: 0;

  &:hover {
    background-color: #0d47a1 !important;
  }
`;

const H2 = styled.h2`
  margin-top: 20px;
  margin-bottom: 25px;
  color: #aeea00;
  border-bottom: 1px solid;
`;

class Projects extends Component {
  render() {
    return (
      <div>
        <H2>Projects</H2>

        <StyledCard>
          <Row>
            <Col md={4}>
              <StyledImage src={OSU} />
            </Col>
            <Col>
              <StyledTitle>Ohio State Geog 5201 Portfolio</StyledTitle>
              <StyledText>
                An overview of all the projects created in Geog 5201. It shows
                projects utilizing ArcGIS, ArcGIS Pro, QGIS, ArcScene, and
                ArcWeb.
              </StyledText>
              <Link to="/projects/osu-portfolio">
                <StyledButton>See More</StyledButton>
              </Link>
            </Col>
          </Row>
        </StyledCard>

        <StyledCard>
          <Row>
            <Col>
              <StyledTitle>RentmindMe</StyledTitle>
              <StyledText>
                An overview of all the projects created in Geog 5201. It shows
                projects utilizing ArcGIS, ArcGIS Pro, QGIS, ArcScene, and
                ArcWeb.
              </StyledText>
              <StyledButton>See More</StyledButton>
            </Col>
            <Col md={4}>
              <StyledImage src={Soon} />
            </Col>
          </Row>
        </StyledCard>

        <StyledCard>
          <Row>
            <Col md={4}>
              <StyledImage src={LE} />
            </Col>
            <Col>
              <StyledTitle>Learning Express</StyledTitle>
              <StyledText>
                An overview of all the projects created in Geog 5201. It shows
                projects utilizing ArcGIS, ArcGIS Pro, QGIS, ArcScene, and
                ArcWeb.
              </StyledText>
              <StyledButton>See More</StyledButton>
            </Col>
          </Row>
        </StyledCard>

        <StyledCard>
          <Row>
            <Col>
              <StyledTitle>Bliss Life + Style</StyledTitle>
              <StyledText>
                An overview of all the projects created in Geog 5201. It shows
                projects utilizing ArcGIS, ArcGIS Pro, QGIS, ArcScene, and
                ArcWeb.
              </StyledText>
              <StyledButton>See More</StyledButton>
            </Col>
            <Col md={4}>
              <StyledImage src={Bliss} />
            </Col>
          </Row>
        </StyledCard>
      </div>
    );
  }
}

export default Projects;
