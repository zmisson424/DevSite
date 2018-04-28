import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors } from "../../config";

import {
  Container,
  Navbar,
  Nav,
  NavbarBrand,
  NavItem,
  NavLink,
  Row,
  Col
} from "reactstrap";

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
          <NavItem>Home</NavItem>
          <NavItem>
            <NavLink>Projects</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Experience</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Contact</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}
