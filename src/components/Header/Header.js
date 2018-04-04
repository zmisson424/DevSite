import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Container, Navbar, NavbarToggler, NavbarBrand, Row, Col } from "reactstrap";

export default class Header extends Component {
  render() {
    return (
      <Row>
        <Col>Header Column 1</Col>
        <Col>Header Column 2</Col>
      </Row>
    );
  }
}
