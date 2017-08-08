import styled from 'styled-components';
import { darkblue, darkgreen, black } from '../../theme/variables';

export const AppNameContainer = styled.div`
  position: absolute;
  left: 14.2em;
  top: 4em;
  z-index: 0;
`;

export const Logo = styled.div`
  display:inline;
  cursor: pointer;
  position: relative;
`;

export const Title = styled.div`
  display:inline;
  margin-right: 30px;
  font-size: 3.1em;
  cursor: pointer;
  position: relative;
  color: ${black};
  text-decoration: none;
  &:hover {
    color: ${darkgreen};
    transition-duration: 2s;
    &:after {
      content: ' ';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: ${darkblue};
      z-index: -98;
      transform: scale(1.15, 1.4);
    }
  }
`;
