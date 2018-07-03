import React, { Component } from 'react';
import styled from 'styled-components';
import { colors } from '../../config';

import ImageOne from './components/computer_background.jpg';

const BackDiv = styled.div`
  background: url(${ImageOne});
  background-size: cover;
  width: 100%;
  height: 100%;
  position: relative;
`;

const CenterDiv = styled.div`
  width: 100%;
  text-align: center;
  position: absolute;
  top: 40%;
`;

class Home extends Component {
  render() {
    return (
      <BackDiv>
        <CenterDiv>
          <h2
            style={{
              color: colors.secondary
            }}
          >
            Embark Developing
          </h2>
        </CenterDiv>
      </BackDiv>
    );
  }
}

export default Home;
