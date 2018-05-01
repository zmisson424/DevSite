import React, { Component } from "react";
import Mountains from "../../media/mountains.jpg";
import styled from "styled-components";
import { colors } from "../../config";

import { Row, Col } from "reactstrap";
import Github from "../../media/social/github.svg";
import StackOverflow from "../../media/social/stackoverflow.svg";

class Footer extends Component {
  render() {
    return (
      <footer
        style={{
          backgroundColor: colors.primary,
          height: 200
        }}
      >
        <h2
          style={{
            marginLeft: "45%",
            color: "#FFFFFF"
          }}
        >
          Embark Development, LLC
        </h2>
        <Row>
          <Col md={4} />
          <Col md={4}>
            <a href="https://github.com/zmisson424">
              <img
                src={Github}
                style={{
                  width: "10%",
                  marginRight: 35
                }}
              />
            </a>
            <a href="https://stackoverflow.com/users/4560040/zach-misson">
              <img
                src={StackOverflow}
                style={{
                  width: "10%"
                }}
              />
            </a>
          </Col>
          <Col md={4} />
        </Row>
      </footer>
    );
  }
}

export default Footer;
