import SidebarContext from "../../context/SidebarContext";
import MenuItem from "./MenuItem";
import React from "react";

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
import { useState } from "react";

const dropDownMenu = [
  {
    id: 1,
    displayText: "Layouts",
    icon: { isAvailable: true, show: <LuLayout size={20} /> },
    isDrop: true,
    path: "#",
    insideDrop: [
      {
        id: "1.1",
        displayText: "Static Navigation",
        icon: { isAvailable: false, show: "" },
        isDrop: false,
        path: "/static-path",
        clickable: false,
      },
      {
        id: "1.2",
        displayText: "Sidebar Theme",
        icon: { isAvailable: false, show: "" },
        isDrop: false,
        path: "",
        clickable: true,
      },
    ],
    isShowDropDown: false,
    clickable: false,
  },
  {
    id: 2,
    displayText: "Pages",
    icon: { isAvailable: true, show: <BiBookContent size={20} /> },
    isDrop: true,
    path: "#",
    insideDrop: [
      {
        id: "2.1",
        displayText: "Authentication",
        icon: { isAvailable: false, show: "" },
        isDrop: true,
        path: "#",
        insideDrop: [
          {
            id: "LOGIN",
            displayText: "Login",
            icon: { isAvailable: false, show: "" },
            isDrop: false,
            path: "/login",
            clickable: false,
          },
          {
            id: "REGISTER",
            displayText: "Register",
            icon: { isAvailable: false, show: "" },
            isDrop: false,
            path: "/register",
            clickable: false,
          },
          {
            id: "FORGET",
            displayText: "Forget Password",
            icon: { isAvailable: false, show: "" },
            isDrop: false,
            path: "/forget-password",
            clickable: false,
          },
        ],
        clickable: false,
        isShowDropDown: false,
      },
      {
        id: "2.2",
        displayText: "Error",
        icon: { isAvailable: false, show: "" },
        isDrop: true,
        path: "#",
        insideDrop: [
          {
            id: 401,
            displayText: "401 Page",
            icon: { isAvailable: false, show: "" },
            isDrop: false,
            path: "/401",
            clickable: false,
          },
          {
            id: 404,
            displayText: "404 Page",
            icon: { isAvailable: false, show: "" },
            isDrop: false,
            path: "/404",
            clickable: false,
          },
          {
            id: 500,
            displayText: "500 Page",
            icon: { isAvailable: false, show: "" },
            isDrop: false,
            path: "/500",
            clickable: false,
          },
        ],
        isShowDropDown: false,
      },
    ],
    isShowDropDown: false,
    clickable: false,
  },
];

const Sidebar = function () {
  const [dropList, updateList] = useState(dropDownMenu);

  const functionToChangeDrop = (uniqueId) => {
    const lengthId = uniqueId.toString().length;

    if (lengthId === 1) {
      const newList = dropList.map((each) => {
        if (each.id === uniqueId) {
          return {
            ...each,
            isShowDropDown: !each.isShowDropDown,
          };
        }
        return each;
      });
      updateList(newList);
    } else {
      const splitted = uniqueId.split(".");
      const topLevelIndex = parseInt(splitted[0]) - 1;
      const insideDropIndex = parseInt(splitted[1]) - 1;

      const newList = [...dropList];
      newList[topLevelIndex] = {
        ...newList[topLevelIndex],
        insideDrop: newList[topLevelIndex].insideDrop.map((each, index) => {
          if (index === insideDropIndex) {
            return {
              ...each,
              isShowDropDown: !each.isShowDropDown,
            };
          }
          return each;
        }),
      };

      updateList(newList);
    }
  };

  const commonSideBar = (isDarkSider) => {
    return (
      <ComSideTextContainer>
        <MiniSideHeading>CORE</MiniSideHeading>
        <SideIconTextArrowContainer theme={isDarkSider.toString()} to="/">
          <SideIconTextContainer>
            <AiFillDashboard size={20} />
            <SideMenuTextPara theme={isDarkSider}>Dashboard</SideMenuTextPara>
          </SideIconTextContainer>
        </SideIconTextArrowContainer>

        {/* Drop Down Menu */}

        <MiniSideHeading>INTERFACE</MiniSideHeading>
        {dropList.map((each) => (
          <React.Fragment key={each.id}>
            <MenuItem
              key={each.id}
              detail={each}
              functionToChangeDrop={functionToChangeDrop}
            />
            {each.isShowDropDown && each.isDrop === true
              ? each.insideDrop.map((insiderItems) => (
                  <React.Fragment key={insiderItems.id}>
                    <MenuItem
                      key={insiderItems.id}
                      detail={insiderItems}
                      functionToChangeDrop={functionToChangeDrop}
                    />
                    {insiderItems.isShowDropDown && insiderItems.isDrop === true
                      ? insiderItems.insideDrop.map((triple) => (
                          <React.Fragment key={triple.id}>
                            <MenuItem key={triple.id} detail={triple} />
                          </React.Fragment>
                        ))
                      : null}
                  </React.Fragment>
                ))
              : null}
          </React.Fragment>
        ))}

        {/* Drop Down Menu */}

        <MiniSideHeading>Addons</MiniSideHeading>
        <SideIconTextArrowContainer theme={isDarkSider.toString()} to="/charts">
          <SideIconTextContainer>
            <AiOutlineBarChart size={20} />
            <SideMenuTextPara>Charts</SideMenuTextPara>
          </SideIconTextContainer>
        </SideIconTextArrowContainer>
        <SideIconTextArrowContainer theme={isDarkSider.toString()} to="/tables">
          <SideIconTextContainer>
            <BsTable size={20} />
            <SideMenuTextPara>Tables</SideMenuTextPara>
          </SideIconTextContainer>
        </SideIconTextArrowContainer>
      </ComSideTextContainer>
    );
  };

  const FooterSider = isDarkSider => {
    return (
      <BottomSiderTextContainer theme={isDarkSider.toString()}>
        <BottomText>logged in as:</BottomText>
        <BottomText big={"true"}>Start Bootstrap</BottomText>
      </BottomSiderTextContainer>
    );
  };

  return (
    <SidebarContext.Consumer>
      {(value) => {
        const { isDarkSider, isShowMobileSider, isShowPcSider } = value;

        return (
          <CompleteSidebarContainer theme={isDarkSider.toString()}>
            {isShowPcSider && (
              <PcSidebarConatiner theme={isDarkSider.toString()}>
                {commonSideBar(isDarkSider.toString())}
                {FooterSider(isDarkSider)}
              </PcSidebarConatiner>
            )}
            <MobileSidebarContainer
              theme={isDarkSider.toString()}
              mobile={isShowMobileSider.toString()}
            >
              {commonSideBar(isDarkSider.toString())}
              {FooterSider(isDarkSider)}
            </MobileSidebarContainer>
          </CompleteSidebarContainer>
        );
      }}
    </SidebarContext.Consumer>
  );
};

export default Sidebar;
