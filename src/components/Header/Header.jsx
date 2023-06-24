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
      {value => {
        const {isShowUserPopup, usePopUpToggle, toggleMobileSider, togglePcSider} = value;

        const ClickedOnPopItems = () => {
          usePopUpToggle()
        }

        const ToggleMobileMenu = () => {
          toggleMobileSider()
        }

        const ToggleLargeMenu = () => {
          togglePcSider()
        }

        return (
          <HeaderComContainer>
            <LogoHeadingHeader to="/">Start Bootstrap</LogoHeadingHeader>
            <DeskTopToggleMenu type="button" onClick={ToggleLargeMenu}>
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
                onClick={ClickedOnPopItems}
              >
                <FaUserAlt size={15} />
                <BiSolidDownArrow size={10} />
              </HeaderUserPopIconContainer>
              {isShowUserPopup && (
                <HeaderUserTogglePopUp>
                  <PopUpInsideContent onClick={ClickedOnPopItems}>
                    Settings
                  </PopUpInsideContent>
                  <PopUpInsideContent onClick={ClickedOnPopItems}>
                    Activity Log
                  </PopUpInsideContent>
                  <PopupHrLine />
                  <PopUpInsideContent onClick={ClickedOnPopItems}>
                    Logout
                  </PopUpInsideContent>
                </HeaderUserTogglePopUp>
              )}
              <MobileTopToggleMenu type="button" onClick={ToggleMobileMenu}>
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
