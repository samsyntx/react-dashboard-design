import SidebarContext from "../../context/SidebarContext";

import { SidebarComContainer } from "./SidebarStyled";

const Sidebar = function () {
  return (
    <SidebarContext.Consumer>
      {(value) => {
        const { isLightSider, isShowMobileSider } = value;
        
        return (
          <SidebarComContainer theme={isLightSider} mobileMenu={isShowMobileSider}>
            <p>Side Bar Content</p>
          </SidebarComContainer>
        );
      }}
    </SidebarContext.Consumer>
  );
};

export default Sidebar;
