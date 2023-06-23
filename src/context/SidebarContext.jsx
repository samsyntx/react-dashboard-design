import React from 'react'

const SidebarContext = React.createContext({
    isLightSider: true,
    changeSiderTheme: () => {},
    isShowPcSider: true,
    togglePcSider: () => {},
    isShowMobileSider: true,
    toggleMobileSider: () => {},
    isShowUserPopup : false,
    usePopUpToggle: () => {}
})

export default SidebarContext