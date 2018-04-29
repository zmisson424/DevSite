import React, { Component } from "react";
import styled from "styled-components";
import { colors } from "../../config";

import { Row, Col, Card, CardTitle, CardText } from "reactstrap";

const StyledCard = styled(Card)`
  margin-top: 20px;
  padding: 10px;
`;

class Home extends Component {
  render() {
    return (
      <div>
        <StyledCard>
          <CardTitle>Embark on your new idea</CardTitle>
          <CardText>
            Quick, fast development to get your project off the ground.
          </CardText>
        </StyledCard>

        <StyledCard>
          <CardTitle>Development</CardTitle>
          <CardText>
            Wide range of skills to optimize and deploy your application.
          </CardText>
        </StyledCard>

        <StyledCard>
          <CardTitle>Rapid Development</CardTitle>
          <CardText>
            Fast project deployment using a variety of languages.
          </CardText>
        </StyledCard>
      </div>
    );
  }
}

export default Home;
