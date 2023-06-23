import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import SidebarContext from "./context/SidebarContext";
import { useState } from "react";

const initialState = {
  isLightSider: true,
  isShowPcSider: true,
  isShowMobileSider: true,
  isShowUserPopup: false,
};

function App() {
  const [contextState, stateUpdate] = useState(initialState);

  const changeSiderTheme = () => {
    stateUpdate(prevState => ({...prevState,  isLightSider: !contextState.isLightSider}))
  }

  return (
    <SidebarContext.Provider
      value={{
        isLightSider: contextState.isLightSider,
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
