import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import SidebarContext from "./context/SidebarContext";
import { useState } from "react";

const initialState = {
  isDarkSider: true,
  isShowPcSider: true,
  isShowMobileSider: false,
  isShowUserPopup: false,
};

function App() {
  const [contextState, stateUpdate] = useState(initialState);

  const changeSiderTheme = () => {
    stateUpdate(prevState => ({...prevState,  isLightSider: !prevState.isLightSider}))
  }

  const togglePcSider = () => {
    stateUpdate(prevState => ({...prevState,  isShowPcSider: !prevState.isShowPcSider}))
  }

  const toggleMobileSider = () => {
    stateUpdate(prevState => ({...prevState,  isShowMobileSider: !prevState.isShowMobileSider, }))
  }

  const usePopUpToggle = () => {
    stateUpdate(prevState => ({...prevState,  isShowUserPopup: !prevState.isShowUserPopup}))
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
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </SidebarContext.Provider>
  );
}

export default App;
