import styled from "styled-components";
import {Link} from 'react-router-dom'

export const HeaderComContainer = styled.nav`
  background-color: #212429;
  padding: 10px 20px 10px 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  color: white;
  min-height: 50px;
  flex-wrap: wrap;
`;

export const LogoHeadingHeader = styled(Link)`
  font-size: 1.25rem;
  font-weight: 300;
  min-width: 230px;
  color: white;
  text-decoration: none;
`;

export const DeskTopToggleMenu = styled.button`
  color: #cdcdcd;
  background: none;
  border: none;
  @media all and (max-width: 992px){
    display: none;
  }
`;

export const HeaderRightContainerCom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const HeaderSearchBoxContainer = styled.div`
  display: flex;
  margin-right: 15px;
  background: white;
  border-radius: 5px;
  overflow: hidden;
  width: 280px;
  @media all and (max-width:768px){
    display: none;
  }
`;

export const HeaderSearchBox = styled.input`
  border: none;
  background-color: none;
  outline: none;
  padding: 8px;
  font-size: 15px;
  flex-grow: 1;
`;

export const HeaderSearchIconContainer = styled.button`
  background-color: #106cf5;
  border: none;
  padding: 10px;
  color: white;
`;

export const HeaderUserPopIconContainer = styled.button`
  background: none;
  color: #cdcdcd;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30px;
  margin: 10px 20px 10px 20px;
`;

export const HeaderUserTogglePopUp = styled.div`
  position: absolute;
  top: 65px;
  right: 40px;
  color: #434343;
  background-color: white;
  height: 150px;
  width: 200px;
  border-radius: 10px;
  box-shadow: 1px 1px 5px #00000027;
  border: 1px solid #00000031;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

// Login Popup

export const PopUpInsideContent = styled.button`
  color: #434343;
  padding: 10px 20px 10px 20px;
  cursor: pointer;
  background: none;
  border: none;
  text-align: left;
  font-size: 16px;
  &:hover{
    background: #bfbfbf2f;
  }
  &:focus{
    background-color: #106cf5;
    color: white;
  }
`;

export const PopupHrLine = styled.hr`
`;

// Responsive CSS -----

export const MobileTopToggleMenu = styled.button`
  color: #cdcdcd;
  background: none;
  border: none;
  @media all and (min-width: 992px){
    display: none;
  }
`;

