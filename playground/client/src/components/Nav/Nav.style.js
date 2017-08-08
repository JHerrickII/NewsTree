import styled from 'styled-components';
import { darkblue, darkgreen, black } from '../../theme/variables';

export const NavigationContainer = styled.div`
  position: fixed;
  right: 10em;
  top: 4em;
`;

export const NavItem = styled.div`
  display:inline;
  margin-right: 30px;
  font-size: 1.5em;
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
      z-index: -1;
      transform: scale(1.15, 1.4);
    }
  }
`;
