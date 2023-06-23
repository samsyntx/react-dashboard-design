import SidebarContext from "../../context/SidebarContext";
import Sidebar from "../Sidebar/Sidebar";
import {
  HomeComContainer,
  ContainerForPageContent,
} from "./HomeStyled";

const Home = function () {
  return (
    <SidebarContext.Consumer>
      {value => {
        const {isShowPcSider} = value

        return (
          <HomeComContainer>
            <Sidebar />
            <ContainerForPageContent desktop={isShowPcSider}>
              <h1>Home Page Content</h1>
            </ContainerForPageContent>
          </HomeComContainer>
        )
      }}
    </SidebarContext.Consumer>
  );
};

export default Home;
