import { MdOutlineArrowForwardIos} from "react-icons/md";

import {
  SideIconTextArrowContainer,
  SideIconTextContainer,
  SideMenuTextPara,SideLowerIconContainer,
} from "./SidebarStyled";
import SidebarContext from "../../context/SidebarContext";

const MenuItem = function (detail) {
  const {functionToChangeDrop} = detail
  const {displayText, id,icon, isDrop, path, isShowDropDown} = detail.detail;

  const clickedToChangeStatusDrop = () => {
    functionToChangeDrop(id)
    
  }
  
  return (
    <SidebarContext.Consumer>
      {(value) => {
        const { isDarkSider } = value;
        
        return (
          <SideIconTextArrowContainer
            theme={isDarkSider.toString()}
            to={path}
            onClick={isDrop === true ? clickedToChangeStatusDrop : null}
          >
            <SideIconTextContainer>
              {icon.isAvailable === true ? icon.show : ''}
              <SideMenuTextPara>{displayText}</SideMenuTextPara>
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
