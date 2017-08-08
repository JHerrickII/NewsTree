import styled from 'styled-components';
import {darkblue, darkgreen} from 'theme/variables';

export const A = styled.a`
  color: ${darkblue};
  text-decoration: none;
  position: relative;
  &:after {
    content: ' ';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 10%;
    width: 100%;
    background-color: ${darkblue};
    z-index: -1;
    transition: height .5s, background-color .3s;
  }
  &:hover:after {
    height: 100%;
    background-color: ${darkgreen};
  }
`;
