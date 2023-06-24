import { IoIosArrowDown } from "react-icons/io";

import {
  SideIconTextArrowContainer,
  SideIconTextContainer,
  SideMenuTextPara,SideLowerIconContainer,
} from "./SidebarStyled";
import SidebarContext from "../../context/SidebarContext";

const MenuItem = function (each) {
  
  return (
    <SidebarContext.Consumer>
      {(value) => {
        const { isDarkSider } = value;

        return (
          <SideIconTextArrowContainer
            theme={isDarkSider}
            to={each.path}
          >
            <SideIconTextContainer>
              {each.icon.isAvailable === true ? each.icon.show : ''}
              <SideMenuTextPara>{each.displayText}</SideMenuTextPara>
            </SideIconTextContainer>
            {each.isDrop && (
              <SideLowerIconContainer>
                <IoIosArrowDown size={20} />
              </SideLowerIconContainer>
            )}
          </SideIconTextArrowContainer>
        );
      }}
    </SidebarContext.Consumer>
  );
};

export default MenuItem;
