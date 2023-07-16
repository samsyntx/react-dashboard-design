import React from "react";

import {
  ChartsContainerCom,
  CCHeadingIconContainer,
  CCchartTitle,
  CCmainChildContainer, CCWhiteBgContainer,
  CCbottomTimeContainer,
  CCTitleIcon,
} from "./ChartsStyled";

const ContainerCard = (props,) => {
  const { name, icon, time } = props.detail;

  return (
    <ChartsContainerCom>
      <CCHeadingIconContainer>
        <CCTitleIcon>{icon}</CCTitleIcon>
        <CCchartTitle>{name}</CCchartTitle>
      </CCHeadingIconContainer>
      <CCWhiteBgContainer>
        <CCmainChildContainer >
          {props.children}
        </CCmainChildContainer>
      </CCWhiteBgContainer>

      <CCbottomTimeContainer>{time}</CCbottomTimeContainer>
    </ChartsContainerCom>
  );
};

export default ContainerCard;
