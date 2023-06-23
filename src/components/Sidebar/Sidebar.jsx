import SidebarContext from "../../context/SidebarContext";

import { PcSidebarConatiner, MobileSidebarContainer, CompleteSidebarContainer } from "./SidebarStyled";

const Sidebar = function () {
  return (
    <SidebarContext.Consumer>
      {(value) => {
        const { isDarkSider, isShowMobileSider, isShowPcSider} = value;

        return (
          <CompleteSidebarContainer>
            {isShowPcSider && <PcSidebarConatiner theme={isDarkSider} desktop={isShowPcSider.toString()}>
              <p>PC Sidebar Container</p>
            </PcSidebarConatiner>}
            <MobileSidebarContainer theme={isDarkSider} mobile={isShowMobileSider.toString()}>
              <p>Mobile Side bar</p>
            </MobileSidebarContainer>
          </CompleteSidebarContainer>
        );
      }}
    </SidebarContext.Consumer>
  );
};

export default Sidebar;
