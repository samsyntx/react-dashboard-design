import React from 'react'


const SidebarContext = React.createContext({
    isDarkSider: true,
    changeSiderTheme: () => {},
    isShowPcSider: true,
    togglePcSider: () => {},
    isShowMobileSider: false,
    toggleMobileSider: () => {},
    isShowUserPopup : false,
    usePopUpToggle: () => {},
})

export default SidebarContext