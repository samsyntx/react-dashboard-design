import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Sidebar from "./components/Sidebar/Sidebar";
import Charts from "./components/Charts/Charts";
import Tables from "./components/Tables/Tables";
import SidebarContext from "./context/SidebarContext";
import { useState } from "react";

import { ComAppContainer, FlexRouteRenderContainer } from "./AppStyled";

const initialState = {
  isDarkSider: true,
  isShowPcSider: true,
  isShowMobileSider: false,
  isShowUserPopup: false,
};

function App() {
  const [contextState, stateUpdate] = useState(initialState);

  const changeSiderTheme = () => {
    stateUpdate((prevState) => ({
      ...prevState,
      isDarkSider: !prevState.isDarkSider,
    }));
  };

  const togglePcSider = () => {
    stateUpdate((prevState) => ({
      ...prevState,
      isShowPcSider: !prevState.isShowPcSider,
    }));
  };

  const toggleMobileSider = () => {
    stateUpdate((prevState) => ({
      ...prevState,
      isShowMobileSider: !prevState.isShowMobileSider,
    }));
  };

  const usePopUpToggle = () => {
    stateUpdate((prevState) => ({
      ...prevState,
      isShowUserPopup: !prevState.isShowUserPopup,
    }));
  };

  return (
    <SidebarContext.Provider
      value={{
        isDarkSider: contextState.isDarkSider,
        changeSiderTheme,
        isShowPcSider: contextState.isShowPcSider,
        togglePcSider,
        isShowMobileSider: contextState.isShowMobileSider,
        toggleMobileSider,
        isShowUserPopup: contextState.isShowUserPopup,
        usePopUpToggle,
      }}
    >
      <BrowserRouter>
        <Header />
        <ComAppContainer>
          <Sidebar />
          <FlexRouteRenderContainer>
            <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/charts" component={Charts} />
            <Route exact path='/tables' component={Tables} />
            </Switch>
          </FlexRouteRenderContainer>
        </ComAppContainer>
      </BrowserRouter>
    </SidebarContext.Provider>
  );
}

export default App;
