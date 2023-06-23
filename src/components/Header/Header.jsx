import { IoMdMenu } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import { BiSolidDownArrow } from "react-icons/bi";
import SidebarContext from "../../context/SidebarContext";

import {
  HeaderComContainer,
  LogoHeadingHeader,
  DeskTopToggleMenu,
  HeaderRightContainerCom,
  HeaderSearchBoxContainer,
  HeaderSearchBox,
  HeaderSearchIconContainer,
  HeaderUserPopIconContainer,
  HeaderUserTogglePopUp,
  PopUpInsideContent,
  PopupHrLine,
  MobileTopToggleMenu,
} from "./HeaderStyled";

function Header() {
  return (
    <SidebarContext.Consumer>
      {(value) => {
        const {isShowUserPopup, usePopUpToggle} = value;

        const clickedOnPopItems = () => {
          usePopUpToggle()
        }

        return (
          <HeaderComContainer>
            <LogoHeadingHeader>Start Bootstrap</LogoHeadingHeader>
            <DeskTopToggleMenu type="button">
              <IoMdMenu size={20} />
            </DeskTopToggleMenu>
            <HeaderRightContainerCom>
              <HeaderSearchBoxContainer>
                <HeaderSearchBox type="search" placeholder="Search for..." />
                <HeaderSearchIconContainer>
                  <FiSearch size={20} />
                </HeaderSearchIconContainer>
              </HeaderSearchBoxContainer>
              <HeaderUserPopIconContainer
                type="button"
                onClick={clickToChangePopup}
              >
                <FaUserAlt size={15} />
                <BiSolidDownArrow size={10} />
              </HeaderUserPopIconContainer>
              {isShowUserPopup && (
                <HeaderUserTogglePopUp>
                  <PopUpInsideContent onClick={clickedOnPopItems}>
                    Settings
                  </PopUpInsideContent>
                  <PopUpInsideContent onClick={clickedOnPopItems}>
                    Activity Log
                  </PopUpInsideContent>
                  <PopupHrLine />
                  <PopUpInsideContent onClick={clickedOnPopItems}>
                    Logout
                  </PopUpInsideContent>
                </HeaderUserTogglePopUp>
              )}
              <MobileTopToggleMenu type="button">
                <IoMdMenu size={20} />
              </MobileTopToggleMenu>
            </HeaderRightContainerCom>
          </HeaderComContainer>
        );
      }}
    </SidebarContext.Consumer>
  );
}

export default Header;
