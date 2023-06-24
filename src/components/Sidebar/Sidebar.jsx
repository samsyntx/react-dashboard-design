import SidebarContext from "../../context/SidebarContext";
import MenuItem from './MenuItem'

import { AiFillDashboard, AiOutlineBarChart } from "react-icons/ai";
import { BiBookContent } from "react-icons/bi";
import { LuLayout } from "react-icons/lu";
import { BsTable } from "react-icons/bs";

import {
  PcSidebarConatiner,
  MobileSidebarContainer,
  CompleteSidebarContainer,
  ComSideTextContainer,
  MiniSideHeading,
  SideIconTextArrowContainer,
  SideIconTextContainer,
  SideMenuTextPara,
  BottomSiderTextContainer,
  BottomText,
} from "./SidebarStyled";

const dropDownMenu = [
  {
    id: 1,
    displayText: "Layouts",
    icon: { isAvailable: true, show: <LuLayout size={20}/> },
    isDrop: true,
    path: "",
    insideDrop: [
      {
        id: 1.1,
        displayText: "Static Navigation",
        icon: { isAvailable: false, show: "" },
        isDrop: false,
        path: "/static-path",
      },
      {
        id: 1.2,
        displayText: "Light Sidebar",
        icon: { isAvailable: false, show: "" },
        isDrop: false,
        path: "",
      },
    ],
  },
  {
    id: 2,
    displayText: "Pages",
    icon: { isAvailable: true, show: <BiBookContent size={20} /> },
    isDrop: true,
    path: "",
    insideDrop: [
      {
        id: 2.1,
        displayText: "Authentication",
        icon: { isAvailable: false, show: "" },
        isDrop: true,
        path: "",
        insideDrop: [
          {
            id: "LOGIN",
            displayText: "Login",
            icon: { isAvailable: false, show: "" },
            isDrop: false,
            path: "/login",
          },
          {
            id: "REGISTER",
            displayText: "Register",
            icon: { isAvailable: false, show: "" },
            isDrop: false,
            path: "/register",
          },
          {
            id: "FORGET",
            displayText: "Forget Password",
            icon: { isAvailable: false, show: "" },
            isDrop: false,
            path: "/forget-password",
          },
        ],
      },
      {
        id: 2.2,
        displayText: "Error",
        icon: { isAvailable: false, show: "" },
        isDrop: true,
        path: "",
        insideDrop: [
          {
            id: 401,
            displayText: "401 Page",
            icon: { isAvailable: false, show: "" },
            isDrop: false,
            path: "/401",
          },
          {
            id: 404,
            displayText: "404 Page",
            icon: { isAvailable: false, show: "" },
            isDrop: false,
            path: "/404",
          },
          {
            id: 500,
            displayText: "500 Page",
            icon: { isAvailable: false, show: "" },
            isDrop: false,
            path: "/500",
          },
        ],
      },
    ],
  },
];

const Sidebar = function () {
  const commonSideBar = (isDarkSider) => {
    return (
      <ComSideTextContainer>
        <MiniSideHeading>CORE</MiniSideHeading>
        <SideIconTextArrowContainer theme={isDarkSider} to="/">
          <SideIconTextContainer>
            <AiFillDashboard size={20} />
            <SideMenuTextPara>Dashboard</SideMenuTextPara>
          </SideIconTextContainer>
        </SideIconTextArrowContainer>

        {/* Drop Down Menu */}

        <MiniSideHeading>INTERFACE</MiniSideHeading>
        {dropDownMenu.map((each) => (
          <MenuItem key={each.id} each={each} />
        ))}

        {/* Drop Down Menu */}

        <MiniSideHeading>Addons</MiniSideHeading>
        <SideIconTextArrowContainer theme={isDarkSider} to="/charts">
          <SideIconTextContainer>
            <AiOutlineBarChart size={20} />
            <SideMenuTextPara>Charts</SideMenuTextPara>
          </SideIconTextContainer>
        </SideIconTextArrowContainer>
        <SideIconTextArrowContainer theme={isDarkSider} to="/tables">
          <SideIconTextContainer>
            <BsTable size={20} />
            <SideMenuTextPara>Tables</SideMenuTextPara>
          </SideIconTextContainer>
        </SideIconTextArrowContainer>
      </ComSideTextContainer>
    );
  };

  const FooterSider = () => {
    return (
      <BottomSiderTextContainer>
        <BottomText>logged in as:</BottomText>
        <BottomText big={true}>Start Bootstrap</BottomText>
      </BottomSiderTextContainer>
    );
  };

  return (
    <SidebarContext.Consumer>
      {(value) => {
        const { isDarkSider, isShowMobileSider, isShowPcSider } = value;

        return (
          <CompleteSidebarContainer>
            {isShowPcSider && (
              <PcSidebarConatiner
                theme={isDarkSider}
                desktop={isShowPcSider.toString()}
              >
                {commonSideBar(isDarkSider)}
                {FooterSider()}
              </PcSidebarConatiner>
            )}
            <MobileSidebarContainer
              theme={isDarkSider}
              mobile={isShowMobileSider.toString()}
            >
              {commonSideBar(isDarkSider)}
              {FooterSider()}
            </MobileSidebarContainer>
          </CompleteSidebarContainer>
        );
      }}
    </SidebarContext.Consumer>
  );
};

export default Sidebar;
