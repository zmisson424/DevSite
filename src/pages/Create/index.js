import React, { Component } from "react";
import styled from "styled-components";
import { colors } from "../../config";

import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import HEADER from "./components/header.jpg";

const HeaderImg = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const CenterDiv = styled.div`
  width: 100%;
  text-align: center;
`;

const TextDiv = styled.div`
  padding-left: 150px;
  padding-right: 150px;
  padding-top: 15px;
`;

const H3 = styled.h3`
  color: ${colors.primary};
`;

const styles = theme => ({
  root: {
    display: "flex"
  }
});

class Create extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <CenterDiv>
          <HeaderImg src={HEADER} />
        </CenterDiv>
        <TextDiv>
          <H3>Where to start?</H3>
        </TextDiv>
        <TextDiv>
          <H3>Small Buisness</H3>
        </TextDiv>
        <TextDiv>
          <H3>Startup</H3>
        </TextDiv>
        <TextDiv>
          <H3>Services</H3>
        </TextDiv>
      </div>
    );
  }
}

export default withStyles(styles)(Create);
