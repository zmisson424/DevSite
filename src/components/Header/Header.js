import React, { Component } from "react";
import { colors } from "../../config";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Container, Navbar, Nav, NavbarBrand, NavItem } from "reactstrap";

const StyledLink = styled(Link)`
  color: #ffffff;
  margin-right: 35px;

  &:hover {
    color: #AEEA00;
  }
`;

export default class Header extends Component {
  render() {
    return (
      <Navbar
        dark
        style={{
          backgroundColor: colors.primary
        }}
      >
        <NavbarBrand
          style={{
            color: "#FFFFFF"
          }}
        >
          Embark
        </NavbarBrand>
        <Nav
          style={{
            color: "#FFFFFF"
          }}
        >
          <NavItem>
            <StyledLink to="/home">Home</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/projects">Projects</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="experience">Experience</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="contact">Contact</StyledLink>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}
