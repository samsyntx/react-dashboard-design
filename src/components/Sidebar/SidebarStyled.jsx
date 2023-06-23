import styled from "styled-components";
import { keyframes } from 'styled-components';
const slideAnimation = keyframes`
  from {
    transform: translateX(-400px);
  }
  to {
    transform: translateX(0);
  }
`;

export const CompleteSidebarContainer = styled.div` `

export const PcSidebarConatiner = styled.nav`
  min-height: 95vh;
  width: 250px;
  background-color: ${props => props.theme === true ? '#212429' : '#d6d6d6'};
  color: ${props => props.theme === true ? 'white' : '#212429'};
  overflow: auto;

  @media all and (max-width: 768px){
    display: none;
  }
`;

// Responsive Sidebar


export const MobileSidebarContainer = styled.nav`
  position: absolute;
  left: ${props => props.mobile === 'true' ? '0px' : '-400px'};
  min-height: 95vh;
  width: 250px;
  background-color: ${props => props.theme === true ? '#212429' : '#d6d6d6'};
  color: ${props => props.theme === true ? 'white' : '#212429'};
  overflow: auto;
  transition: left 0.5s ease-in-out;
  animation: ${slideAnimation} 0.5s ease-in-out;

  @media all and (min-width: 768px) {
    display: none;
  }
`;
