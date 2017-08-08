import styled from 'styled-components';
import { black, darkblue } from './theme/variables';

export const FarBackground = styled.div`
  background-color: ${darkblue};
`;

export const Background = styled.div`
  position: fixed;
  left: 10vw;
  width: 80vw;
  top: 5vh;
  height: 100vh;
  background-image: url(${require('./assets/watsonlogo.png')});
  background-color: ${black};
  opacity: 0.2;
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: center;
  z-index: -99;
`;
