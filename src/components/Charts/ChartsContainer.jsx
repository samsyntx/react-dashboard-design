import React from "react";

import {
  ChartsContainerCom,
  CCHeadingIconContainer,
  CCchartTitle,
  CCmainChildContainer,
  CCbottomTimeContainer,
  CCTitleIcon,
} from "./ChartsStyled";

const ContainerCard = (props, ) => {
  const {name, icon, time} = props.detail;
  
  return (
    <ChartsContainerCom>
      <CCHeadingIconContainer>
        <CCTitleIcon>{icon}</CCTitleIcon>
        <CCchartTitle>{name}</CCchartTitle>
      </CCHeadingIconContainer>
      <CCmainChildContainer >
        {props.children}
      </CCmainChildContainer>
      <CCbottomTimeContainer>{time}</CCbottomTimeContainer>
    </ChartsContainerCom>
  );
};

export default ContainerCard;
