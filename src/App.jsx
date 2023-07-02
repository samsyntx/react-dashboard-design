import { BrowserRouter, Switch, Route } from "react-router-dom";
import SidebarContext from "./context/SidebarContext";
import { useState } from "react";

import { ComAppContainer, FlexRouteRenderContainer } from "./AppStyled";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Sidebar from "./components/Sidebar/Sidebar";
import Charts from "./components/Charts/Charts";
import Tables from "./components/Tables/Tables";
import StaticPage from "./components/CommonPage/StaticPage";
import ErrorPage from "./components/Error/ErrorPage";
import Error404 from './components/Error/Error404'

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

  const Error401 = () => {
    return(
      <ErrorPage code="401" title="Unauthorized" detail="Access to this resource is denied."/>
    )
  }


  const Error500 = () => {
    return(
      <ErrorPage code="500" title="Internal Server Error" detail=""/>
    )
  }

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
        <Switch>
          <Route exact path="/401" component={Error401} />
          <Route exact path="/404" component={Error404} />
          <Route exact path="/500" component={Error500} />
          <Route path="/">
            <Header />
            <ComAppContainer>
              <Sidebar />
              <FlexRouteRenderContainer>
                <Route exact path="/" component={Home} />
                <Route exact path="/charts" component={Charts} />
                <Route exact path="/tables" component={Tables} />
                <Route exact path="/static-path" component={StaticPage} />
              </FlexRouteRenderContainer>
            </ComAppContainer>
          </Route>
        </Switch>
      </BrowserRouter>
    </SidebarContext.Provider>
  );
}

export default App;
