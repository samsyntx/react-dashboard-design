import styled from "styled-components";

export const SidebarComContainer = styled.nav`
    position: absolute;
    left: ${props => props.mobileMenu === true ? '0px' : '-350px'};
    width: 250px;
    background-color: ${props => props.theme === false ? '#212429' : '#e5e5e5'};
    color: ${props => props.theme === false ? 'white' : '#212429'};;
    @media all and (min-width: 768px){
        position: relative;
    }
`;
