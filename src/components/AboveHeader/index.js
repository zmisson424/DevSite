import React, { Component } from "react";
import Mountains from "../../media/mountains.jpg";
import styled from "styled-components";

const StyledImage = styled.div`
  width: 100%;
  height: 200px;
  background-size: cover;
  background-image: url("../../media/mountains.jpg");
`;

class AboveHeader extends Component {
  render() {
    return (
      <div>
        <StyledImage />
      </div>
    );
  }
}

export default AboveHeader;
