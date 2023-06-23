import Sidebar from "../Sidebar/Sidebar";
import {
  HomeComContainer,
  ContainerForPageContent,
} from "./HomeStyled";

const Home = function () {
  return (
    <HomeComContainer>
      <Sidebar />
      <ContainerForPageContent>
        <h1>Home Page Content</h1>
      </ContainerForPageContent>
    </HomeComContainer>
  );
};

export default Home;
