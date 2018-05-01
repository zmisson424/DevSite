import React, { Component } from "react";
import Mountains from "../../media/mountains.jpg";
import styled from "styled-components";
import { colors } from "../../config";

import logo from "../../media/embarklogo.png";

class AboveHeader extends Component {
  render() {
    return (
      <div
        style={{
          height: 200,
          backgroundColor: colors.background
        }}
      >
        <img
          src={logo}
          style={{
            marginTop: 10,
            marginLeft: "43%",
            maxHeight: "75%"
          }}
        />
      </div>
    );
  }
}

export default AboveHeader;
