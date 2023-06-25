import { MdOutlineArrowForwardIos} from "react-icons/md";

import {
  SideIconTextArrowContainer,
  SideIconTextContainer,
  SideMenuTextPara,SideLowerIconContainer,
} from "./SidebarStyled";
import SidebarContext from "../../context/SidebarContext";

const MenuItem = function (detail) {
  const {functionToChangeDrop} = detail
  const {displayText, id,icon, isDrop, path, isShowDropDown, clickable} = detail.detail;

  const clickedToChangeStatusDrop = () => {
    functionToChangeDrop(id)
    
  }
  
  return (
    <SidebarContext.Consumer>
      {(value) => {
        const { isDarkSider, changeSiderTheme } = value;

        const changeToLightTheme = () => {
          changeSiderTheme()
        }
        
        return (
          <SideIconTextArrowContainer
            theme={isDarkSider.toString()}
            to={path}
            onClick={(isDrop === true) ? (clickedToChangeStatusDrop) : ((clickable === true) ? (changeToLightTheme) : null)}
          >
            <SideIconTextContainer>
              {icon.isAvailable === true ? icon.show : ''}
              <SideMenuTextPara theme={isDarkSider.toString()}>{displayText}</SideMenuTextPara>
            </SideIconTextContainer>
            {isDrop && (
              <SideLowerIconContainer rotate={isShowDropDown.toString()}>
                <MdOutlineArrowForwardIos size={20} />
              </SideLowerIconContainer>
            )}
          </SideIconTextArrowContainer>
        );
      }}
    </SidebarContext.Consumer>
  );
};

export default MenuItem;
